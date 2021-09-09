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
import { add, requestRender, toRenderCoordinates } from "@arcgis/core/views/3d/externalRenderers";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
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
        css2dRenderer: null,
        setup: (context) => {
          this.renderer = new THREE.WebGLRenderer({
            context: context.gl, // 可用于将渲染器附加到已有的渲染环境(RenderingContext)中
            premultipliedAlpha: false, // renderer是否假设颜色有 premultiplied alpha. 默认为true
          });
          // this.renderer.setSize(window.innerWidth, window.innerHeight);
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
          let label = this.css2dDiv();
          this.scene.add(label);
         
          //CSS2DRenderer
          this.css2dRenderer = new CSS2DRenderer();
          this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);
          this.css2dRenderer.domElement.style.position = "absolute";
          // 相对鼠标的相对偏移
          this.css2dRenderer.domElement.style.top = "-20px";
          this.css2dRenderer.domElement.style.left = "125px";
          // //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
          this.css2dRenderer.domElement.style.pointerEvents = "none";
          document.getElementById('viewDiv').appendChild(this.css2dRenderer.domElement );
          context.resetWebGLState();
        },
        render: (context) => {
           
          this.mesh.rotation.y += 0.01;
          this.mesh.rotation.z += 0.01;
          this.mesh.rotation.x += 0.01;
          this.ciMesh.scale.x = this.ciMesh.scale.x + 1.5;
          this.ciMesh.scale.y = this.ciMesh.scale.y + 1.5;
          this.ciMesh.scale.z = this.ciMesh.scale.z + 1.5;
          if (this.ciMesh.scale.x > 100) {
            this.ciMesh.scale.x = 60;
            this.ciMesh.scale.y = 60;
            this.ciMesh.scale.z = 60;
          }
          // 更新相机参数
          const cam = context.camera;
          this.camera.position.set(cam.eye[0], cam.eye[1], cam.eye[2]);
          this.camera.up.set(cam.up[0], cam.up[1], cam.up[2]);
          this.camera.lookAt(new THREE.Vector3(cam.center[0], cam.center[1], cam.center[2]));
          this.camera.projectionMatrix.fromArray(cam.projectionMatrix);
          // 绘制场景
          this.renderer.state.reset();
          this.renderer.render(this.scene, this.camera);

          // this.css2dRenderer.state.reset();
          this.css2dRenderer.render(this.scene, this.camera);
          requestRender(this.sceneView); // 请求重绘视图。
          context.resetWebGLState(); // cleanup
        },
      };
      add(this.sceneView, signRender);
    },
    createBoxGeo(poi) {
      var resultPoint = this.xyToRender(poi);
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
      var resultPoint = this.xyToRender(poi);
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
      var resultPoint = this.xyToRender(poi);
      var resultPoint1 = this.xyToRender([108.3, 22.7, 2000]);
      let geometry = new THREE.BufferGeometry();
      const position = [];
      position.push(resultPoint[0], resultPoint[1], resultPoint[2]);
      position.push(resultPoint1[0], resultPoint1[1], resultPoint1[2]);
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
      let material = new THREE.LineBasicMaterial({ color: new THREE.Color("#1E90FF"), linewidth: 10 });
      let line = new THREE.Line(geometry, material);
      return line;
    },
    css2dDiv(poi) {
      let resultPoint1 = this.xyToRender([108.3, 22.7, 2000]);
      let div = document.createElement("div");
      div.id='div1'
      div.innerHTML =
        '<div class="tabtop"><span style="color:white;font-size: 10px;padding: 5px">楼宇名称：</span><span style="font-size: 11px;font-weight: bold">XXX大厦</span><p style="padding: 5px;margin-top: -3px;">占地面积：25541平方米</p></div>'
      div.classList = "tap";
      const label = new CSS2DObject(div);
      div.style.pointerEvents = "none"; //避免HTML标签遮挡三维场景的鼠标事件

      // 设置HTML元素标签在three.js世界坐标中位置
      label.position.set(resultPoint1[0], resultPoint1[1], resultPoint1[2]);
      return label;
    },
    xyToRender(poi) {
      let resultPoint = [];
      toRenderCoordinates(this.sceneView, poi, 0, SpatialReference.WGS84, resultPoint, 0, 1);
      return resultPoint;
    },
  },
};
</script>
<style>
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
.tap {
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 1;
  font-size: 4px;
  color: aqua;
  width: 250px;
  height: 60px;
}
.tabtop {
  height: 60px;
  background-color: rgba(0, 10, 40);
}
.picture {
  height: 200px;
  text-align: center;
}
</style>
