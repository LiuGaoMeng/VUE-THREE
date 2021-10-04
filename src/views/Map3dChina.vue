<template>
  <div id="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "Map3dChina",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      jsonData: null,
      group: null,
      lineGroup: null,
      offsetX: 0.1,
      offsetY: 0.1,
      options: {
        steps: 1,
        depth: 2,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1,
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
      this.rendererAnimation();
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 80;
    },
    initRender() {
      let width = document.getElementById("viewDiv").clientWidth;
      let height = document.getElementById("viewDiv").clientWidth;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      this.group = new THREE.Group();
      this.lineGroup = new THREE.Group();
      this.$axios.get("/data/China.json").then((response) => {
        this.initMesh(response.data);
      });
    },
    initMesh(worldGeometry) {
      worldGeometry.features.forEach((worldItem, worldItemIndex) => {
        worldItem.geometry.coordinates.forEach((worldChildItem) => {
          worldChildItem.forEach((countryItem) => {
            
            //每个版块的点数组
            this.drawExtrude(this.drawShape(countryItem)); //传递数据画出地图的shape，返回结果再传到drawExtrude方法得到ExtrudeGeometry网格
            this.drawLine(countryItem); //传递数据画出地图边线
          });
        });
      });
      this.group.scale.y = 1.2; //group里面包含所有版块网格
      this.scene.add(this.group);
      this.lineGroup.scale.y = 1.2; //lineGruop里面包含所有线的网格
      this.scene.add(this.lineGroup);
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    rendererAnimation() {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.rendererAnimation);
    },
    drawShape(posArr) {
      let shape = new THREE.Shape();
      shape.moveTo(posArr[0][0], posArr[0][1] );
      posArr.forEach((item) => {
        if (item instanceof Array) {
          shape.lineTo(item[0] , item[1]);
        }
      });
      return shape;
    },
    drawExtrude(shapeObj) {
      let geometry = new THREE.ExtrudeGeometry(shapeObj, this.options);
      let material1 = new THREE.MeshPhongMaterial({
        color: 0x3f7b9d,
        specular: 0x3f7b9d,
      });
      let material2 = new THREE.MeshBasicMaterial({
        color: 0x008bfb,
      });
      let shapeGeometryObj = new THREE.Mesh(geometry, [material1, material2]);
      shapeGeometryObj.name = "board";
      this.group.add(shapeGeometryObj);
    },
    drawLine(posArr) {
      let geometry1 = new THREE.BufferGeometry();
      let geometry2 = new THREE.BufferGeometry();
      let position1 = [],
        position2 = [];
        let vertices1 = new Float32Array([])
        let vertices2 = new Float32Array([])
      posArr.forEach((item) => {
        if (item instanceof Array) {
          // position1.push(new THREE.Vector3(item[0] - this.offsetX, item[1] - this.offsetY, 1.01));
          // position2.push(new THREE.Vector3(item[0] - this.offsetX, item[1] - this.offsetY, -0.01));
          vertices1.push(item[0] - this.offsetX, item[1] - this.offsetY, 1.01);
          vertices2.push(item[0] - this.offsetX, item[1] - this.offsetY, -0.01);
        }
      });
      geometry1.setAttribute("position", new THREE.Float32BufferAttribute(vertices1, 3));
      geometry2.setAttribute("position", new THREE.Float32BufferAttribute(vertices2, 3));

      let lineMaterial = new THREE.LineBasicMaterial({ color: 0x008bfb });
      let line1 = new THREE.Line(geometry1, lineMaterial);
      let line2 = new THREE.Line(geometry2, lineMaterial);
      this.lineGroup.add(line1);
      this.lineGroup.add(line2);
    },
    handleMousemove(event) {
      event.preventDefault();
      let mouse = new THREE.Vector2(0, 0);
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      this.raycaster.setFromCamera(mouse, camera);
      let intersects = this.raycaster.intersectObjects(group.children);
      this.previousObj.material[0].color = new THREE.Color(this.bgColor);
      if (intersects[0] && intersects[0].object) {
        intersects[0].object.material[0].color = new THREE.Color(0xffaa00);
        this.previousObj = intersects[0].object; //previousObj保存悬浮的对象，鼠标移开后恢复颜色。
      }
    },
  },
};
</script>
<style>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
