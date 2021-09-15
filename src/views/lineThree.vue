<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-15 14:46:15
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-15 18:44:39
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
      camera: null,
      renderer: null,
      scene: null,
      curve: null,
      anmations:[]
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
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor("#FFFFFF");
      document.getElementById("viewDiv1").appendChild(this.renderer.domElement);
      let zline = this.addLine();
      this.scene.add(zline);
      // this.createMovingLine(this.curve);
      new Array(4).fill(0).forEach((it, i) => {
        const movingLine = this.createMovingLine(this.curve, i * 100);
        this.anmations.push(movingLine);
        this.scene.add(movingLine.mesh);
      });
      this.camera.position.set(0, 0, 150);
      this.renderderAnimation();
    },
    renderderAnimation() {
      requestAnimationFrame(this.renderderAnimation);      
      this.anmations.forEach((item) => {
        item.index + 1 > item.linePointsV3.length - item.verticNum ? (item.index = 0) : (item.index += 3);
        item.mesh.geometry.setPositions(
          item.linePointsV3.slice(item.index, item.index + item.verticNum).reduce((arr, item) => {
            return arr.concat(item.x, item.y, item.z);
          }, [])
        );
      });

      this.renderer.render(this.scene, this.camera);
    },
    addLine() {
      this.curve = new THREE.CatmullRomCurve3(
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
      // 轨迹线
      const points = this.curve.getPoints(1000).reduce((arr, item) => {
        return arr.concat(item.x, item.y, item.z);
      }, []);
      const geometry = new LineGeometry();
      geometry.setPositions(points);
      const material = new LineMaterial({
        color: 0x2e91c2,
        linewidth: 2,
      });
      material.resolution.set(window.innerWidth, window.innerHeight);
      const line = new Line2(geometry, material);
      line.computeLineDistances();
      return line;
    },
    createMovingLine(curve, index = 0, color = ["#00ffff", "#224242"], pointNum = 300, verticNum = 30) {
      const lightGeometry = new LineGeometry();
      const pointsV3 = curve.getPoints(pointNum);
      lightGeometry.setPositions(
        pointsV3.slice(index, index + verticNum).reduce((arr, item) => {
          return arr.concat(item.x, item.y, item.z);
        }, [])
      );
      const lightMaterial = new LineMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        linewidth: 8,
        depthTest: false, // 慎用
        vertexColors: THREE.VertexColors,
      });
      // 渐变色处理
      const colors = this.gradientColors(color[1], color[0], verticNum);
      const colorArr = colors.reduce((arr, item) => {
        const Tcolor = new THREE.Color(item);
        return arr.concat(Tcolor.r, Tcolor.g, Tcolor.b);
      }, []);
      lightGeometry.setColors(colorArr);
      lightMaterial.resolution.set(window.innerWidth, window.innerHeight);
      const lightLine = new Line2(lightGeometry, lightMaterial);
      lightLine.computeLineDistances();
      return {
        index,
        verticNum,
        mesh: lightLine,
        linePointsV3: pointsV3,
      };
    },
    gradientColors(start, end, steps, gamma) {
      const parseColor = function(hexStr) {
        return hexStr.length === 4
          ? hexStr
              .substr(1)
              .split("")
              .map(function(s) {
                return 0x11 * parseInt(s, 16);
              })
          : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function(s) {
              return parseInt(s, 16);
            });
      };
      const pad = function(s) {
        return s.length === 1 ? `0${s}` : s;
      };
      let j;
      let ms;
      let me;
      const output = [];
      const so = [];
      // eslint-disable-next-line
      gamma = gamma || 1;
      const normalize = function(channel) {
        // eslint-disable-next-line
        return Math.pow(channel / 255, gamma);
      };
      // eslint-disable-next-line
      start = parseColor(start).map(normalize);
      // eslint-disable-next-line
      end = parseColor(end).map(normalize);
      for (let i = 0; i < steps; i++) {
        ms = i / (steps - 1);
        me = 1 - ms;
        for (j = 0; j < 3; j++) {
          // eslint-disable-next-line
          so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
        }
        output.push(`#${so.join("")}`);
      }
      return output;
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
