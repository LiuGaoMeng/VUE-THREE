<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-24 15:45:28
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-24 17:38:55
-->
<template>
  <div id="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
const ThreeBSP = require('jthreebsp')(THREE)
//再把THREE当作参数传入方可使用
export default {
  name: "heart",
  data() {
    return {
      scene:null,
      camera:null,
      renderer:null
    };
  },
  mounted() {
    this.initScene();
    this.initCamera();
    this.initRender();
    this.initObject();
    this.renderderAnimation();
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 80;
    },
    initRender() {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      let material = new THREE.MeshPhongMaterial({ color: 0x2c85e1, shininess: 60, specular: 0x2c85e1 });

      let cylinGeom1 = new THREE.CylinderGeometry(40, 40, 10, 50);
      let cylinMesh1 = new THREE.Mesh(cylinGeom1, material); //最大的圆柱

      let cylinGeom2 = new THREE.CylinderGeometry(28, 28, 14, 50);
      let cylinMesh2 = new THREE.Mesh(cylinGeom2, material); //第二大的圆柱

      let cylinGeom3 = new THREE.CylinderGeometry(20, 20, 22, 50);
      let cylinMesh3 = new THREE.Mesh(cylinGeom3, material); //第三大的圆柱

      let cylinGeom4 = new THREE.CylinderGeometry(10, 10, 24, 50);
      let cylinMesh4 = new THREE.Mesh(cylinGeom4, material); //最小的圆柱

      let pointsArr = [
        [5, -1, 33],
        [5, 11, 33],
        [-5, -1, 33],
        [-5, 11, 33],
        [20, -1, 66],
        [20, 11, 66],
        [-20, -1, 66],
        [-20, 11, 66],
      ];
      let points = pointsArr.map((d) => new THREE.Vector3(d[0], d[1], d[2]));
      let tixing = new ConvexGeometry(points);
      let tixingMesh = new THREE.Mesh(tixing, material); //通过ConvexGeometry凸包绘制一个梯台，当然也可以使用ExtrudeGeometry挤压几何体，
      let meshArray = [];
      for (let i = 0; i < 8; i++) {
        tixingMesh.rotation.y = (Math.PI / 4) * i;
        meshArray[i] = tixingMesh.clone();
      } //通过旋转，得到各个方向的梯台
      let cylinBSP1 = new ThreeBSP(cylinMesh1); // 由大到小四个网格的BSP模型
      let cylinBSP2 = new ThreeBSP(cylinMesh2);
      let cylinBSP3 = new ThreeBSP(cylinMesh3);
      let cylinBSP4 = new ThreeBSP(cylinMesh4);
      //前三个模型相加减去第四个模型得到新的BSP模型，允许链式调用
      let resultBSP = cylinBSP1
        .union(cylinBSP2)
        .union(cylinBSP3)
        .subtract(cylinBSP4);
      for (let m = 0; m < 8; m++) {
        debugger
        let threebsp=new ThreeBSP(meshArray[m])
        //新的BSP模型分别减去各个方向的梯台模型得到结果模型
        resultBSP = resultBSP.subtract(threebsp);
      }
      this.scene.add(resultBSP);
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    renderderAnimation() {
      
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.renderderAnimation);
    },
  },
};
</script>
<style scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
