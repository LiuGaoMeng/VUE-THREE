<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-07 19:00:13
-->
<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import * as threeTools from "../libs/tools/threeTool";
import * as THREE from "three";
import { add, requestRender, toRenderCoordinates } from "@arcgis/core/views/3d/externalRenderers";
export default {
  name: "Map",
  data() {
    return {
      cube: null,
      signRender: null,
      tabList: [],
      data: [
        {
          name: "潭村水闸",
          coox: 113.341965,
          cooy: 23.113024,
          id: "tc",
          v: 5,
          warnValue: 10,
        },
        {
          name: "员村水闸",
          coox: 113.35089900000001,
          cooy: 23.111856,
          id: "yc",
        },
        {
          name: "程界西涌",
          coox: 113.36743700000001,
          cooy: 23.110167999999998,
          id: "tc",
        },
        {
          name: "长兴截污闸",
          coox: 113.35840300000001,
          cooy: 23.169264,
          id: "cx",
        },
        {
          name: "车陂涌闸",
          coox: 113.39313700000001,
          cooy: 23.111074000000002,
          id: "cb",
        },
        {
          name: "杨梅河",
          coox: 113.40226999999999,
          cooy: 23.152552,
          id: "ym",
        },
        {
          name: "鱼珠水闸",
          coox: 113.42236700000001,
          cooy: 23.102646,
          id: "yz",
        },
        { name: "测试", coox: 108.3, cooy: 22.8, id: "cs" },
        { name: "测试", coox: 108.35, cooy: 22.82, id: "cs2" },
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let that = this;
      let map = new Map({
        // basemap: "dark-gray-vector",
        // ground: "world-elevation",
      });
      var sceneView = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
          position: [108.3, 22.49, 2000],
          tilt: 60,
          heading: 0,
          fov: 55,
        },
        spatialReference: {
          wkid: 4326,
        },
      });
      that.signRender = {
        scene: null,
        camera: null,
        renderer: null,
        setup: (context) => {
          debugger;
          this.scene = new THREE.Scene(); //定义场景
          const cam = context.camera;
          this.camera = new THREE.PerspectiveCamera(); //定义相机
          // this.camera = new THREE.PerspectiveCamera(cam.fovY, cam.aspect, cam.near, cam.far); //定义相机

          this.renderer = new THREE.WebGLRenderer();
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.setClearColor("#FFFFFF");
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.renderer.setViewport(0, 0, sceneView.width, sceneView.height); //视图大小设置
          // document.getElementById("viewDiv").appendChild(this.renderer.domElement);
          this.renderer.autoClearDepth = false; // 定义renderer是否清除深度缓存
          this.renderer.autoClearStencil = false; // 定义renderer是否清除模板缓存
          this.renderer.autoClearColor = false; // 定义renderer是否清除颜色缓存
          let originalSetRenderTarget = this.renderer.setRenderTarget.bind(this.renderer);
          this.renderer.setRenderTarget = function(target) {
            originalSetRenderTarget(target);
            if (target == null) {
              context.bindRenderTarget();
            }
          };
          var resultPoint = [];
          debugger;
          let sp = sceneView.spatialReference;
          toRenderCoordinates(sceneView, [108.3, 22.49, 10], 0, sceneView.spatialReference, resultPoint, 0, 1);
          debugger;
          //半球几何
          var sphereGeom = new THREE.SphereGeometry(1000, 100, 100, 0, Math.PI * 2, 0, Math.PI / 2);
          //半球几何
          var material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 1,
            color: new THREE.Color("red"),
          });
          //使用转换结果resultPoint设置网格对象的位置
          var mesh = new THREE.Mesh(sphereGeom, material);
          mesh.position.set(resultPoint[0], resultPoint[1], resultPoint[2]);
          this.scene.add(mesh);
        },
        render: (context) => {
          var cam = context.camera;
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
      add(sceneView, that.signRender);
    },

    renderderAnimation() {
      requestAnimationFrame(this.renderderAnimation);
      // this.cube.rotation.y += 0.01;
      // this.cube.rotation.z += 0.01;
      // this.cube.rotation.x += 0.01;
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
