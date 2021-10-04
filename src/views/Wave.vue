<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-30 15:53:04
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-30 17:27:43
-->
<template>
  <div id="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "Wave",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      vertexShader: `
        attribute vec3 centers;
        uniform float time;
        void main() {
            float centery = sin(centers.x / 100.0 + time) * 40.0 + sin(centers.z / 100.0 + time) * 40.0;
            vec3 center = vec3(centers.x, 0, centers.z);
            vec3 target = position - center;
            vec3 newPosition = center + target * ((centery + 80.0) / 80.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition.x, newPosition.y + centery, newPosition.z, 1.0 );
        }
    `,
      fragmentShader: `
        void main() {
            gl_FragColor = vec4(0.0,0.5,0.8,1.0);
        }
    `,
      uniforms: {
        time: {
          type: "f",
          value: 0,
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
      this.initObject();
      this.requestAnimation();
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 60;
    },
    initRender() {
      this.renderer = new THREE.WebGLRenderer();
      let width = document.getElementById("viewDiv").clientWidth;
      let height = document.getElementById("viewDiv").clientHeight;
      this.renderer.setSize(width, height);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      let geometry = new THREE.BufferGeometry()
      for (let i = 0; i < 39; i++) {
        for (let j = 0; j < 39; j++) {
          let sphere = new THREE.SphereGeometry(2, 15, 10);
          sphere.translate(i * 50 - 950, 0, j * 50 - 950); //这里我们使用Geometry的translate方法将间隔调成50
          geometry.merge(sphere); //结合几何体
        }
      }
      let total = geometry.attributes.position.count; //几何体点的个数
      let every = total / 39 / 39; //每个球体点的个数
      let centers = new Float32Array(total * 3); //初始化类型数组，并设置长度
      //将中心点保存到centers中
      for (let i = 0; i < 39; i++) {
        for (let j = 0; j < 39; j++) {
          for (let k = 0; k < every; k++) {
            centers[(i * 39 * every + j * every + k) * 3] = i * 50 - 950;
            centers[(i * 39 * every + j * every + k) * 3 + 1] = 0;
            centers[(i * 39 * every + j * every + k) * 3 + 2] = j * 50 - 950;
          }
        }
      }
      geometry.setAttribute("centers", new THREE.BufferAttribute(centers, 3));
      let material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader,
      });
      let wavePoints = new THREE.Points(geometry, material);
      this.scene.add(wavePoints);
    },
    requestAnimation() {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.requestAnimation);
    },
  },
};
</script>
