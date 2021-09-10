<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-10 18:16:03
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
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
export default {
  name: "Map",
  data() {
    return {
      sceneView: null,
      ciMesh: null,
      groupList: [],
      poi: [108.3, 22.7, 0.5],
      dataList: [
        {
          name: "潭村水闸",
          coox: 113.341965,
          cooy: 23.113024,
          id: "tc",
          value: 5,
          warnValue: 10,
          trend: "up",
          STTP: "RR",
        },
        {
          name: "员村水闸",
          coox: 113.35089900000001,
          cooy: 23.111856,
          id: "yc",
          value: 2,
          warnValue: 3,
          trend: "up",
          STTP: "RF",
        },
        {
          name: "程界西涌",
          coox: 113.36743700000001,
          cooy: 23.110167999999998,
          id: "tc",
          value: 3,
          warnValue: 4,
          trend: "down",
          STTP: "RP",
        },
        {
          name: "长兴截污闸",
          coox: 113.35840300000001,
          cooy: 23.169264,
          id: "cx",
          value: 5,
          warnValue: 10,
          trend: "up",
          STTP: "RV",
        },
        {
          name: "车陂涌闸",
          coox: 113.39313700000001,
          cooy: 23.111074000000002,
          id: "cb",
          value: 5,
          warnValue: 10,
          trend: "up",
          STTP: "RR",
        },
        {
          name: "杨梅河",
          coox: 113.40226999999999,
          cooy: 23.152552,
          id: "ym",
          value: 5,
          warnValue: 8,
          trend: "down",
          STTP: "RF",
        },
        {
          name: "鱼珠水闸",
          coox: 113.42236700000001,
          cooy: 23.102646,
          id: "yz",
          value: 4,
          warnValue: 6,
          trend: "down",
          STTP: "RV",
        },
      ],
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
          position: [113.37, 23, 10000],
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
        css3dRenderer: null,
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
          this.dataList.forEach((item) => {
            let group = new THREE.Group();
            group.add(this.createPointMesh([item.coox, item.cooy, 0.5], "/img/map/sign/btmcircle.png"));
            group.add(this.addLine([item.coox, item.cooy, 0]));
            group.add(this.css2dDiv(item, [item.coox, item.cooy, 2000]));
            this.scene.add(group);
            this.groupList.push(group);
          });

          //CSS2DRenderer
          this.css2dRenderer = new CSS2DRenderer();
          this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);
          this.css2dRenderer.domElement.style.position = "absolute";
          // 相对鼠标的相对偏移
          this.css2dRenderer.domElement.style.top = "-20px";
          this.css2dRenderer.domElement.style.left = "125px";
          // //设置pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
          this.css2dRenderer.domElement.style.pointerEvents = "none";
          document.getElementById("viewDiv").appendChild(this.css2dRenderer.domElement);
          this.changeVisible();
          context.resetWebGLState();
        },
        render: (context) => {
          this.groupList.forEach((item) => {
            item.children[0].scale.x = item.children[0].scale.x + 1.5;
            item.children[0].scale.y = item.children[0].scale.y + 1.5;
            item.children[0].scale.z = item.children[0].scale.z + 1.5;
            if (item.children[0].scale.x > 100) {
              item.children[0].scale.x = 60;
              item.children[0].scale.y = 60;
              item.children[0].scale.z = 60;
            }
          });
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
          // this.css2dRenderer.render(this.scene, this.camera);
          this.css3dRenderer.render(this.scene, this.camera);
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
      var resultPoint1 = this.xyToRender([poi[0], poi[1], 2000]);
      let geometry = new THREE.BufferGeometry();
      const position = [];
      position.push(resultPoint[0], resultPoint[1], resultPoint[2]);
      position.push(resultPoint1[0], resultPoint1[1], resultPoint1[2]);
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
      let material = new THREE.LineBasicMaterial({ color: new THREE.Color("#1E90FF"), linewidth: 10 });
      let line = new THREE.Line(geometry, material);
      return line;
    },
    css2dDiv(item, poi) {
      let stData = this.addclassImg(item.STTP);

      let resultPoint1 = this.xyToRender(poi);
      let div = document.createElement("div");
      div.id = "div1";
      div.innerHTML =
        '<div class="tabtop"><div class="left" ><img src="' +
        stData.imgUrl +
        '" ></div><div class="right"><span class="moniname">' +
        item.name +
        '</span><span class="value">' +
        stData.name +
        item.value +
        stData.unit +
        '<img src="/img/map/sign/rise.png" style="padding-left:5px"></img><span class="warnvalue">预警值：' +
        item.warnValue +
        stData.unit +
        "</span></div></div>";
      div.classList = "tap";
      // const label = new CSS2DObject(div);
      const label = new CSS3DObject(div);
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
    addclassImg(sttp) {
      switch (sttp) {
        case "RR":
          return {
            imgUrl: "/img/map/sign/river.png",
            unit: "m",
            name: "河道水位：",
          };
        case "RF":
          return {
            imgUrl: "/img/map/sign/rainfall.png",
            unit: "cm",
            name: "雨量：",
          };
        case "RV":
          return {
            imgUrl: "/img/map/sign/reservoir.png",
            unit: "m",
            name: "水库：",
          };
        case "RP":
          return {
            imgUrl: "/img/map/sign/waterpoint.png",
            unit: "cm",
            name: "积水点：",
          };

        default:
          break;
      }
    },
    changeVisible() {
      this.sceneView.watch("camera", () => {
        this.groupList.forEach((item) => {
          if (this.sceneView.zoom < 10) {
            item.children[2].element.style.visibility = "hidden";
            item.visible = false;
          } else {
            item.children[2].element.style.visibility = "visible";
            item.visible = true;
          }
        });
      });
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
  position: absolute;

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
  text-align: center;
  background-color: rgba(0, 10, 40);
}

.left {
  float: left;
  width: 50px;
  margin-top: 10px;
}
.right {
  overflow: hidden;
  height: 100%;
}
.moniname {
  display: block;
  color: rgba(255, 255, 255, 0.842);
  font-size: 14px;
  font-weight: bold;
  /* text-align: center; */
  padding-top: 10px;
}
.value {
  color: azure;
  font-size: 9px;
  padding-top: 14px;
}
.warnvalue {
  color: azure;
  font-size: 9px;
  padding-top: 14px;
  padding-left: 30px;
}
</style>
