<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-23 09:21:23
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-23 09:47:46
-->
<template>
  <div id="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "ellipsoid",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      vertexShader: `varying vec3 vNormal;
    void main() {
                //将attributes的normal通过varying赋值给了向量vNormal
        vNormal = normal;
                //projectionMatrix是投影变换矩阵 modelViewMatrix是相机坐标系的变换矩阵 最后我们将y值乘以1.4得到了一个形如鸡蛋的几何体
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position.x, position.y * 1.4, position.z, 1.0 );
    }`,
      fragmentShader: ` varying vec3 vNormal;
    void main() {
                //vNormal是一个已经归一化的三维向量
        float pr = (vNormal.x + 1.0) / 2.0; //pr红色通道值范围为0~1
        float pg = (vNormal.y + 1.0) / 2.0; //pg绿色通道值范围为0~1
        float pb = (vNormal.z + 1.0) / 2.0; //pb蓝色通道值范围为0~1
        gl_FragColor=vec4(pr, pg, pb, 1.0); //最后设置顶点颜色，点与点之间会自动插值
    }`,
    };
  },
  mounted() {
    this.initScene();
    this.initCamera();
    this.initRender();
    this.initObject();
    this.rendererAnimation();
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 80;
    },
    initRender() {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      let geom = new THREE.SphereGeometry(10, 30, 20);
      let material = new THREE.ShaderMaterial({
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader,
      });
      this.mesh = new THREE.Mesh(geom, material);
      this.scene.add(this.mesh);
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    rendererAnimation() {
      this.mesh.rotation.x += 0.1;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.rendererAnimation);
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
