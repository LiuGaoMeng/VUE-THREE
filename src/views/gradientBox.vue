<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-22 16:38:36
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-22 17:58:42
-->
<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "gradientBox",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      vertexShader: ` varying vec3 vNormal;
                        varying vec3 vPosition;
                            void main() {
                                //将attributes的normal通过varying赋值给了向量vNormal
                            vNormal = normal;
                            vPosition = position;
                                //projectionMatrix是投影变换矩阵 modelViewMatrix是相机坐标系的变换矩阵
                            gl_Position = projectionMatrix * modelViewMatrix * vec4( position.x, position.y, position.z, 1.0 );
                        }`,
      fragmentShader: ` varying vec3 vNormal;
                        varying vec3 vPosition;
                        void main() {
                            float cy = (fract((vPosition.y - 20.0) / 40.0) + 0.7) * 0.7;
                            if(vNormal.x==0.0&&vNormal.y==1.0&&vNormal.z==0.0){
                                cy =1.0;
                            }
                            gl_FragColor = vec4(0.5, cy, cy, 1.0);
                        }`,
    };
  },
  // created(){float cy = (fract((vPosition.y - 20.0) / 40.0) + 0.7) * 0.7;

  // },
  mounted() {
    this.initScene();
    this.initCamera();
    this.initRender();
    this.initObject();
    this.renderderAnimation();
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z =80;
    },
    initRender() {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      let geometry = new THREE.BoxGeometry(20,40, 20);
      let material = new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader,
      });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    renderderAnimation() {
      requestAnimationFrame(this.renderderAnimation);
      this.renderer.render(this.scene, this.camera);
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
