<template>
  <div id="googleMap" style="width: 100%; height: calc(100vh - 120px)"></div>
</template>

<script>
import mqtt from "mqtt";
import { mapMutations } from "vuex";

class isHigh {
  constructor(indexStation, indexSensor, isHigh) {
    this.indexStation = indexStation;
    this.indexSensor = indexSensor;
    this.isHigh = isHigh;
  }
}

const maxO2 = -10;
const maxLEL = -10;
const maxVOC = -20;
const maxNH3 = -20;
const maxCL2 = -20;
const maxH2S = -20;

export default {
  data() {
    return {
      map: null,
      connection: {
        host: "txio.live",
        port: 8083,
        endpoint: "/mqtt",
        clean: true, // Reserved session
        connectTimeout: 4000, // Time out
        reconnectPeriod: 4000, // Reconnection interval
      },
      subscription: {
        // topic: "geyzer/#",
        topic: "geyzer/data/#",
        qos: 0,
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
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
      lelArray: [],
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
    checkLNG() {
      this.lelArray = [];
      // console.log("hh");
      // this.lelArray.push("LEL 1 is high");
      if (this.lel1 >= maxLEL) {
        this.lelArray.push(" LEL 1");
        // console.log("here");
      }
      if (this.lel2 >= maxLEL) {
        this.lelArray.push(" LEL 2");
        // console.log("here");
      }
      if (this.lel3 >= maxLEL) {
        this.lelArray.push(" LEL 3");
        // console.log("here");
      }
      if (this.lel4 >= maxLEL) {
        this.lelArray.push(" LEL 4");
        // console.log("here");
      }
      if (this.lel5 >= maxLEL) {
        this.lelArray.push(" LEL 5");
        // console.log("here");
      }
      let a = this.lelArray.toString();
      if (this.lelArray.length > 1) {
        a = a + " readings are high";
      } else if (this.lelArray.length == 1) {
        a = a + " reading is high";
      } else {
        a = "Good";
      }
      this.checkLNGWarning(a);

      // console.log(this.lelArray);
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
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#242f3e",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#746855",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#242f3e",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#263c3f",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6b9a76",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#38414e",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#212a37",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9ca5b3",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#746855",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#1f2835",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#f3d19c",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#2f3948",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#17263c",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#515c6d",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#17263c",
              },
            ],
          },
        ],
        mapTypeId: "hybrid",
      };
      var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
      );
      // Petrochemical Jetty
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(3.2592932651185236, 113.0752931476544),
        map: map,
        animation: google.maps.Animation.Drop,
      });
      var infowindow = new google.maps.InfoWindow({
        content: `<div class="container1"><div class="ui header">Petrochemical Jetty</div><div class="data">O2 : Waiting...</div><div class="data">LEL : Waiting...</div><div class="data end">VOC : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(-160, 90),
      });
      infowindow.open(map, marker);

      // Ammonia Whaft Jetty
      var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(
          3.2614980671619365,
          113.06751818919237
        ),
        map: map,
        animation: google.maps.Animation.Drop,
      });
      var infowindow2 = new google.maps.InfoWindow({
        content: `<div class="container2"><div class="ui header">Ammonia Whaft Jetty</div><div class="data">O2 : Waiting...</div><div class="data">LEL : Waiting...</div><div class="data end">NH3 : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(-160, 100),
      });
      infowindow2.open(map, marker2);

      // OBB Jetty
      var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(3.258601715715236, 113.07704509915513),
        map: map,
        animation: google.maps.Animation.Drop,
      });
      var infowindow3 = new google.maps.InfoWindow({
        content: `<div class="container3"><div class="ui2 header">OBB Jetty</div><div class="data">O2 : Waiting...</div><div class="data">LEL : Waiting...</div><div class="data end">VOC : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(125, 90),
      });
      infowindow3.open(map, marker3);

      // DG Yard
      var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(
          3.2647273706828495,
          113.07265982264411
        ),
        map: map,
        animation: google.maps.Animation.Drop,
      });
      var infowindow4 = new google.maps.InfoWindow({
        content: `<div class="container4"><div class="ui4 header">DG yard</div><div class="data">O2 :Waiting...</div><div class="data">LEL : Waiting...</div><div class="data">VOC : Waiting...</div><div class="data">NH3 : Waiting...</div><div class="data">CL2 : Waiting...</div><div class="data end">H2S : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(125, 130),
      });
      infowindow4.open(map, marker4);

      // LNG ISO Tank Yard
      var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(
          3.2660908704052347,
          113.07120972436627
        ),
        map: map,
        animation: google.maps.Animation.Drop,
      });
      var infowindow5 = new google.maps.InfoWindow({
        content: `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : Waiting...</div><div class="data">LEL 2 : Waiting...</div><div class="data">LEL 3 : Waiting...</div><div class="data">LEL 4 : Waiting...</div><div class="data end">LEL 5 : Waiting...</div></div>`,
        pixelOffset: new google.maps.Size(-160, 115),
      });
      infowindow5.open(map, marker5);
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", (error) => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        // if (topic === "geyzer/data") {
        if (topic === "test/responsive") {
          message = JSON.parse(message);
          // console.log("current time: ", Date.now(), message);
        }
        if (topic === "geyzer/data/petrochemical") {
          message = JSON.parse(message);
          if (message.JID == 1) {
            infowindow.setContent(
              `<div class="container1"><div class="ui header">Petrochemical Jetty</div><div class="data">O2 : ${message.O2}</div><div class="data">LEL : ${message.LEL}</div><div class="data end">VOC : ${message.VOC}</div></div>`
            );
            // this.checkWarning();
            // const data = {
            //   indexStation: 0,
            //   indexSensor: 3,
            //   data: [message.O2, message.LEL, message.VOC],
            // };
            this.checkWarningRemarks(0);
            // this.getMQTTData(data);
            this.check(0, 0, message.O2, maxO2);
            this.check(0, 1, message.LEL, maxLEL);
            this.check(0, 2, message.VOC, maxVOC);
            // this.insertCurrentArray(data);
            // this.adddata(0);
            // this.countWarning();
            // this.loadedPetrochemicalJetty = true;
            // this.currentDataTimePetrochemicalJetty = new Date();
          }
        }

        // if (message.JID) {
        // Petrochemical Jetty

        //Ammonia Whaft Jetty
        if (topic === "geyzer/data/nh3") {
          message = JSON.parse(message);

          if (message.JID == 3) {
            infowindow2.setContent(
              `<div class="container2"><div class="ui header">Ammonia Whaft Jetty</div><div class="data">O2 : ${message.O2}</div><div class="data">LEL : ${message.LEL}</div><div class="data end">NH3 : ${message.NH3}</div></div>`
            );
            // infowindow2.open(map, marker2);
            // const data = {
            //   indexStation: 1,
            //   indexSensor: 3,
            //   data: [message.O2, message.LEL, message.NH3],
            // };

            this.checkWarningRemarks(1);
            // this.getMQTTData(data);
            this.check(1, 0, message.O2, maxO2);
            this.check(1, 1, message.LEL, maxLEL);
            this.check(1, 2, message.NH3, maxNH3);
            // this.insertCurrentArray(data);
            // this.adddata(1);
            // this.countWarning();
            // this.loadedWhaftJetty = true;
            // this.currentDataTimeWhaftJetty = new Date();
          }
        }

        // MP10 Jetty
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
            infowindow3.setContent(
              `<div class="container3"><div class="ui2 header">OBB Jetty</div><div class="data">O2 : ${message.O2}</div><div class="data">LEL : ${message.LEL}</div><div class="data end">VOC : ${message.VOC}</div></div>`
            );
            // infowindow3.open(map, marker3);
            this.checkWarningRemarks(2);
            // this.getMQTTData(data);
            this.check(2, 0, message.O2, maxO2);
            this.check(2, 1, message.LEL, maxLEL);
            this.check(2, 2, message.VOC, maxVOC);
            // this.insertCurrentArray(data);
            // this.adddata(2);
            // this.countWarning();
            // this.loadedMP10Jetty = true;
            // this.currentDataTimeMP10Jetty = new Date();
          }
        }

        // DG Yard
        if (topic === "geyzer/data/dg") {
          message = JSON.parse(message);
          if (message.JID == 4) {
            const data = {
              indexStation: 3,
              indexSensor: 6,
              data: [
                message.O2,
                message.LEL,
                message.VOC,
                message.NH3,
                message.CL2,
                message.H2S,
              ],
            };
            infowindow4.setContent(
              `<div class="container4"><div class="ui4 header">DG yard</div><div class="data">O2 : ${message.O2}</div><div class="data">LEL : ${message.LEL}</div><div class="data">VOC : ${message.VOC}</div><div class="data">NH3 : ${message.NH3}</div><div class="data">CL2 : ${message.CL2}</div><div class="data end">H2S : ${message.H2S}</div></div>`
            );
            this.checkWarningRemarks(3);
            // this.getMQTTData(data);
            this.check(3, 0, message.O2, maxO2);
            this.check(3, 1, message.LEL, maxLEL);
            this.check(3, 2, message.VOC, maxVOC);
            this.check(3, 3, message.NH3, maxNH3);
            this.check(3, 4, message.CL2, maxCL2);
            this.check(3, 5, message.H2S, maxH2S);
            // this.insertCurrentArray(data);
            // this.adddata(3);
            // this.countWarning();
            // this.loadedDGYard = true;
            // this.currentDataTimeDGYard = new Date();
          }
        }

        // }

        // if (message.LNG_ID) {
        // LNG_ID 1
        if (topic === "geyzer/data/lel/1") {
          message = JSON.parse(message);
          // console.log(message);
          this.lel1 = message;
          this.lel12 = message;
          this.checkLNG();
          // if (message) {
          // const data = {
          //   indexStation: 4,
          //   indexSensor: 0,
          //   data: message.LEL,
          // };
          // this.lel1 = message;
          infowindow5.setContent(
            `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : ${this.lel1}</div><div class="data">LEL 2 : ${this.lel2}</div><div class="data">LEL 3 : ${this.lel3}</div><div class="data">LEL 4 : ${this.lel4}</div><div class="data end">LEL 5 : ${this.lel5}</div></div>`
          );
          // this.checkWarningRemarks(4);
          // this.getMQTTDataLNG(data);
          // this.check(4, 0, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(4);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }
        }

        // LNG_ID 2
        if (topic === "geyzer/data/lel/2") {
          message = JSON.parse(message);
          this.lel2 = message;
          this.lel22 = message;

          // if (message) {
          const data = {
            indexStation: 4,
            indexSensor: 1,
            data: message.LEL,
          };

          infowindow5.setContent(
            `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : ${this.lel1}</div><div class="data">LEL 2 : ${this.lel2}</div><div class="data">LEL 3 : ${this.lel3}</div><div class="data">LEL 4 : ${this.lel4}</div><div class="data end">LEL 5 : ${this.lel5}</div></div>`
          );
          // this.getMQTTDataLNG(data);
          this.checkLNG();
          // this.check(4, 1, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(5);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }
        }

        // LNG_ID 3
        if (topic === "geyzer/data/lel/3") {
          message = JSON.parse(message);
          this.lel3 = message;
          this.lel32 = message;
          // if (message) {
          const data = {
            indexStation: 4,
            indexSensor: 2,
            data: message.LEL,
          };

          infowindow5.setContent(
            `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : ${this.lel1}</div><div class="data">LEL 2 : ${this.lel2}</div><div class="data">LEL 3 : ${this.lel3}</div><div class="data">LEL 4 : ${this.lel4}</div><div class="data end">LEL 5 : ${this.lel5}</div></div>`
          );
          // this.getMQTTDataLNG(data);
          this.checkLNG();
          // this.check(4, 2, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(6);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }
        }

        // LNG_ID 4
        if (topic === "geyzer/data/lel/4") {
          message = JSON.parse(message);
          // console.log(message);
          // if (message) {
          const data = {
            indexStation: 4,
            indexSensor: 3,
            data: message.LEL,
          };
          this.lel4 = message;
          this.lel42 = message;
          infowindow5.setContent(
            `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : ${this.lel1}</div><div class="data">LEL 2 : ${this.lel2}</div><div class="data">LEL 3 : ${this.lel3}</div><div class="data">LEL 4 : ${this.lel4}</div><div class="data end">LEL 5 : ${this.lel5}</div></div>`
          );
          // this.getMQTTDataLNG(data);
          this.checkLNG();
          // this.check(4, 3, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(7);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }
        }

        // LNG_ID 5
        if (topic === "geyzer/data/lel/5") {
          message = JSON.parse(message);
          // if (message) {
          const data = {
            indexStation: 4,
            indexSensor: 4,
            data: message.LEL,
          };
          this.lel5 = message;
          this.lel52 = message;
          infowindow5.setContent(
            `<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : ${this.lel1}</div><div class="data">LEL 2 : ${this.lel2}</div><div class="data">LEL 3 : ${this.lel3}</div><div class="data">LEL 4 : ${this.lel4}</div><div class="data end">LEL 5 : ${this.lel5}</div></div>`
          );
          // this.getMQTTDataLNG(data);
          this.checkLNG();
          // this.check(4, 4, message.LEL, maxLEL);
          // this.insertCurrentArrayLNG(data);
          // this.adddata(8);
          // this.countWarning();
          // this.loadedLNG = true;
          // this.currentDataTimeLNG = new Date();
          // }
        }

        // this.adddata(4);
        // this.countWarning();
        // this.loadedLNG = true;
        // this.currentDataTimeLNG = new Date();
        // }
        if (topic === "geyzer/data/weather") {
          message = JSON.parse(message);
          if (message.ID == 10) {
            // this.getWeather(message);
          }
        }

        if (topic === "geyzer/server/stats") {
          // if (message.server) {
          message = JSON.parse(message);
          // console.log(message);
          // this.getServer(message);
          // this.loadedServer = true;
          // this.currentDataTimeServer = new Date();
          // }
        }

        // }
      });
    },
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          return;
        }
        this.subscribeSuccess = true;
      });
    },
    ...mapMutations({
      checkWarning: "checkWarning",
      checkWarningRemarks: "checkWarningRemarks",
      checkLNGWarning: "checkLNGWarning",
    }),
  },
  async mounted() {
    this.createConnection();
    this.doSubscribe();
  },
};
</script>

<style>
.gm-style .gm-style-iw-t::after {
  background: transparent;
  display: none;
}
.gm-style .gm-style-iw-c {
  overflow: visible;
}
.container1 {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}

.container1::after {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0.3);
}
.container1::after {
  box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
  content: "";
  height: 15px;
  right: -15px;
  position: absolute;
  top: 70px;
  transform: translate(-50%, -50%) rotate(-135deg);
  width: 15px;
  overflow: visible;
}

.container2 {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}

.container2::after {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0.3);
}
.container2::after {
  box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
  content: "";
  height: 15px;
  right: -15px;
  position: absolute;
  top: 70px;
  transform: translate(-50%, -50%) rotate(-135deg);
  width: 15px;
  overflow: visible;
}

.container3 {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}

.container3::after {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0.3);
}
.container3::after {
  box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
  content: "";
  height: 15px;
  left: 0px;
  position: absolute;
  top: 70px;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 15px;
  overflow: visible;
}

.container4 {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}

.container4::after {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0.3);
}
.container4::after {
  box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
  content: "";
  height: 15px;
  left: 0px;
  position: absolute;
  top: 110px;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 15px;
  overflow: visible;
}

.container5 {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}

.container5::after {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0.3);
}
.container5::after {
  box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
  content: "";
  height: 15px;
  right: -15px;
  position: absolute;
  top: 95px;
  transform: translate(-50%, -50%) rotate(-140deg);
  width: 15px;
  overflow: visible;
}

.ui {
  font-weight: bold;
  width: 220px;
  padding-bottom: 5px;
}
.ui2 {
  font-weight: bold;
  width: 150px;
  padding-bottom: 5px;
}
.ui4 {
  font-weight: bold;
  width: 150px;
  padding-bottom: 5px;
}
.data {
  padding: 5px 0 5px 10px;
}

.end {
  /* padding-bottom: 15px; */
}
#map {
  height: 100vh;
  background: gray;
}

.gm-style-iw + div {
  display: none !important;
}
button.gm-ui-hover-effect {
  visibility: hidden;
}
</style>
