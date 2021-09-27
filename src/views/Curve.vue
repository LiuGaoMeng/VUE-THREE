<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "curve",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      this.initRender();
      this.initScene();
      this.initCamera();
      this.initLigtht();
      this.initObject();

      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    },
    initRender() {
      let width = document.getElementById("viewDiv").clientWidth;
      let height = document.getElementById("viewDiv").clientHeight;
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      this.renderer.setSize(width, height);
      document.getElementById("viewDiv").appendChild(this.renderer.domElement);
      this.renderer.setClearColor("#FFFFFF");
    },
    initOrbitControls() {
      new OrbitControls(this.camera, this.renderer.domElement);
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera();
      this.camera.position.z = 80;
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initLigtht() {
      let light = new THREE.DirectionalLight();
      light.position.set(100, 100, 200);
      this.scene.add(light);
    },
    initObject() {
      /**
       * 椭圆曲线
       */
      let geometry1 = new THREE.BufferGeometry();
      let curve1 = new THREE.EllipseCurve(0, 0, 10, 20);
      let points1 = curve1.getPoints(100);
      geometry1.setFromPoints(points1);
      let material1 = new THREE.LineBasicMaterial({ color: '#0000CD' });
      let line1 = new THREE.Line(geometry1, material1);
      this.scene.add(line1);
      /**
       * 三维线段
       */
      let geometry2 = new THREE.BufferGeometry();
      let curve2 = new THREE.LineCurve3(new THREE.Vector3(10, 20, 10), new THREE.Vector3(-10, -20, -10));
      let points2 = curve2.getPoints(100);
      geometry2.setFromPoints(points2);
      let material2 = new THREE.LineBasicMaterial({ color: '#008B8B' });
      let line2 = new THREE.Line(geometry2, material2);
      this.scene.add(line2);

      /**
       *三维三阶贝塞尔曲线
       */
      let geometry3 = new THREE.BufferGeometry();
      let curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-10, -20, -10),
        new THREE.Vector3(-10, 40, -10),
        new THREE.Vector3(10, 40, 10),
        new THREE.Vector3(10, -20, 10)
      );
      let points3 = curve3.getPoints(100);
      geometry3.setFromPoints(points3);
      let material3 = new THREE.LineBasicMaterial({ color:'#FFFF00' });
      let line3 = new THREE.Line(geometry3, material3);
      this.scene.add(line3);

      /**
       * 三维样条曲线
       */
      let geometry4 = new THREE.BufferGeometry();
      let curve4 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-10, -20, -10),
        new THREE.Vector3(-5, 20, -5),
        new THREE.Vector3(0, -20, 0),
        new THREE.Vector3(5, 20, 5),
        new THREE.Vector3(10, -20, 10),
      ]);
      let points4 = curve4.getPoints(100);
      geometry4.setFromPoints(points4);
      let material4 = new THREE.LineBasicMaterial({ color: 	'#006400' });
      let line4 = new THREE.Line(geometry4, material4);
      this.scene.add(line4);

      this.initOrbitControls();
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
