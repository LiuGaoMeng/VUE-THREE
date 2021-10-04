<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-28 16:13:48
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-28 18:04:22
-->
<template>
  <div id="viewDiv"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "box3",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      box3: null,
      sphere: null,
      time: 0.5,
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      this.initScene();
      this.initCamera();
      this.initWbGLRender();
      this.initObject();
      this.rendererAnimation();
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 150;
      this.camera.position.x = 30;
      this.camera.position.y = 30;
      //   this.camera.position.y = -300;
      // this.camera.up.x = 0; //相机以哪个方向为上方
      // this.camera.up.y = 0;
      // this.camera.up.z = 1;
      this.camera.lookAt({ x: 0, y: 30, z: 0 });
    },
    initWbGLRender() {
      let width = document.getElementById("viewDiv").clientWidth;
      let height = document.getElementById("viewDiv").clientWidth;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
    },
    initObject() {
      let boxGeometry = new THREE.BoxGeometry(30, 30, 30);
      let sphereGoemetry = new THREE.SphereGeometry(3, 30, 20);
      let sphereMaterial = new THREE.MeshBasicMaterial();
      let box = this.setMaterial(boxGeometry, 0x0000ff); //先生成一个立方体网格
      box.position.set(0, 30, 0);
      this.box3 = new THREE.Box3().setFromObject(box); //根据几何体生成包围盒
      this.sphere = new THREE.Mesh(sphereGoemetry, sphereMaterial); //在生成一个球形网格
      this.scene.add(box); //添加到场景
      this.scene.add(this.sphere); //添加到场景
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    setMaterial(boxGeometry, color) {
      let material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
      let cube = new THREE.Mesh(boxGeometry, material);
      return cube;
    },
    rendererAnimation() {
      this.sphere.position.y = Math.sin(this.time) * 16 + 40;
      this.sphere.position.x = Math.cos(this.time) * 16 + 8;
      this.time = this.time + 0.02;
      let sphereBox3 = new THREE.Box3().setFromObject(this.sphere); //动态生成球的包围盒（这里用了包围盒，没有用包围球，边边角角有些出入，不影响大体效果）
      if (this.box3.containsBox(sphereBox3)) {
        //如果box3包含sphereBox3
        this.sphere.material.color = new THREE.Color(0x00ff00);
      } else if (this.box3.intersectsBox(sphereBox3)) {
        //如果box3交于sphereBox3
        this.sphere.material.color = new THREE.Color(0xff00ff);
      } else {
        //如果sphereBox3在box3之外
        this.sphere.material.color = new THREE.Color(0xffaa00);
      }
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.rendererAnimation);
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
