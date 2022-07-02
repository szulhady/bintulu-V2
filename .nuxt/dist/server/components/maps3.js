exports.ids = [5];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9dd3e8ac", content, true, context)
};

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps3_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps3_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps3_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps3_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps3_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".low{color:#000!important;font:normal}.high{color:red!important;text-shadow:2px 0 red!important}.gm-style .gm-style-iw-t:after{background:transparent;display:none}.gm-style .gm-style-iw-c{overflow:visible}.container1{background-color:rgba(0,0,0,.2);padding:10px}.container1:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:\"\";height:15px;right:-15px;position:absolute;top:70px;transform:translate(-50%,-50%) rotate(-135deg);width:15px;overflow:visible}.container2{background-color:rgba(0,0,0,.2);padding:10px}.container2:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:\"\";height:15px;right:-15px;position:absolute;top:70px;transform:translate(-50%,-50%) rotate(-135deg);width:15px;overflow:visible}.container3{background-color:rgba(0,0,0,.2);padding:10px}.container3:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:\"\";height:15px;left:0;position:absolute;top:70px;transform:translate(-50%,-50%) rotate(45deg);width:15px;overflow:visible}.container4{background-color:rgba(0,0,0,.2);padding:10px}.container4:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:\"\";height:15px;left:0;position:absolute;top:110px;transform:translate(-50%,-50%) rotate(45deg);width:15px;overflow:visible}.container5{background-color:rgba(0,0,0,.2);padding:10px}.container5:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:\"\";height:15px;right:-15px;position:absolute;top:95px;transform:translate(-50%,-50%) rotate(-140deg);width:15px;overflow:visible}.ui{font-weight:bolder;width:150px;padding-bottom:5px}.ui2,.ui4{font-weight:700;width:150px;padding-bottom:5px}.data{padding:5px 0 5px 10px;font-weight:900;font-size:1.1em;letter-spacing:3px;text-shadow:2px 0 #888}#map{height:100vh;background:grey}.gm-style-iw+div{display:none!important}button.gm-ui-hover-effect{visibility:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Maps3.vue?vue&type=template&id=00f9c89a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"100%","height":"calc(100vh - 120px)"},attrs:{"id":"googleMap"}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Maps3.vue?vue&type=template&id=00f9c89a&

// EXTERNAL MODULE: external "mqtt"
var external_mqtt_ = __webpack_require__(95);
var external_mqtt_default = /*#__PURE__*/__webpack_require__.n(external_mqtt_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Maps3.vue?vue&type=script&lang=js&
//
//
//
//



class isHigh {
  constructor(indexStation, indexSensor, isHigh) {
    this.indexStation = indexStation;
    this.indexSensor = indexSensor;
    this.isHigh = isHigh;
  }

}

const maxO2 = 20;
const maxLEL = 1;
const maxVOC = 0;
const maxNH3 = 0;
const maxCL2 = 0;
const maxH2S = 0;
/* harmony default export */ var Maps3vue_type_script_lang_js_ = ({
  data() {
    return {
      map: null,
      connection: {
        host: "txio.live",
        port: 8083,
        endpoint: "/mqtt",
        clean: true,
        // Reserved session
        connectTimeout: 4000,
        // Time out
        reconnectPeriod: 4000 // Reconnection interval

      },
      subscription: {
        // topic: "geyzer/#",
        topic: "geyzer/data/#",
        qos: 0
      },
      receiveNews: "",
      qosList: [{
        label: 0,
        value: 0
      }, {
        label: 1,
        value: 1
      }, {
        label: 2,
        value: 2
      }],
      client: {
        connected: false
      },
      subscribeSuccess: false,
      lel1: "Waiting...",
      lel2: "Waiting...",
      lel3: "Waiting...",
      lel4: "Waiting...",
      lel5: "Waiting...",
      lel12: 0,
      lel22: 0,
      lel32: 0,
      lel42: 0,
      lel52: 0,
      lelArray: []
    };
  },

  methods: {
    check(indexStation, indexSensor, value, maxValue) {
      if (value > maxValue) {
        const payload = new isHigh(indexStation, indexSensor, true);
        this.checkWarning(payload);
      } else {
        const payload = new isHigh(indexStation, indexSensor, false);
        this.checkWarning(payload);
      }
    },

    checkLNGYard(indexStation, indexSensor, value, maxValue) {
      if (value > maxValue) {
        const payload = new isHigh(indexStation, indexSensor, true);
        this.checkWarningLNG(payload);
      } else {
        const payload = new isHigh(indexStation, indexSensor, false);
        this.checkWarningLNG(payload);
      }
    },

    checkLNG() {
      this.lelArray = []; // console.log("hh");
      // this.lelArray.push("LEL 1 is high");

      if (this.lel1 >= maxLEL) {
        this.lelArray.push(" LEL 1"); // console.log("here");
      }

      if (this.lel2 >= maxLEL) {
        this.lelArray.push(" LEL 2"); // console.log("here");
      }

      if (this.lel3 >= maxLEL) {
        this.lelArray.push(" LEL 3"); // console.log("here");
      }

      if (this.lel4 >= maxLEL) {
        this.lelArray.push(" LEL 4"); // console.log("here");
      }

      if (this.lel5 >= maxLEL) {
        this.lelArray.push(" LEL 5"); // console.log("here");
      }

      let a = this.lelArray.toString();

      if (this.lelArray.length > 1) {
        a = a + " readings are high";
      } else if (this.lelArray.length == 1) {
        a = a + " reading is high";
      } else {
        a = "Good";
      }

      this.checkLNGWarning(a); // console.log(this.lelArray);
    },

    // Create connection
    createConnection() {
      var mapProp = {
        center: new google.maps.LatLng(3.2640663039813322, 113.07239476715013),
        // 3.2641278377888616, 113.06835348511056
        // 3.2662281400041455, 113.06871934904022
        // 3.264608454097705, 113.08591473154868
        // 3.261238482298228, 113.07080689933095
        // 3.2640663039813322, 113.07239476715013
        zoom: 16,
        styles: [{
          elementType: "geometry",
          stylers: [{
            color: "#242f3e"
          }]
        }, {
          elementType: "labels.text.fill",
          stylers: [{
            color: "#746855"
          }]
        }, {
          elementType: "labels.text.stroke",
          stylers: [{
            color: "#242f3e"
          }]
        }, {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#d59563"
          }]
        }, {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#d59563"
          }]
        }, {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{
            color: "#263c3f"
          }]
        }, {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#6b9a76"
          }]
        }, {
          featureType: "road",
          elementType: "geometry",
          stylers: [{
            color: "#38414e"
          }]
        }, {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#212a37"
          }]
        }, {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#9ca5b3"
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{
            color: "#746855"
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#1f2835"
          }]
        }, {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#f3d19c"
          }]
        }, {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{
            color: "#2f3948"
          }]
        }, {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#d59563"
          }]
        }, {
          featureType: "water",
          elementType: "geometry",
          stylers: [{
            color: "#17263c"
          }]
        }, {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#515c6d"
          }]
        }, {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{
            color: "#17263c"
          }]
        }],
        mapTypeId: "hybrid"
      };
      var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); // Petrochemical Jetty

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(3.2592932651185236, 113.0752931476544),
        map: map,
        animation: google.maps.Animation.Drop
      });
      var infowindow = new google.maps.InfoWindow({
        content: `<div class="container1"><div class="ui header">Petrochemical Jetty</div><div id="1O2" class="data">O2 : Waiting...</div><div id="1LEL" class="data">LEL : Waiting...</div><div id="1VOC" class="data end">VOC : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(-120, 100)
      });
      infowindow.open(map, marker); // Ammonia Whaft Jetty

      var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(3.2614980671619365, 113.06751818919237),
        map: map,
        animation: google.maps.Animation.Drop
      });
      var infowindow2 = new google.maps.InfoWindow({
        content: `<div class="container2"><div class="ui header">Ammonia Whaft Jetty</div><div id="2O2" class="data">O2 : Waiting...</div><div id="2LEL" class="data">LEL : Waiting...</div><div id="2NH3" class="data end">NH3 : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(-115, 100)
      });
      infowindow2.open(map, marker2); // OBB Jetty

      var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(3.258601715715236, 113.07704509915513),
        map: map,
        animation: google.maps.Animation.Drop
      });
      var infowindow3 = new google.maps.InfoWindow({
        content: `<div class="container3"><div class="ui2 header">OBB Jetty</div><div id="3O2" class="data">O2 : Waiting...</div><div id="3LEL" class="data">LEL : Waiting...</div><div id="3VOC" class="data end">VOC : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(115, 80)
      });
      infowindow3.open(map, marker3); // DG Yard

      var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(3.2647273706828495, 113.07265982264411),
        map: map,
        animation: google.maps.Animation.Drop
      });
      var infowindow4 = new google.maps.InfoWindow({
        content: `<div class="container4"><div class="ui4 header">DG yard</div><div id="4O2" class="data">O2 :Waiting...</div><div id="4LEL" class="data">LEL : Waiting...</div><div id="4VOC" class="data">VOC : Waiting...</div><div id="4NH3" class="data">NH3 : Waiting...</div><div id="4CL2" class="data">CL2 : Waiting...</div><div id="4H2S" class="data end">H2S : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(120, 120)
      });
      infowindow4.open(map, marker4); // LNG ISO Tank Yard

      var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(3.2660908704052347, 113.07120972436627),
        map: map,
        animation: google.maps.Animation.Drop
      });
      var infowindow5 = new google.maps.InfoWindow({
        content: `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div id="5LEL1" class="data">LEL 1 : Waiting...</div><div id="5LEL2" class="data">LEL 2 : Waiting...</div><div id="5LEL3" class="data">LEL 3 : Waiting...</div><div id="5LEL4" class="data">LEL 4 : Waiting...</div><div id="5LEL5" class="data end">LEL 5 : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(-120, 130)
      });
      infowindow5.open(map, marker5);
      const {
        host,
        port,
        endpoint,
        ...options
      } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;

      try {
        this.client = external_mqtt_default.a.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }

      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        // if (topic === "geyzer/data") {
        if (topic === "test/responsive") {
          message = JSON.parse(message); // console.log("current time: ", Date.now(), message);
        }

        if (topic === "geyzer/data/petrochemical") {
          message = JSON.parse(message);

          if (message.JID == 1) {
            infowindow.setContent(`<div class="container1"><div class="ui header">Petrochemical Jetty</div><div id="1O2"  class="data">O2 : ${message.O2}</div><div id="1LEL" class="data">LEL : ${message.LEL}</div><div id="1VOC" class="data end">VOC : ${message.VOC}</div></div>`); // this.checkWarning();
            // const data = {
            //   indexStation: 0,
            //   indexSensor: 3,
            //   data: [message.O2, message.LEL, message.VOC],
            // };

            this.checkWarningRemarks(0); // this.getMQTTData(data);

            this.check(0, 0, message.O2, maxO2);
            this.check(0, 1, message.LEL, maxLEL);
            this.check(0, 2, message.VOC, maxVOC);
            let a = document.getElementById("1O2");
            let b = document.getElementById("1LEL");
            let c = document.getElementById("1VOC");

            if (this.sensors[0].sensorData[0].isHigh == true) {
              a.classList.add("high");
            } else {
              a.classList.remove("high");
            }

            if (this.sensors[0].sensorData[1].isHigh == true) {
              b.classList.add("high");
            } else {
              b.classList.remove("high");
            }

            if (this.sensors[0].sensorData[2].isHigh == true) {
              c.classList.add("high");
            } else {
              c.classList.remove("high");
            } // this.adddata(0);
            // this.countWarning();
            // this.loadedPetrochemicalJetty = true;
            // this.currentDataTimePetrochemicalJetty = new Date();

          }
        } // if (message.JID) {
        // Petrochemical Jetty
        //Ammonia Whaft Jetty


        if (topic === "geyzer/data/nh3") {
          message = JSON.parse(message);

          if (message.JID == 3) {
            infowindow2.setContent(`<div class="container2"><div class="ui header">Ammonia Whaft Jetty</div><h1 id="2O2" class="data">O2 : ${message.O2}</h1><div id="2LEL" class="data">LEL : ${message.LEL}</div><div id="2NH3" class="data end">NH3 : ${message.NH3}</div></div>`); // infowindow2.open(map, marker2);
            // const data = {
            //   indexStation: 1,
            //   indexSensor: 3,
            //   data: [message.O2, message.LEL, message.NH3],
            // };

            this.checkWarningRemarks(1); // this.getMQTTData(data);

            this.check(1, 0, message.O2, maxO2);
            this.check(1, 1, message.LEL, maxLEL);
            this.check(1, 2, message.NH3, maxNH3);
            let a = document.getElementById("2O2");
            let b = document.getElementById("2LEL");
            let c = document.getElementById("2NH3");

            if (this.sensors[1].sensorData[0].isHigh == true) {
              a.classList.add("high");
            } else {
              a.classList.remove("high");
            }

            if (this.sensors[1].sensorData[1].isHigh == true) {
              b.classList.add("high");
            } else {
              b.classList.remove("high");
            }

            if (this.sensors[1].sensorData[2].isHigh == true) {
              c.classList.add("high");
            } else {
              c.classList.remove("high");
            } // this.insertCurrentArray(data);
            // this.adddata(1);
            // this.countWarning();
            // this.loadedWhaftJetty = true;
            // this.currentDataTimeWhaftJetty = new Date();

          }
        } // MP10 Jetty


        if (topic === "geyzer/data/OBB") {
          message = JSON.parse(message);

          if (message.JID == 2) {
            // const data = {
            //   indexStation: 2,
            //   indexSensor: 3,
            //   data: [message.O2, message.LEL, message.VOC],
            // };
            // if (infowindow3) {
            //   infowindow3.close();
            // }
            // infowindow3 = new google.maps.InfoWindow({
            //   content: `<div class="container3"><div class="ui2 header">OBB Jetty</div><div class="data">O2 : ${message.O2}</div><div class="data">LEL : ${message.LEL}</div><div class="data end">VOC : ${message.VOC}</div></div>`,
            //   pixelOffset: new google.maps.Size(125, 90),
            // });
            infowindow3.setContent(`<div class="container3"><div class="ui2 header">OBB Jetty</div><div id="3O2" class="data">O2 : ${message.O2}</div><div id="3LEL" class="data">LEL : ${message.LEL}</div><div  id="3VOC" class="data end">VOC : ${message.VOC}</div></div>`); // infowindow3.open(map, marker3);

            this.checkWarningRemarks(2); // this.getMQTTData(data);

            this.check(2, 0, message.O2, maxO2);
            this.check(2, 1, message.LEL, maxLEL);
            this.check(2, 2, message.VOC, maxVOC);
            let a = document.getElementById("3O2");
            let b = document.getElementById("3LEL");
            let c = document.getElementById("3VOC");

            if (this.sensors[2].sensorData[0].isHigh == true) {
              a.classList.add("high");
            } else {
              a.classList.remove("high");
            }

            if (this.sensors[2].sensorData[1].isHigh == true) {
              b.classList.add("high");
            } else {
              b.classList.remove("high");
            }

            if (this.sensors[2].sensorData[2].isHigh == true) {
              c.classList.add("high");
            } else {
              c.classList.remove("high");
            } // this.insertCurrentArray(data);
            // this.adddata(2);
            // this.countWarning();
            // this.loadedMP10Jetty = true;
            // this.currentDataTimeMP10Jetty = new Date();

          }
        } // DG Yard


        if (topic === "geyzer/data/dg") {
          message = JSON.parse(message);

          if (message.JID == 4) {
            const data = {
              indexStation: 3,
              indexSensor: 6,
              data: [message.O2, message.LEL, message.VOC, message.NH3, message.CL2, message.H2S]
            };
            infowindow4.setContent(`<div class="container4"><div class="ui4 header">DG yard</div><div id="4O2" class="data">O2 : ${message.O2}</div><div id="4LEL" class="data">LEL : ${message.LEL}</div><div id="4VOC" class="data">VOC : ${message.VOC}</div><div id="4NH3" class="data">NH3 : ${message.NH3}</div><div id="4CL2" class="data">CL2 : ${message.CL2}</div><div id="4H2S" class="data end">H2S : ${message.H2S}</div></div>`);
            this.checkWarningRemarks(3); // this.getMQTTData(data);

            this.check(3, 0, message.O2, maxO2);
            this.check(3, 1, message.LEL, maxLEL);
            this.check(3, 2, message.VOC, maxVOC);
            this.check(3, 3, message.NH3, maxNH3);
            this.check(3, 4, message.CL2, maxCL2);
            this.check(3, 5, message.H2S, maxH2S);
            let a = document.getElementById("4O2");
            let b = document.getElementById("4LEL");
            let c = document.getElementById("4VOC");
            let d = document.getElementById("4NH3");
            let e = document.getElementById("4CL2");
            let f = document.getElementById("4H2S");

            if (this.sensors[3].sensorData[0].isHigh == true) {
              a.classList.add("high");
            } else {
              a.classList.remove("high");
            }

            if (this.sensors[3].sensorData[1].isHigh == true) {
              b.classList.add("high");
            } else {
              b.classList.remove("high");
            }

            if (this.sensors[3].sensorData[2].isHigh == true) {
              c.classList.add("high");
            } else {
              c.classList.remove("high");
            }

            if (this.sensors[3].sensorData[3].isHigh == true) {
              d.classList.add("high");
            } else {
              d.classList.remove("high");
            }

            if (this.sensors[3].sensorData[4].isHigh == true) {
              e.classList.add("high");
            } else {
              e.classList.remove("high");
            }

            if (this.sensors[3].sensorData[5].isHigh == true) {
              f.classList.add("high");
            } else {
              f.classList.remove("high");
            } // this.insertCurrentArray(data);
            // this.adddata(3);
            // this.countWarning();
            // this.loadedDGYard = true;
            // this.currentDataTimeDGYard = new Date();

          }
        } // }
        // if (message.LNG_ID) {
        // LNG_ID 1


        if (topic === "geyzer/data/lel/1") {
          message = JSON.parse(message); // console.log(message);

          this.lel1 = message;
          this.lel12 = message;
          this.checkLNG();
          this.checkLNGYard(4, 0, message, maxLEL); // if (message) {
          // const data = {
          //   indexStation: 4,
          //   indexSensor: 0,
          //   data: message.LEL,
          // };
          // this.lel1 = message;

          infowindow5.setContent(`<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div id="5LEL1" class="data">LEL 1 : ${this.lel1}</div><div id="5LEL2" class="data">LEL 2 : ${this.lel2}</div><div id="5LEL3" class="data">LEL 3 : ${this.lel3}</div><div id="5LEL4" class="data">LEL 4 : ${this.lel4}</div><div id="5LEL5" class="data end">LEL 5 : ${this.lel5}</div></div>`);
          let a = document.getElementById("5LEL1");
          let b = document.getElementById("5LEL2");
          let c = document.getElementById("5LEL3");
          let d = document.getElementById("5LEL4");
          let e = document.getElementById("5LEL5");

          if (this.sensors[4].sensorData[0].isHigh == true) {
            a.classList.add("high");
          } else {
            a.classList.remove("high");
          }

          if (this.sensors[4].sensorData[1].isHigh == true) {
            b.classList.add("high");
          } else {
            b.classList.remove("high");
          }

          if (this.sensors[4].sensorData[2].isHigh == true) {
            c.classList.add("high");
          } else {
            c.classList.remove("high");
          }

          if (this.sensors[4].sensorData[3].isHigh == true) {
            d.classList.add("high");
          } else {
            d.classList.remove("high");
          }

          if (this.sensors[4].sensorData[4].isHigh == true) {
            e.classList.add("high");
          } else {
            e.classList.remove("high");
          }
        } // LNG_ID 2


        if (topic === "geyzer/data/lel/2") {
          message = JSON.parse(message);
          this.lel2 = message;
          this.lel22 = message; // if (message) {

          const data = {
            indexStation: 4,
            indexSensor: 1,
            data: message.LEL
          };
          infowindow5.setContent(`<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div id="5LEL1" class="data">LEL 1 : ${this.lel1}</div><div id="5LEL2" class="data">LEL 2 : ${this.lel2}</div><div id="5LEL3" class="data">LEL 3 : ${this.lel3}</div><div id="5LEL4" class="data">LEL 4 : ${this.lel4}</div><div id="5LEL5" class="data end">LEL 5 : ${this.lel5}</div></div>`); // this.getMQTTDataLNG(data);

          this.checkLNG();
          this.checkLNGYard(4, 1, message, maxLEL); // this.check(4, 1, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(5);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }

          let a = document.getElementById("5LEL1");
          let b = document.getElementById("5LEL2");
          let c = document.getElementById("5LEL3");
          let d = document.getElementById("5LEL4");
          let e = document.getElementById("5LEL5");

          if (this.sensors[4].sensorData[0].isHigh == true) {
            a.classList.add("high");
          } else {
            a.classList.remove("high");
          }

          if (this.sensors[4].sensorData[1].isHigh == true) {
            b.classList.add("high");
          } else {
            b.classList.remove("high");
          }

          if (this.sensors[4].sensorData[2].isHigh == true) {
            c.classList.add("high");
          } else {
            c.classList.remove("high");
          }

          if (this.sensors[4].sensorData[3].isHigh == true) {
            d.classList.add("high");
          } else {
            d.classList.remove("high");
          }

          if (this.sensors[4].sensorData[4].isHigh == true) {
            e.classList.add("high");
          } else {
            e.classList.remove("high");
          }
        } // LNG_ID 3


        if (topic === "geyzer/data/lel/3") {
          message = JSON.parse(message);
          this.lel3 = message;
          this.lel32 = message; // if (message) {

          const data = {
            indexStation: 4,
            indexSensor: 2,
            data: message.LEL
          };
          infowindow5.setContent(`<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div id="5LEL1" class="data">LEL 1 : ${this.lel1}</div><div id="5LEL2" class="data">LEL 2 : ${this.lel2}</div><div id="5LEL3" class="data">LEL 3 : ${this.lel3}</div><div id="5LEL4" class="data">LEL 4 : ${this.lel4}</div><div id="5LEL5" class="data end">LEL 5 : ${this.lel5}</div></div>`); // this.getMQTTDataLNG(data);

          this.checkLNG();
          this.checkLNGYard(4, 2, message, maxLEL); // this.check(4, 2, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(6);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }

          let a = document.getElementById("5LEL1");
          let b = document.getElementById("5LEL2");
          let c = document.getElementById("5LEL3");
          let d = document.getElementById("5LEL4");
          let e = document.getElementById("5LEL5");

          if (this.sensors[4].sensorData[0].isHigh == true) {
            a.classList.add("high");
          } else {
            a.classList.remove("high");
          }

          if (this.sensors[4].sensorData[1].isHigh == true) {
            b.classList.add("high");
          } else {
            b.classList.remove("high");
          }

          if (this.sensors[4].sensorData[2].isHigh == true) {
            c.classList.add("high");
          } else {
            c.classList.remove("high");
          }

          if (this.sensors[4].sensorData[3].isHigh == true) {
            d.classList.add("high");
          } else {
            d.classList.remove("high");
          }

          if (this.sensors[4].sensorData[4].isHigh == true) {
            e.classList.add("high");
          } else {
            e.classList.remove("high");
          }
        } // LNG_ID 4


        if (topic === "geyzer/data/lel/4") {
          message = JSON.parse(message); // console.log(message);
          // if (message) {

          const data = {
            indexStation: 4,
            indexSensor: 3,
            data: message.LEL
          };
          this.lel4 = message;
          this.lel42 = message;
          infowindow5.setContent(`<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div id="5LEL1" class="data">LEL 1 : ${this.lel1}</div><div id="5LEL2" class="data">LEL 2 : ${this.lel2}</div><div id="5LEL3" class="data">LEL 3 : ${this.lel3}</div><div id="5LEL4" class="data">LEL 4 : ${this.lel4}</div><div id="5LEL5" class="data end">LEL 5 : ${this.lel5}</div></div>`); // this.getMQTTDataLNG(data);

          this.checkLNG();
          this.checkLNGYard(4, 3, message, maxLEL); // this.check(4, 3, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(7);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }

          let a = document.getElementById("5LEL1");
          let b = document.getElementById("5LEL2");
          let c = document.getElementById("5LEL3");
          let d = document.getElementById("5LEL4");
          let e = document.getElementById("5LEL5");

          if (this.sensors[4].sensorData[0].isHigh == true) {
            a.classList.add("high");
          } else {
            a.classList.remove("high");
          }

          if (this.sensors[4].sensorData[1].isHigh == true) {
            b.classList.add("high");
          } else {
            b.classList.remove("high");
          }

          if (this.sensors[4].sensorData[2].isHigh == true) {
            c.classList.add("high");
          } else {
            c.classList.remove("high");
          }

          if (this.sensors[4].sensorData[3].isHigh == true) {
            d.classList.add("high");
          } else {
            d.classList.remove("high");
          }

          if (this.sensors[4].sensorData[4].isHigh == true) {
            e.classList.add("high");
          } else {
            e.classList.remove("high");
          }
        } // LNG_ID 5


        if (topic === "geyzer/data/lel/5") {
          message = JSON.parse(message); // if (message) {

          const data = {
            indexStation: 4,
            indexSensor: 4,
            data: message.LEL
          };
          this.lel5 = message;
          this.lel52 = message;
          infowindow5.setContent(`<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div id="5LEL1" class="data">LEL 1 : ${this.lel1}</div><div id="5LEL2" class="data">LEL 2 : ${this.lel2}</div><div id="5LEL3" class="data">LEL 3 : ${this.lel3}</div><div id="5LEL4" class="data">LEL 4 : ${this.lel4}</div><div id="5LEL5" class="data end">LEL 5 : ${this.lel5}</div></div>`); // this.getMQTTDataLNG(data);

          this.checkLNG();
          this.checkLNGYard(4, 4, message, maxLEL); // this.check(4, 4, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(8);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }

          let a = document.getElementById("5LEL1");
          let b = document.getElementById("5LEL2");
          let c = document.getElementById("5LEL3");
          let d = document.getElementById("5LEL4");
          let e = document.getElementById("5LEL5");

          if (this.sensors[4].sensorData[0].isHigh == true) {
            a.classList.add("high");
          } else {
            a.classList.remove("high");
          }

          if (this.sensors[4].sensorData[1].isHigh == true) {
            b.classList.add("high");
          } else {
            b.classList.remove("high");
          }

          if (this.sensors[4].sensorData[2].isHigh == true) {
            c.classList.add("high");
          } else {
            c.classList.remove("high");
          }

          if (this.sensors[4].sensorData[3].isHigh == true) {
            d.classList.add("high");
          } else {
            d.classList.remove("high");
          }

          if (this.sensors[4].sensorData[4].isHigh == true) {
            e.classList.add("high");
          } else {
            e.classList.remove("high");
          }
        } // this.adddata(4);
        // this.countWarning();
        // this.loadedLNG = true;
        // this.currentDataTimeLNG = new Date();
        // }


        if (topic === "geyzer/data/weather") {
          message = JSON.parse(message);

          if (message.ID == 10) {// this.getWeather(message);
          }
        }

        if (topic === "geyzer/server/stats") {
          // if (message.server) {
          message = JSON.parse(message); // console.log(message);
          // this.getServer(message);
          // this.loadedServer = true;
          // this.currentDataTimeServer = new Date();
          // }
        } // }

      });
    },

    doSubscribe() {
      const {
        topic,
        qos
      } = this.subscription;
      this.client.subscribe(topic, {
        qos
      }, (error, res) => {
        if (error) {
          return;
        }

        this.subscribeSuccess = true;
      });
    },

    ...Object(external_vuex_["mapMutations"])({
      checkWarning: "checkWarning",
      checkWarningLNG: "checkWarningLNG",
      checkWarningRemarks: "checkWarningRemarks",
      checkLNGWarning: "checkLNGWarning"
    })
  },

  async mounted() {
    this.createConnection();
    this.doSubscribe();
  },

  computed: { ...Object(external_vuex_["mapState"])({
      sensors: state => state.stations
    })
  }
});
// CONCATENATED MODULE: ./components/Maps3.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Maps3vue_type_script_lang_js_ = (Maps3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Maps3.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Maps3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4f72d222"
  
)

/* harmony default export */ var Maps3 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=maps3.js.map