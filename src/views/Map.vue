<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-09 18:30:45
-->
<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import Basemap from "@arcgis/core/Basemap";

import { add, requestRender, toRenderCoordinates } from "@arcgis/core/views/3d/externalRenderers";
export default {
  name: "Map",
  data() {
    return {
      sceneView: null,
      ciMesh: null,
      mesh: null,
      poi: [108.3, 22.7, 0.5],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new Map({
        basemap: "hybrid",
      });
      this.sceneView = new SceneView({
        container: "viewDiv",
        viewingMode: "global",
        map: map,
        camera: {
          position: [108.3, 22.8, 6000],
          tilt: 60,
          heading: 0,
          fov: 55,
        },
      });
      var signRender = {
        scene: null,
        camera: null,
        renderer: null,
        setup: (context) => {
          this.renderer = new THREE.WebGLRenderer({
            context: context.gl, // 可用于将渲染器附加到已有的渲染环境(RenderingContext)中
            premultipliedAlpha: false, // renderer是否假设颜色有 premultiplied alpha. 默认为true
          });
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.renderer.setViewport(0, 0, this.sceneView.width, this.sceneView.height); //视图大小设置
          this.renderer.autoClearDepth = false; // 定义renderer是否清除深度缓存
          this.renderer.autoClearStencil = false; // 定义renderer是否清除模板缓存
          this.renderer.autoClearColor = false; // 定义renderer是否清除颜色缓存

          const originalSetRenderTarget = this.renderer.setRenderTarget.bind(this.renderer);
          this.renderer.setRenderTarget = (target) => {
            originalSetRenderTarget(target);
            if (target == null) {
              context.bindRenderTarget(); // 绑定外部渲染器应该渲染到的颜色和深度缓冲区
            }
          };
          this.scene = new THREE.Scene(); //定义场景
          this.camera = new THREE.PerspectiveCamera(); //定义相机
          this.mesh = this.createBoxGeo([108.3, 22.8, 800]);
          this.scene.add(this.mesh);
          this.ciMesh = this.createPointMesh(this.poi, "/img/btmcircle.png");
          this.scene.add(this.ciMesh);

          this.scene.add(this.addLine(this.poi));
          context.resetWebGLState();
        },
        render: (context) => {
          this.mesh.rotation.y += 0.01;
          this.mesh.rotation.z += 0.01;
          this.mesh.rotation.x += 0.01;
          this.ciMesh.scale.x = this.ciMesh.scale.x + 1;
          this.ciMesh.scale.y = this.ciMesh.scale.y + 1;
          this.ciMesh.scale.z = this.ciMesh.scale.z + 1;
          if (this.ciMesh.scale.x > 100) {
            this.ciMesh.scale.x = 60;
            this.ciMesh.scale.y = 60;
            this.ciMesh.scale.z = 60;
          }
          debugger;
          // 更新相机参数
          const cam = context.camera;
          this.camera.position.set(cam.eye[0], cam.eye[1], cam.eye[2]);
          this.camera.up.set(cam.up[0], cam.up[1], cam.up[2]);
          this.camera.lookAt(new THREE.Vector3(cam.center[0], cam.center[1], cam.center[2]));
          this.camera.projectionMatrix.fromArray(cam.projectionMatrix);
          // 绘制场景
          this.renderer.state.reset();
          this.renderer.render(this.scene, this.camera);
          requestRender(this.sceneView); // 请求重绘视图。
          context.resetWebGLState(); // cleanup
        },
      };
      add(this.sceneView, signRender);
    },
    createBoxGeo(poi) {
      var resultPoint = [];
      toRenderCoordinates(this.sceneView, poi, 0, SpatialReference.WGS84, resultPoint, 0, 1);
      let sphereGeom = new THREE.BoxGeometry(400, 400, 400);
      let material = new THREE.MeshBasicMaterial({ color: "red" });
      let mesh = new THREE.Mesh(sphereGeom, material);
      mesh.position.set(resultPoint[0], resultPoint[1], resultPoint[2]);
      return mesh;
    },
    createPointMesh(poi, imgUrl) {
      var texture = new THREE.TextureLoader().load(imgUrl);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      var resultPoint = [];
      toRenderCoordinates(this.sceneView, poi, 0, SpatialReference.WGS84, resultPoint, 0, 1);
      var material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true, //使用背景透明的png贴图，注意开启透明计算
        // side: THREE.DoubleSide, //双面可见
        depthWrite: true, //禁止写入深度缓冲区数据
      });
      var planGeometry = new THREE.PlaneGeometry(10, 10, 32);
      var mesh = new THREE.Mesh(planGeometry, material);
      var size = 60; //矩形平面Mesh的尺寸
      mesh.scale.set(size, size, size); //设置mesh大小
      //设置mesh位置
      mesh.position.set(resultPoint[0], resultPoint[1], resultPoint[2]);
      // mesh在球面上的法线方向(球心和球面坐标构成的方向向量)
      var coordVec3 = new THREE.Vector3(resultPoint[0], resultPoint[1], resultPoint[2]).normalize();
      // mesh默认在XOY平面上，法线方向沿着z轴new THREE.Vector3(0, 0, 1)
      var meshNormal = new THREE.Vector3(0, 0, 1);
      // 四元数属性.quaternion表示mesh的角度状态
      //.setFromUnitVectors();计算两个向量之间构成的四元数值
      mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3);
      return mesh;
    },
    addLine(poi) {
      var resultPoint = [];
      toRenderCoordinates(this.sceneView, poi, 0, SpatialReference.WGS84, resultPoint, 0, 1);
      var resultPoint1 = [];
      toRenderCoordinates(this.sceneView, [108.3, 22.7, 3000], 0, SpatialReference.WGS84, resultPoint1, 0, 1);
      let geometry = new THREE.BufferGeometry();
      const position = [];
      position.push(resultPoint[0], resultPoint[1], resultPoint[2]);
      position.push(resultPoint1[0], resultPoint1[1], resultPoint1[2]);
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
      let material = new THREE.LineBasicMaterial({ color: new THREE.Color("#1E90FF"), linewidth: 10 });
      let line = new THREE.Line(geometry, material);
      return line;
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
