<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-29 09:55:44
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-30 09:52:36
-->
<template>
  <div id="viewDiv">
    <Button @click="changeDoor" type="primary" id="btDoor">{{btnText}}</Button>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";
export default {
  name: "door",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      group: null,
      doorGroup: null,
      openFalg:false,
      btnText:"开门",
      mesh: null,
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
      this.initLight();
      this.initObject();
      this.renderderAnimation();
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 400;
    },
    initRender() {
      let width = document.getElementById("viewDiv").clientWidth;
      let height = document.getElementById("viewDiv").clientHeight;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initLight() {
      let light = new THREE.AmbientLight(0xffffff, 1);
      light.position.set(1000, 1000, 1000);
      this.scene.add(light);
    },
    initObject() {
      this.group = new THREE.Group();
      this.doorGroup = new THREE.Group();
      let geometry = new THREE.BufferGeometry();
      let vertices = new Float32Array([
        -30,
        70,
        4,
        30,
        70,
        4,
        30,
        -70,
        4,
        -30,
        -70,
        4,
        -30,
        70,
        -4,
        30,
        70,
        -4,
        30,
        -70,
        -4,
        -30,
        -70,
        -4,
        -27,
        67,
        4,
        27,
        67,
        4,
        27,
        -67,
        4,
        -27,
        -67,
        4,
        -27,
        67,
        -4,
        27,
        67,
        -4,
        27,
        -67,
        -4,
        -27,
        -67,
        -4,
      ]);
      let faces = [
        0,
        8,
        9,
        0,
        9,
        1,
        1,
        9,
        10,
        1,
        10,
        2,
        2,
        10,
        11,
        2,
        11,
        3,
        3,
        11,
        8,
        3,
        8,
        0,
        4,
        5,
        13,
        4,
        13,
        12,
        5,
        6,
        14,
        5,
        14,
        13,
        6,
        7,
        15,
        6,
        15,
        14,
        7,
        4,
        12,
        7,
        12,
        15,
        0,
        1,
        5,
        0,
        5,
        4,
        2,
        3,
        7,
        2,
        7,
        6,
        1,
        2,
        6,
        1,
        6,
        5,
        0,
        4,
        7,
        0,
        7,
        3,
        9,
        8,
        12,
        9,
        12,
        13,
        14,
        15,
        11,
        14,
        11,
        10,
        13,
        14,
        10,
        13,
        10,
        9,
        12,
        8,
        11,
        12,
        11,
        15,
      ];
      const indexs = new Uint16Array(faces);

      //设置画面的索引
      geometry.index = new THREE.BufferAttribute(indexs, 1);

      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      geometry.computeFaceNormals();
      //   geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
      //   geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      let material = new THREE.MeshPhongMaterial({ color: 0x993333, shininess: 40 }); //新建和门搭调的材质
      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = -27; //x方向偏移27，是门宽的一般
      mesh.position.y = 62; //将门框偏移一定的单位
      this.group.add(mesh);
      let doorGeom = new THREE.BoxGeometry(54, 134, 6); //新建门的几何体，注意这里的门宽度为54
      let texture = new THREE.TextureLoader().load("/data/images/door.jpg"); //创建一个纹理贴图
      let doorMate = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 160, specular: 0x090909, map: texture }); //为门添加一个高光材质和纹理贴图
      let doorMesh = new THREE.Mesh(doorGeom, doorMate);
      doorMesh.position.x = -27; //给门添加偏移量和门框相同
      doorMesh.position.y = 62;
      this.doorGroup.add(doorMesh); //将门添加到doorGroup中
      this.group.add(this.doorGroup);
      this.group.position.x = 27; //因为之前的所有都添加了-27的偏移量，为了保证门在世界坐标系的中心，我在将门的Group的x方向平移27。
      this.scene.add(this.group); //最后将scene中添加group。
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    changeDoor() {
        this.openFalg=!this.openFalg
        this.btnText=this.openFalg?"关门":"开门"
    },
    renderderAnimation() {
      if(this.openFalg&&this.doorGroup.rotation.y<2){
        this.doorGroup.rotation.y += 0.1;
      }else if(!this.openFalg&&this.doorGroup.rotation.y>=0){
          this.doorGroup.rotation.y -= 0.1;
      }
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
#btDoor {
  position: absolute;
  right: 50%;
  bottom: 20px;
}
</style>
