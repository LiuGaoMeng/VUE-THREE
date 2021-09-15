<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-15 14:46:15
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-15 15:43:12
-->
<template>
  <div id="viewDiv1" class="viewDiv"></div>
</template>

<script>
import * as THREE from "three";

import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";

export default {
  name: "lineThree",

  data() {
    return {
        camera:null,
        renderer:null,
        scene:null


    };
  },
  mounted() {
    this.initShader();
  },

  methods: {
    initShader() {
      this.singleUniforms = {
        // u_time: uniforms2.u_time,
        u_time: 1,
        number: { type: "f", value: 5 },
        speed: { type: "f", value: 2 },
        length: { type: "f", value: 5 },
        size: { type: "f", value: 2 },
        color: { type: "v3", value: "#FF0000" },
        // opacity:{type: "f", value: 1}
      };

      //顶点着色器
      this.vertexShader =
        "varying vec2 vUv;" +
        "attribute float percent;" +
        "uniform float u_time;" +
        "uniform float number;" +
        "uniform float speed;" +
        "uniform float length;" +
        "varying float opacity;" +
        "uniform float size;" +
        "void main()" +
        "{" +
        " vUv = uv;" +
        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );" +
        "float l = clamp(1.0-length,0.0,1.0);" +
        "gl_PointSize = clamp(fract(percent*number + l - u_time*number*speed)-l ,0.0,1.) * size * (1./length);" +
        "opacity = gl_PointSize/size;" +
        "gl_Position = projectionMatrix * mvPosition;" +
        "}";
      //片元着色器
      this.fragmentShader =
        // "#ifdef GL_ES" +
        "precision mediump float;" +
        // "#endif" +
        "varying float opacity;" +
        "uniform vec3 color;" +
        "void main(){" +
        "if(opacity <=0.2){" +
        "discard;" +
        "}" +
        "gl_FragColor = vec4(color,1.0);" +
        "}";

      this.initMap();
    },
    initMap() {
      this.scene = new THREE.Scene();
      // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      this.camera = new THREE.PerspectiveCamera();
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv1").appendChild(this.renderer.domElement);
      let zline = this.addLine();
      this.scene.add(zline);
      this.camera.position.set( 0, 0, 50 )
      this.renderer.render(this.scene, this.camera);
    },

    addLine() {
      const curve = new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-20, 30, 4),
          new THREE.Vector3(20, 30, 4),
          new THREE.Vector3(20, 0, 4),
          new THREE.Vector3(-20, 0, 4),
          new THREE.Vector3(-20, -30, 4),
          new THREE.Vector3(20, -30, 4),

          new THREE.Vector3(20, -30, -4),
          new THREE.Vector3(-20, -30, -4),
          new THREE.Vector3(-20, 0, -4),
          new THREE.Vector3(20, 0, -4),
          new THREE.Vector3(20, 30, -4),
          new THREE.Vector3(-20, 30, -4),
          new THREE.Vector3(-20, 30, 4),
        ],
        false,
        "catmullrom",
        0.05
      );
      debugger;
      // 轨迹线
      const points = curve.getPoints(100).reduce((arr, item) => {
        return arr.concat(item.x, item.y, item.z);
      }, []);
      const geometry = new LineGeometry();
      geometry.setPositions(points);
      const material = new LineMaterial({
        color: 0x2e91c2,
        linewidth: 4,
      });
    //   material.resolution.set(window.innerWidth, window.innerHeight);
      const line = new Line2(geometry, material);
      line.computeLineDistances();
      return line;
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
