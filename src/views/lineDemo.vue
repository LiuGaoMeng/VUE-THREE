<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-03 10:51:12
-->
<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import * as THREE from "three";
import { add, requestRender } from "@arcgis/core/views/3d/externalRenderers";
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer' // 引入包
export default {
  name: "lineDemo",
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cube: null,
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      let material = new THREE.MeshBasicMaterial({ color: "blue" });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);
      this.camera.position.z = 2.85;
      this.renderderAnimation();
    },
    renderderAnimation() {
      requestAnimationFrame(this.renderderAnimation);
      this.cube.rotation.y += 0.01;
      this.cube.rotation.z += 0.01;
      this.cube.rotation.x += 0.01;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
<style scoped>
@import "/assets/esri/themes/dark/main.css";
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
.mapDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
