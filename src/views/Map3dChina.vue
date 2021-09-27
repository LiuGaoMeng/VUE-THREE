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
      let width = document.getElementById("viewDiv");
      let height = document.getElementById("viewDiv");
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      this.group = new THREE.Group();
      this.lineGroup = new THREE.Group();
      this.$axios.get("/data/China.json").then((response)=>{
          debugger
          this.initMesh(response.data)
      })
     
      
    },
    initMesh(worldGeometry){
        debugger
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
      shape.moveTo(posArr[0][0] - this.offsetX, posArr[0][1] - this.offsetY);
      posArr.forEach((item) => {
        shape.lineTo(item[0] - this.offsetX, item[1] - this.offsetY);
      });
      return shape;
    },
    drawExtrude(shapeObj) {
      let geometry = new THREE.ExtrudeGeometry(shapeObj, this.options);
      let material1 = new THREE.MeshPhongMaterial({
        color: this.bgColor,
        specular: this.bgColor,
      });
      let material2 = new THREE.MeshBasicMaterial({
        color: 0x008bfb,
      });
      let shapeGeometryObj = new THREE.Mesh(geometry, [material1, material2]);
      shapeGeometryObj.name = "board";
      this.group.add(shapeGeometryObj);
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
