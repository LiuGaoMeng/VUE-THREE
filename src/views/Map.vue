<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-08 21:18:14
-->
<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import WebScene from "@arcgis/core/WebScene";
import * as THREE from "three";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import Basemap from "@arcgis/core/Basemap";

import { add, requestRender, toRenderCoordinates } from "@arcgis/core/views/3d/externalRenderers";
export default {
  name: "Map",
  data() {
    return {
      cube: null,
      signRender: null,
      tabList: [],

      mesh: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let that = this;
      let tdtLayer = new WebTileLayer({
        urlTemplate:
          "http://{subDomain}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=5b0d5425136083b7dfee9e5a21cd5a11",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      });
      let tdtpoi = new WebTileLayer({
        urlTemplate:
          "http://{subDomain}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=5b0d5425136083b7dfee9e5a21cd5a11",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      });

      let amapLayer = new WebTileLayer({
        urlTemplate: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      });

      let amapPoi = new WebTileLayer({
        urlTemplate: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      });

      let baseMap_img = new Basemap({
        baseLayers: [tdtLayer],
        // thumbnailUrl: "/img/map/cia.png",
      });
      // let map = new Map({
      //   basemap: baseMap_img,
      // });
      const map = new Map({
        basemap: "hybrid",
        // ground: "world-elevation"
      });
      var sceneView = new SceneView({
        container: "viewDiv",
        viewingMode: "global",
        map: map,
        camera: {
          position: [108.3, 22.8, 6000],
          tilt: 60,
          heading: 0,
          fov: 55,
        },
        // spatialReference: {
        //   wkid: 4326,
        // },
      });
      var signRender = {
        scene: null,
        camera: null,
        renderer: null,
        // ambient: null, // three.js中的环境光
        // sun: null, // three.js中的平行光源，模拟太阳光
        setup: (context) => {
          this.renderer = new THREE.WebGLRenderer({
            context: context.gl, // 可用于将渲染器附加到已有的渲染环境(RenderingContext)中
            premultipliedAlpha: false, // renderer是否假设颜色有 premultiplied alpha. 默认为true
          });
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.renderer.setViewport(0, 0, sceneView.width, sceneView.height); //视图大小设置
          this.renderer.autoClearDepth = false; // 定义renderer是否清除深度缓存
          this.renderer.autoClearStencil = false; // 定义renderer是否清除模板缓存
          this.renderer.autoClearColor = false; // 定义renderer是否清除颜色缓存
          this.scene = new THREE.Scene(); //定义场景
          this.camera = new THREE.PerspectiveCamera(); //定义相机
          const originalSetRenderTarget = this.renderer.setRenderTarget.bind(this.renderer);
          this.renderer.setRenderTarget = function(target) {
            originalSetRenderTarget(target);
            if (target == null) {
              context.bindRenderTarget();
            }
          };
          context.resetWebGLState();
        },
        render: (context) => {
          var resultPoint = [];
          toRenderCoordinates(sceneView, [108.3, 22.8, 1000], 0, SpatialReference.WGS84, resultPoint, 0, 1);
          let sphereGeom = new THREE.BoxGeometry(400, 400, 400);
          let material = new THREE.MeshBasicMaterial({ color: "red" });
          let mesh = new THREE.Mesh(sphereGeom, material);
          mesh.position.set(resultPoint[0], resultPoint[1], resultPoint[2]);
          this.scene.add(mesh);
          const cam = context.camera;
          this.camera.position.set(cam.eye[0], cam.eye[1], cam.eye[2]);
          this.camera.up.set(cam.up[0], cam.up[1], cam.up[2]);
          this.camera.lookAt(new THREE.Vector3(cam.center[0], cam.center[1], cam.center[2]));
          this.camera.projectionMatrix.fromArray(cam.projectionMatrix);
          this.renderer.state.reset();
          this.renderer.render(this.scene, this.camera);
          requestRender(sceneView);
          context.resetWebGLState();
        },
      };
      // add(sceneView, signRender);
      sceneView.when(() => {
        debugger;
        add(sceneView, signRender);
      });
    },

    renderderAnimation() {
      requestAnimationFrame(this.renderderAnimation);
      this.mesh.rotation.y += 0.01;
      this.mesh.rotation.z += 0.01;
      this.mesh.rotation.x += 0.01;
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
