<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-30 09:27:15
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-30 15:38:19
-->
<template>
  <div id="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "stopLight",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      vertexShader: `varying vec3 vPosition;
                    uniform float time;
                    void main() {
                        vPosition = position;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                    }`,
      fragmentShader: `
                    varying vec3 vPosition;
                    uniform float time;
                    void main() {
                        float time = mod(time, 3.0);//time值对3取模，得到[0,3)范围内的值。
                            //由于我们制作红绿灯时用了小技巧，让其z分量比较大，所以可以根据z的值判断是否为红绿灯面。然后在根据y值，判断为哪个灯。
                        if(vPosition.z == 6.1 && vPosition.y > 8.0) {
                            if(time < 1.0) {//时间为[0,1)红灯
                                gl_FragColor=vec4(1.0, 0.0, 0.0, 1.0);
                            } else {
                                gl_FragColor=vec4(0.2, 0.0, 0.0, 1.0);
                            }
                        } else if(vPosition.z == 6.1 && vPosition.y > -8.0) {//时间为[1,2)黄灯
                            if(time >= 1.0 && time < 2.0) {
                                gl_FragColor=vec4(1.0, 0.7, 0.0, 1.0);
                            } else {
                                gl_FragColor=vec4(0.2, 0.1, 0.0, 1.0);
                            }
                        } else if(vPosition.z == 6.1) {//时间为[2,3)绿灯
                            if(time >= 2.0) {
                                gl_FragColor=vec4(0.0, 1.0, 0.0, 1.0);
                            } else {
                                gl_FragColor=vec4(0.0, 0.2, 0.0, 1.0);
                            }
                        } else {//其余部分为灰色
                            gl_FragColor=vec4(0.2, 0.2, 0.2, 1.0);
                        }
                    }
                `,
      extrudeSettings: {
        steps: 2, //用于沿着挤出样条的深度细分的点的数量，默认值为1
        depth: 5, //挤出的形状的深度，默认值为100
        bevelEnabled: true, //对挤出的形状应用是否斜角，默认值为true
        bevelThickness: 1, //设置原始形状上斜角的厚度。默认值为6
        bevelSize: 1, //斜角与原始形状轮廓之间的延伸距离
        bevelSegments: 10, //斜角的分段层数，默认值为3
        curveSegments: 12, //曲线上点的数量，默认值是12
      },
      uniforms: {
        time: {
          type: "f",
          value: 0.0,
        },
      },
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      this.initScene();
      this.initCamera();
      this.initRender();
      this.initLight();
      this.initObject();
      this.requestAnimation();
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 150;
    },
    initRender() {
      let width = document.getElementById("viewDiv").clientWidth;
      let height = document.getElementById("viewDiv").clientHeight;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initLight() {
      let light = new THREE.AmbientLight(0xffffff, 1);
      light.position.set(1000, 1000, 1000);
      this.scene.add(light);
    },
    initObject() {
      let shape = new THREE.Shape();
      shape.moveTo(-10, 20);
      shape.absarc(0, 20, 10, Math.PI, Math.PI * 2, true);
      shape.lineTo(10, -20);
      shape.absarc(0, -20, 10, 0, Math.PI, true);
      shape.lineTo(-10, 20);
      let frame = new THREE.ExtrudeGeometry(shape, this.extrudeSettings);
      let cylinGeom = new THREE.CylinderGeometry(6, 6, 6, 30, 20);
      // frame.merge(
      //   cylinGeom.clone(),
      //   new THREE.Matrix4().compose(
      //     new THREE.Vector3(0, 15, 3.1),
      //     new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
      //     new THREE.Vector3(1, 1, 1)
      //   )
      // );
      // frame.merge(
      //   cylinGeom.clone(),
      //   new THREE.Matrix4().compose(
      //     new THREE.Vector3(0, 0, 3.1),
      //     new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
      //     new THREE.Vector3(1, 1, 1)
      //   )
      // );
      // frame.merge(
      //   cylinGeom.clone(),
      //   new THREE.Matrix4().compose(
      //     new THREE.Vector3(0, -15, 3.1),
      //     new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
      //     new THREE.Vector3(1, 1, 1)
      //   )
      // );
      let material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader,
      });
      this.mesh = new THREE.Mesh(frame, material);
      this.scene.add(this.mesh);
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    requestAnimation() {
      this.uniforms.time.value += 0.01;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.requestAnimation);
    },
  },
};
</script>
<style scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
