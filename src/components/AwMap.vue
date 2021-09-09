<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-07-21 11:22:35
 * @LastEditors: Yangsl
 * @LastEditTime: 2021-08-26 16:08:05
-->
<template>
  <div style="width: 100%; height: 100%">
    <div id="viewDiv" :style="{ width: fpwid }"></div>
    <div id="fpDiv" v-show="isfp" :style="{ width: fpwid }"></div>
    <div class="widgetDiv" :style="{ right: widgetRig }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import Basemap from "@arcgis/core/Basemap";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import IntegratedMeshLayer from "@arcgis/core/layers/IntegratedMeshLayer";
import esriRequest from "@arcgis/core/request";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Camera from "@arcgis/core/Camera";
import { sceneViewCreated } from "@/utils/bus";
import * as urlUtils from "@arcgis/core/core/urlUtils";
import Home from "@arcgis/core/widgets/Home";
import LayerList from "@arcgis/core/widgets/LayerList";
import Swipe from "@arcgis/core/widgets/Swipe";
import Expand from "@arcgis/core/widgets/Expand";
import { changeMapType, mapChangeStyle, SceneViewExtent, SceneViewCamera } from "@/utils/bus";

export default {
  name: "AwMap",
  provide() {
    return {
      awMap: this,
    };
  },
  data() {
    return {
      // sceneView: null,
      map: null,
      mapCanvas: {},
      isfp: false,
      isjl: false,
      fpwid: "100%",
      widgetRig: "0px",
      swipeFlag: null,
      colorObj: {
        brightness: 100,
        contrast: 100,
        grayscale: 50,
        huerotate: 0,
        opacity: 80,
        saturate: 100,
        sepia: 0,
        invert: 100,
      },
      appConfig: {
        mapView: null,
        sceneView: null,
        activeView: null,
        container: "viewDiv",
        containerfp: "fpDiv",
      },
      cameraParm: null,
      customTileLayer_vec: null,
      customTileLayer_vec_poi: null,
      tiledLayer_img: null,
      tiledLayer_img_poi: null,
      camera: null,
    };
  },
  /**
   * @name: 参数介绍
   * @param
   * basemap  底图       可选Amap(高德)、TDT（天地图）
   * zoom     缩放等级
   * center   中心点
   * darkBackground     是否显示暗色背景
   */

  props: {
    basemap: {
      type: String,
      require: false,
      default: "Amap",
    },
    ground: {
      type: String,
      require: false,
    },
    // zoom: {
    //   type: Number,
    //   require: false,
    //   default: 8,
    // },
    // center: {
    //   type: Array,
    //   require: true,
    //   default: () => {
    //     return [];
    //   },
    // },
    // mapColorShow: {
    //   type: Boolean,
    //   require: false,
    //   default: false,
    // },
    darkBackground: {
      type: Boolean,
      require: false,
      default: true,
    },
    view: {
      type: Object,
      require: false,
    },
    // colorObj:{
    //     type:Object,
    //     require:false
    // }
  },
  created() {
    changeMapType.on((data) => {
      this.changeView(data);
    });
  },
  mounted() {
    this.initMap();
    SceneViewCamera.emit(this.camera);
  },
  methods: {
    /**
     * @name: addMap
     * @msg:初始化地图
     * @param {*}  Amap  TDT
     * @return {*}
     */
    initMap() {
      urlUtils.addProxyRule({
        urlPrefix: "https://agwater.domain.com/geoserver",
        proxyUrl: "/proxyjava/proxy.jsp",
      });
      let that = this;
      that.darkBackground ? that.getColor() : "";
      let MyCustomTileLayer = this.darkBackground
        ? BaseTileLayer.createSubclass({
            properties: {
              urlTemplate: null,
            },

            getTileUrl: function(level, row, col) {
              return this.urlTemplate
                .replace("{z}", level)
                .replace("{x}", col)
                .replace("{y}", row);
            },

            fetchTile: function(level, row, col, options) {
              let url = this.getTileUrl(level, row, col);
              return esriRequest(url, {
                responseType: "image",
                signal: options && options.signal,
              }).then(
                function(response) {
                  let image = response.data;
                  let width = this.tileInfo.size[0];
                  let height = this.tileInfo.size[0];
                  let canvas = document.createElement("canvas");
                  let context = canvas.getContext("2d");
                  canvas.width = width;
                  canvas.height = height;
                  context.fillStyle = that.mapCanvas.fillStyle; //"rgba(255,165,0,0.05)";
                  context.filter = that.mapCanvas.filter;
                  // context.filter ="brightness(1) contrast(1) grayscale(0) hue-rotate(0)deg opacity(1) saturate(1) sepia(0) invert(1)";
                  // context.filter="brightness(1) contrast(1) grayscale(0)  hue-rotate(200deg)  opacity(1)  saturate(1) sepia(0) invert(1)";
                  context.fillRect(0, 0, width, height);
                  // console.log(that.mapCanvas.fillStyle+"--"+ that.mapCanvas.filter);
                  context.globalCompositeOperation = "multiply";

                  context.drawImage(image, 0, 0, width, height);

                  return canvas;
                }.bind(this)
              );
            },
          })
        : WebTileLayer;
      if (this.basemap == "Amap") {
        this.customTileLayer_vec = new MyCustomTileLayer({
          urlTemplate: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
        });
        this.customTileLayer_vec_poi = new MyCustomTileLayer({
          urlTemplate: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        });

        this.tiledLayer_img = new WebTileLayer({
          urlTemplate: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        });

        this.tiledLayer_img_poi = new WebTileLayer({
          urlTemplate: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        });
      } else if (this.basemap == "TDT") {
        this.customTileLayer_vec = new MyCustomTileLayer({
          urlTemplate:
            "http://{subDomain}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=5b0d5425136083b7dfee9e5a21cd5a11",
          subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        });
        this.customTileLayer_vec_poi = new MyCustomTileLayer({
          urlTemplate:
            "http://{subDomain}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=5b0d5425136083b7dfee9e5a21cd5a11",
          subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        });

        this.tiledLayer_img = new WebTileLayer({
          urlTemplate:
            "http://{subDomain}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=5b0d5425136083b7dfee9e5a21cd5a11",
          subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        });

        this.tiledLayer_img_poi = new WebTileLayer({
          urlTemplate:
            "http://{subDomain}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=5b0d5425136083b7dfee9e5a21cd5a11",
          subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        });
      }

      let baseMap_img = new Basemap({
        baseLayers: [this.tiledLayer_img, this.tiledLayer_img_poi],
        thumbnailUrl: "/img/map/cia.png",
      });
      let baseMap_custom = new Basemap({
        baseLayers: [that.customTileLayer_vec, that.customTileLayer_vec_poi],
        thumbnailUrl: "/img/map/vec.png",
      });
      let map = new Map({
        basemap: baseMap_custom,
      });
      let mapfp = new Map({
        basemap: baseMap_img,
      });
      that.map = map;
      this.camera = {
        position: this.view.camera?.position,
        heading: this.view.camera?.heading,
        tilt: this.view.camera?.tilt,
        fov: this.view.camera?.fov,
      };
      let initialViewParams = {
        // center: this.view?.center,
        // zoom: this.view?.zoom,
        camera: this.camera,
        container: this.appConfig.container,
        map: map,
        popup: {
          dockEnabled: true,
          autoOpenEnabled: false,
        },
      };
      // this.ground??false
      initialViewParams.map.ground = this.ground ?? undefined;
      this.appConfig.sceneView = createView(initialViewParams, "3D");
      initialViewParams.container = this.appConfig.containerfp;
      initialViewParams.map = mapfp;
      initialViewParams.map.ground = this.ground ?? undefined;
      this.appConfig.mapView = create2DView(initialViewParams, "2D");
      let sceneView = this.appConfig.sceneView;
      // this.appConfig.activeView = this.appConfig.sceneView;
      // that.activeView = this.appConfig.activeView;
      window.sceneView = this.appConfig.sceneView;
      sceneViewCreated.emit({ sceneView });

      sceneView.watch("extent", function(a) {
        SceneViewExtent.emit(a);
        return;
      });

      // that.$emit("ready", this.map, this); //表明底图已加载完成，回调子图层
      function createView(params, type) {
        let view = new SceneView(params);
        const toggle = new BasemapToggle({
          view: view,
          nextBasemap: baseMap_img,
        });
        let homeBtn = new Home({
          view: view,
        });
        view.ui.add(toggle, "bottom-right");
        view.ui.add(homeBtn, "top-right");
        view.ui.move(["zoom", "compass", "navigation-toggle"], "top-right");

        return view;
      }

      function create2DView(params, type) {
        let view = new SceneView(params);
        view.ui.components = [];
        return view;
      }
    },
    fenPingHanld(view1, view2) {
      const views = [view1, view2];
      let active;

      const sync = (source) => {
        if (!active || !active.viewpoint || active !== source) {
          return;
        }

        for (const view of views) {
          if (view !== active) {
            view.viewpoint = active.viewpoint;
          }
        }
      };

      for (const view of views) {
        view.watch(["interacting", "animation"], () => {
          active = view;
          sync(active);
        });

        view.watch("viewpoint", () => sync(view));
      }
    },
    changeView(type) {
      let is2D = type === "2D";
      if (is2D) {
        this.appConfig.sceneView.goTo({
          tilt: 0,
        });
        // this.appConfig.sceneView.camera.tilt=0
      } else {
        //  this.appConfig.sceneView.camera.tilt=60
        this.appConfig.sceneView.goTo({
          tilt: 60,
        });
      }
    },

    getColor() {
      let colorObj = this.colorObj;
      let fillStyle = "rgba(255,165,0,0.05 )";

      const filters = Object.entries(colorObj).map(([name, value]) => {
        if (name == "huerotate") {
          return "hue-rotate(" + value + "deg)";
        }
        return name + "(" + value / 100 + ") ";
      });
      // filters.join('');
      // let image = "grayscale(" + colorObj.grayscale + "%) invert(" + colorObj.invert + "%) opacity(" + colorObj.opacity + "%)";
      this.mapCanvas.fillStyle = fillStyle;
      this.mapCanvas.filter = filters.join("");
    },
    /**
     * 地图初始化完成回调
     * @method mapReady
     * @param callback
     */
    mapReady(callback) {
      if (this.map) {
        callback && callback(this.appConfig.sceneView, this);
        return;
      }
      sceneViewCreated.on((data) => {
        callback(data.sceneView);
      });
      // this.$once("ready", callback);
    },
    refreshTileLayer(objArr, call) {
      let colorObj = this.colorObj;
      objArr.forEach((obj) => {
        colorObj[obj.name] = obj.value;
        !!call && call(obj.name, obj.value);
      });
      this.getColor();
      this.customTileLayer_vec.refresh();
      this.customTileLayer_vec_poi.refresh();
    },
    fengPing(param) {
      if (param) {
        if (!this.isfp) {
          this.fpwid = "50%";
          this.widgetRig = "50%";
        } else {
          this.fpwid = "100%";
          this.widgetRig = "0px";
        }
        this.isfp = !this.isfp;
        if (this.isfp) {
          this.fenPingHanld(this.appConfig.sceneView, this.appConfig.mapView);
        }
      } else {
        this.fpwid = "100%";
        this.widgetRig = "0px";
        this.isfp = false;
      }
    },
    juanLian() {
      this.appConfig.sceneView.ui.remove(this.swipeFlag);
      // if(this.isjl){
      // let aa=1;
      //
      // }else{
      //   if(this.isfp){
      //     this.fpwid = "100%";
      //     this.widgetRig="0px";
      //   }
      // }
    },
    cameraUpdate() {
      this.appConfig.sceneView.watch("camera", function update(camera) {
        this.cameraParm = {
          position: [camera.position.longitude.toFixed(2), camera.position.latitude.toFixed(2), camera.position.z.toFixed(2)],
          tilt: camera.tilt.toFixed(2),
          heading: camera.heading.toFixed(2),
          fov: camera.fov,
        };
        SceneViewCamera.emit(this.cameraParm);
      });
    },
  },
  watch: {
    basemap: function() {
      document.getElementsByClassName("esri-component esri-basemap-toggle esri-widget")[0].click();
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
  float: left;
}

#fpDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  float: left;
  border-left: 2px solid white;
}

/deep/ .esri-ui-top-right {
  top: 65%;
}

.widgetDiv {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 0;
  width: 100%;
}
</style>
