<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-08 18:22:51
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-08 18:33:06
-->
<template>
  <div id="mapContainer" class="viewDiv"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import Graphic from "@arcgis/core/Graphic";
import WebScene from "@arcgis/core/WebScene";
import * as threeTools from "../libs/tools/threeTool";
import * as THREE from "three";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import Basemap from "@arcgis/core/Basemap";

import * as externalRenderers from "@arcgis/core/views/3d/externalRenderers";
export default {
  name: "Map",
  data() {
    return {
     path:[
            [115.80895340787583, 30.92933111293343],
            [115.81947621477968,30.936026430486265],
            [115.85073577332635,30.952730603143078],
            [115.86830705038578,30.964969701156637],
            [115.87796494895557,30.970050440481813],
            [115.88263291871093,30.97587476869184],
            [115.88153549018487,30.97619308639916],
            [115.88860467181571,30.985581605596618],
            [115.89039457558401,30.99614115304192],
            [115.89037581420371,30.99986573852132],
            [115.88982453627196,31.003621647335926],
            [115.88822886767906,30.999078415194415],
            [115.88681216877917,30.997464365151867],
            [115.88286139825868,30.99686255666582],
            [115.87841763117079,30.999826971071514],
            [115.86308179931808,30.99584156461405],
            [115.85510630972263,30.993171784031908],
            [115.86174910808289,30.993473404196706],
            [115.86231959908358,30.99068362090549]

        ]
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
        const path=[
            [115.80895340787583, 30.92933111293343],
            [115.81947621477968,30.936026430486265],
            [115.85073577332635,30.952730603143078],
            [115.86830705038578,30.964969701156637],
            [115.87796494895557,30.970050440481813],
            [115.88263291871093,30.97587476869184],
            [115.88153549018487,30.97619308639916],
            [115.88860467181571,30.985581605596618],
            [115.89039457558401,30.99614115304192],
            [115.89037581420371,30.99986573852132],
            [115.88982453627196,31.003621647335926],
            [115.88822886767906,30.999078415194415],
            [115.88681216877917,30.997464365151867],
            [115.88286139825868,30.99686255666582],
            [115.87841763117079,30.999826971071514],
            [115.86308179931808,30.99584156461405],
            [115.85510630972263,30.993171784031908],
            [115.86174910808289,30.993473404196706],
            [115.86231959908358,30.99068362090549]

        ]
      var map = new Map({
            basemap: "satellite",
            // ground:'world-elevation'
        });
        var view = new SceneView({
            container: "mapContainer",
            map: map,
            viewingMode: "local",
            camera: {
                position: [115.9210717080402, 30.896913111159947, 13154.641086300715],
                fov: 55,
                heading: 318.70623732061983,
                tilt: 42.34234113203692
            }
        });
        //添加线
        view.graphics.add(new Graphic({
            geometry:{
                type:'polyline',
                paths:path,
            },
            symbol:{
                type: "simple-line", // autocasts as SimpleLineSymbol()
                color: [226, 119, 40],
                width: 2
            }
        }))
          //引入three js

        const myRenderer = {
            view:view,
            renderer:null, // three js 渲染器
            camera:null,    //three js 相机
            scene:null, //three js 场景
            height:100,
            offest:0,
            map:null,
            setup:function (context){
                this.renderer= new THREE.WebGLRenderer({
                    context:context.gl,
                    premultipliedAlpha:false,   //renderer 是否假设颜色有 premaultiplied alpha 默认为true
                });
                this.renderer.setPixelRatio(window.devicePixelRatio); //设置设备像素比。通常用于避免HiDPI设备上绘图模糊
                this.renderer.setViewport(0,0,view.width,view.height);//视图大小设置
                //防止three.js 清除Arcgis JS API 提供的缓冲区
                this.renderer.autoClearDepth = false; // 定义renderer是否清除深度缓存
                this.renderer.autoClearStencil = false; // 定义renderer是否清除模板缓存
                this.renderer.autoClearColor = false; // 定义renderer是否清除颜色缓存
                // ArcGIS JS API渲染自定义离屏缓冲区，而不是默认的帧缓冲区。
                // 我们必须将这段代码注入到three.js运行时中，以便绑定这些缓冲区而不是默认的缓冲区。
                const originalSetRenderTarget = this.renderer.setRenderTarget.bind(
                    this.renderer
                );
                this.renderer.setRenderTarget = function (target) {
                    originalSetRenderTarget(target);
                    if (target == null) {
                        // 绑定外部渲染器应该渲染到的颜色和深度缓冲区
                        context.bindRenderTarget();
                    }
                };
                this.scene = new THREE.Scene();//场景
                this.camera = new THREE.PerspectiveCamera();//相机
                //添加坐标轴辅助工具
                const axesHelper = new THREE.AxesHelper(10000000);
                this.scene.add(axesHelper);

                //创建几何体
                let v3List=[];
                path.forEach((item)=>{
                    var renderPos = [0, 0, 0];
                    externalRenderers.toRenderCoordinates(this.view, [item[0], item[1], 500], 0, SpatialReference.WGS84, renderPos, 0, 1);
                    v3List.push(new THREE.Vector3(renderPos[0], renderPos[1], renderPos[2]));
                })
                let curve = new THREE.CatmullRomCurve3(v3List, false);
                /**
                 * path 管道的形状 曲线
                 * tubularsSegements    管道分成多少段
                 * radius   管道的半径
                 * radialSegments   管道口是几边形 分为多少段
                 * closed 收尾是否相连 封闭
                 * @type {TubeGeometry}
                 */
                let tubeGeometry = new THREE.TubeGeometry(curve, 20, 100, 8, false);
                var textureLoader = new THREE.TextureLoader();
                //设置纹理贴图
                this.map = textureLoader.load('../img/lineTexture.png');
                this.map.wrapS = THREE.RepeatWrapping;
                this.map.wrapT = THREE.RepeatWrapping;
                this.map.repeat.set( 20,4);

                let material = new THREE.MeshBasicMaterial({
                    color: 0x85A9A9,
                    side:200,
                    map:this.map,
                    transparent: true,
                    depthWrite: false,
                    opacity: 1,
                });
                let tube1 = new THREE.Mesh(tubeGeometry, material);
                this.scene.add(tube1);

                let tubeGeometry2 = new THREE.TubeGeometry(curve, 20, 120, 8, false);
                let tubeMaterial2 = new THREE.MeshPhongMaterial({
                    color: 0xaaaaaa,
                    transparent: true,
                    opacity: 0.25,
                });
                let tube2 = new THREE.Mesh(tubeGeometry2, tubeMaterial2);
                this.scene.add(tube2);

                var ambient = new THREE.AmbientLight(0xffffff, 1);
                ambient.position.set(0, 100, 0);
                this.scene.add(ambient);

                context.resetWebGLState();
            },
            render: function (context) {
                // 更新相机参数
                const cam = context.camera;
                this.camera.position.set(cam.eye[0], cam.eye[1], cam.eye[2]);
                this.camera.up.set(cam.up[0], cam.up[1], cam.up[2]);
                this.camera.lookAt(
                    new THREE.Vector3(cam.center[0], cam.center[1], cam.center[2])
                );
                // 投影矩阵可以直接复制
                this.camera.projectionMatrix.fromArray(cam.projectionMatrix);
                // // 更新几何体
                    this.map.offset.x += 0.02;
                    this.map.needsUpdate = true;
                // 绘制场景
                this.renderer.state.reset();
                this.renderer.render(this.scene, this.camera);
                // 请求重绘视图。
                externalRenderers.requestRender(view);
                // cleanup
                context.resetWebGLState();
            }
        }
        // 注册renderer
        externalRenderers.add(view, myRenderer);
     
    },

    
  },
};
</script>
<style scoped>
@import "/assets/esri/themes/dark/main.css";
.viewDiv {
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
