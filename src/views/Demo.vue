<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-08 14:48:39
-->
<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { add, requestRender } from "@arcgis/core/views/3d/externalRenderers";
export default {
  name: "Demo",
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cube: null,
      htdata:
        '<div class="tag" id="tag"><span style="color:white;font-size: 10px;padding: 5px">楼宇名称：</span><span style="font-size: 11px;font-weight: bold">XXX大厦</span><p style="padding: 5px;margin-top: -3px;">占地面积：25541平方米</p>' +
        "</div>",
    };
  },
  mounted() {
    // this.initMap();
    this.initThree();
    // this.initCCS2D();
  },
  methods: {
    initMap() {
      let map = new Map({
        // basemap: "dark-gray-vector",
        ground: "world-elevation",
      });
      var sceneView = new SceneView({
        container: "viewDiv",
        map: map,
      });
    },
    initThree() {
      this.scene = new THREE.Scene();
      // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      this.camera = new THREE.PerspectiveCamera();
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      let material = new THREE.MeshBasicMaterial({ color: "blue" });
      this.cube = new THREE.Mesh(geometry, material);


      //  var sphereGeom = new THREE.SphereGeometry(1000, 100, 100, 0, Math.PI * 2, 0, Math.PI / 2);
      //     //半球几何
      //     var material = new THREE.MeshBasicMaterial({
      //       transparent: true,
      //       opacity: 1,
      //       color: new THREE.Color("#f28000"),
      //     });
      //     //使用转换结果resultPoint设置网格对象的位置
      //    this.cube = new THREE.Mesh(sphereGeom, material);

    // var geometry = new THREE.CylinderBufferGeometry( 15, 15, 40, 32 );
    // var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    // this.cube = new THREE.Mesh( geometry, material );


      this.scene.add(this.cube);
      this.camera.position.z =10;
      this.renderderAnimation();
    },
    renderderAnimation() {
      requestAnimationFrame(this.renderderAnimation);
      this.cube.rotation.y += 0.01;
      this.cube.rotation.z += 0.01;
      this.cube.rotation.x += 0.01;
      this.renderer.render(this.scene, this.camera);
    },
    // initCCS2D() {
    //   var moonLabel = new CSS2DObject(this.htdata);

    //   var labelRenderer = new CSS2DRenderer();
    // },
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
