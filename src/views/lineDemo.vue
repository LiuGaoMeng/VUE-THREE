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
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer"; // 引入包
export default {
  name: "lineDemo",
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      width: null,
      height: null,
      // light: null,
      cube: null,
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      this.initRender();
      this.initCamera();
      this.initScene();
      this.initLight();
      this.initObject();
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    },
    initRender() {
      this.width = document.getElementById("viewDiv").clientWidth;
      this.height = document.getElementById("viewDiv").clientHeight;
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      this.renderer.setSize(this.width, this.height);

      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
      this.renderer.setClearColor("#FFFFFF");
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
      this.camera.position.x = 0;
      this.camera.position.y = 1000;
      this.camera.position.z = 0;
      this.camera.up.x = 0;
      this.camera.up.y = 0;
      this.camera.up.z = 1;
      this.camera.lookAt({
        x: 0,
        y: 0,
        x: 0,
      });
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initLight() {
      let light = new THREE.DirectionalLight( 0xffffff, 0.5 );
      light.position.set(100, 100, 200);
      this.scene.add(light);
    },
    initObject() {
      let geometry = new THREE.BufferGeometry();
      let points = [];
      points.push(-100, 0, 0);
      points.push(100, 0, 0);
      let material = new THREE.LineBasicMaterial({ color: new THREE.Color("#1E90FF"),vertexColors: true });
      let colorStart = new THREE.Color("#FF0000");
      let colorEnd = new THREE.Color("#FFFF00");
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      // geometry.setAttribute("color", new THREE.Float32BufferAttribute([colorStart, colorEnd], 3));
      let line = new THREE.Line(geometry, material);
      this.scene.add(line);
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
