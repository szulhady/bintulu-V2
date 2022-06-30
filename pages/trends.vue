<template>
  <section style="display: flex">
    <div
      style="
        width: 22vw;
        height: calc(100vh - 100px) !important;
        padding-left: 1vw;
        padding-right: 1vw;
        position: relative;
      "
    >
      <div v-for="(station, index) in stations" :key="index" class="flex">
        <v-card
          @click="console(index)"
          class="elevation-5 rounded-lg"
          :id="index"
          style="height: 15vh; margin-bottom: 2vh; margin-top: 2vh"
        >
          <v-img :src="station.image" class="station-img" height="75%"></v-img>
          <v-card-subtitle class="jetty">
            {{ station.jetty }}
          </v-card-subtitle>
        </v-card>
      </div>
      <div style="display: flex; justify-content: space-evenly">
        <v-btn
          to="/"
          class="neon"
          style="
            width: 40%;
            height: 5vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
            z-index: 2;
          "
        >
          Back to summary
        </v-btn>
        <v-btn
          to="/download"
          class="neon"
          style="
            width: 40%;
            height: 5vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
            z-index: 1;
          "
        >
          Go to download
        </v-btn>
      </div>
      <div
        class="loading2"
        v-if="loading1 || loading2 || loading3 || loading4"
      ></div>
    </div>
    <div
      style="width: 78vw; height: calc(100vh - 100px) !important; padding: 1vw"
    >
      <div class="map-con">
        <v-card-title>Trends</v-card-title>
        <SensorButton :active="active" />
        <v-row class="data-box" style="padding-bottom: 5px">
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <SingleLineChart
                :data="data[active].sensorData[activeSensor].current"
                :yAxis="data[active].sensorData[activeSensor].unit"
                :max="data[active].sensorData[activeSensor].max"
                :time="time[activeGraph]"
              />
            </v-card>
          </v-col>
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <MultipleLineChart
                id="hourly"
                title="Hourly"
                xAxis="Hour"
                :min="trendHourly.min"
                :max="trendHourly.max"
                :avg="trendHourly.avg"
                :time="trendHourly.time"
              />
              <div class="loading" v-if="loading1" :loading1="loading1">
                Loading...
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <MultipleLineChart
                id="daily"
                title="Daily"
                xAxis="Day"
                :min="trendDaily.min"
                :max="trendDaily.max"
                :avg="trendDaily.avg"
                :time="trendDaily.time"
              />
              <div class="loading" v-if="loading2" :loading1="loading1">
                Loading...
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <MultipleLineChart
                id="monthly"
                title="Monthly"
                xAxis="Month"
                :min="trendMonthly.min"
                :max="trendMonthly.max"
                :avg="trendMonthly.avg"
                :time="trendMonthly.time"
              />
              <div class="loading" v-if="loading3" :loading1="loading1">
                Loading...
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import mqtt from "mqtt";
import moment from "moment-timezone";
import { mapState, mapMutations } from "vuex";

import SensorButton from "~/components/SensorButton.vue";
import SingleLineChart from "~/components/SingleLineChart";
import MultipleLineChart from "~/components/MultipleLineChart";
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  data() {
    return {
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
    };
  },
  components: { SensorButton, SingleLineChart, MultipleLineChart },
  computed: {
    ...mapState({
      stations: (state) => state.stations,
      active: (state) => state.active,
      activeSensor: (state) => state.activeSensor,
      data: (state) => state.stations,
      time: (state) => state.arrayTime,
      trends: (state) => state.trends,
      trendHourly: (state) => state.trendHourly,
      trendDaily: (state) => state.trendDaily,
      trendMonthly: (state) => state.trendMonthly,
      activeGraph: (state) => state.activeGraph,
      loading1: (state) => state.loading1,
      loading2: (state) => state.loading2,
      loading3: (state) => state.loading3,
    }),
  },
  // transition: "main",
  methods: {
    console: function (index) {
      this.getActive(index);
      console.log(index);
      const active = document.getElementById(index).classList.add("active");
      for (let i = 0; i <= 4; i++) {
        if (i != index) {
          let deactive = document.getElementById(i).classList.remove("active");
        }
      }
      this.getActiveSensor(0);
      // console.log(index);
      if (index == 0) {
        this.setActiveGraph(0);
      }
      if (index == 1) {
        this.setActiveGraph(1);
      }
      if (index == 2) {
        this.setActiveGraph(2);
      }
      if (index == 3) {
        this.setActiveGraph(3);
      }
      if (index == 4) {
        this.setActiveGraph(4);
      }
      let station = ["geyser_one", "geyser_two", "geyser_four", "geyser_three"];
      let sensorArray = [];
      if (this.active == 0) {
        sensorArray = ["O2", "LEL", "VOC"];
      } else if (this.active == 1) {
        sensorArray = ["O2", "LEL", "DG"];
      } else if (this.active == 2) {
        sensorArray = ["O2", "LEL", "VOC"];
      } else if (this.active == 3) {
        sensorArray = ["O2", "LEL", "VOC", "DG", "CL2", "H2S"];
      }
      if (index != 4) {
        this.getDataHourly(station[this.active], sensorArray[0]);
        this.getDataDaily(station[this.active], sensorArray[0]);
        this.getDataMonthly(station[this.active], sensorArray[0]);
      } else {
        this.getDataHourlyLNG("geyser_five", "LEL", 1);
        this.getDataDailyLNG("geyser_five", "LEL", 1);
        this.getDataMonthlyLNG("geyser_five", "LEL", 1);
      }
    },
    ...mapMutations({
      getActive: "getActive",
      getActiveSensor: "getActiveSensor",
      setActiveGraph: "setActiveGraph",
      getHourly: "getHourly",
      getDaily: "getDaily",
      getMonthly: "getMonthly",
      getDatabaseHourly: "getDatabaseHourly",
      getDatabaseDaily: "getDatabaseDaily",
      getDatabaseMonthly: "getDatabaseMonthly",
      setLoading1: "setLoading1",
      setLoading2: "setLoading2",
      setLoading3: "setLoading3",
      getCurrentTimeArray: "getCurrentTimeArray",
      insertCurrentArray: "insertCurrentArray",
      insertCurrentArrayLNG: "insertCurrentArrayLNG",
    }),
    getDataHourly: function (station, sensorVal) {
      this.setLoading1(true);
      this.$axios
        .$get(`http://167.99.75.232:7777/api/hourly`, {
          // .$get(`http://localhost:7777/api/hourly`, {
          // .$get(`https://bintuluport-backend.herokuapp.com/api/hourly`, {
          // .$get(`/api/hourly`, {
          params: {
            // .$get(`/api/daily/`,{params:{
            position: station,
            val: sensorVal,
          },
        })
        .then((response) => {
          // console.log(response);
          let data = {};
          let max = [];
          let min = [];
          let avg = [];
          let time = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            time.push(item.hour);
          });
          // data = { station, indexStation, indexSensor, min, max, avg, hour };
          data = { max, avg, min, time };
          this.getDatabaseHourly(data);
          // console.log(data);
          this.setLoading1(false);
          // this.getHourly(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataDaily: function (station, sensorVal) {
      this.setLoading2(true);
      this.$axios
        .$get(`http://167.99.75.232:7777/api/daily`, {
          // .$get(`http://localhost:7777/api/daily`, {
          // .$get(`https://bintuluport-backend.herokuapp.com/api/daily`, {
          // .$get(`/api/daily`, {
          params: {
            // .$get("/api/weekly/",{params:{
            position: station,
            val: sensorVal,
          },
        })
        .then((response) => {
          // console.log(response);
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let time = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            time.push(item.day);
          });
          data = { max, avg, min, time };
          this.getDatabaseDaily(data);
          this.setLoading2(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataMonthly: function (station, sensorVal) {
      this.setLoading3(true);
      this.$axios
        .$get(`http://167.99.75.232:7777/api/monthly`, {
          // .$get(`http://localhost:7777/api/monthly`, {
          // .$get(`https://bintuluport-backend.herokuapp.com/api/monthly`, {
          // .$get(`/api/monthly`, {
          params: {
            // .$get("/api/monthly/",{params:{
            position: station,
            val: sensorVal,
          },
        })
        .then((response) => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          // let month = [];
          let time = [];

          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            time.push(item.monthname);
          });
          data = {
            min,
            max,
            avg,
            time,
          };
          this.getDatabaseMonthly(data);
          this.setLoading3(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataHourlyLNG: function (station, sensorVal, pid) {
      this.setLoading1(true);
      this.$axios
        .$get(`http://167.99.75.232:7777/api/hourlyLNG`, {
          // .$get(`http://localhost:7777/api/hourlyLNG`, {
          // .$get(`https://bintuluport-backend.herokuapp.com/api/hourly`, {
          // .$get(`/api/hourly`, {
          params: {
            // .$get(`/api/daily/`,{params:{
            position: station,
            val: sensorVal,
            pid: pid,
          },
        })
        .then((response) => {
          console.log(response);
          let data = {};
          let max = [];
          let min = [];
          let avg = [];
          let time = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            time.push(item.hour);
          });
          // data = { station, indexStation, indexSensor, min, max, avg, hour };
          data = { max, avg, min, time };
          this.getDatabaseHourly(data);
          // console.log(data);
          this.setLoading1(false);
          // this.getHourly(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataDailyLNG: function (station, sensorVal, pid) {
      this.setLoading2(true);
      this.$axios
        .$get(`http://167.99.75.232:7777/api/dailyLNG`, {
          // .$get(`http://localhost:7777/api/dailyLNG`, {
          // .$get(`https://bintuluport-backend.herokuapp.com/api/daily`, {
          // .$get(`/api/daily`, {
          params: {
            // .$get("/api/weekly/",{params:{
            position: station,
            val: sensorVal,
            pid: pid,
          },
        })
        .then((response) => {
          // console.log(response);
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let time = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            time.push(item.day);
          });
          data = { max, avg, min, time };
          this.getDatabaseDaily(data);
          this.setLoading2(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataMonthlyLNG: function (station, sensorVal, pid) {
      this.setLoading3(true);
      this.$axios
        .$get(`http://167.99.75.232:7777/api/monthlyLNG`, {
          // .$get(`http://localhost:7777/api/monthlyLNG`, {
          // .$get(`https://bintuluport-backend.herokuapp.com/api/monthly`, {
          // .$get(`/api/monthly`, {
          params: {
            // .$get("/api/monthly/",{params:{
            position: station,
            val: sensorVal,
            pid: pid,
          },
        })
        .then((response) => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          // let month = [];
          let time = [];

          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            time.push(item.monthname);
          });
          data = {
            min,
            max,
            avg,
            time,
          };
          this.getDatabaseMonthly(data);
          this.setLoading3(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createConnection() {
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
        // Petrochemical Jetty
        if (topic === "geyzer/data/petrochemical") {
          message = JSON.parse(message);
          if (message.JID == 1) {
            const data = {
              indexStation: 0,
              indexSensor: 3,
              data: [message.O2, message.LEL, message.VOC],
            };
            this.insertCurrentArray(data);
            this.adddata(0);
          }
        }

        //Ammonia Whaft Jetty
        if (topic === "geyzer/data/nh3") {
          message = JSON.parse(message);

          if (message.JID == 3) {
            const data = {
              indexStation: 1,
              indexSensor: 3,
              data: [message.O2, message.LEL, message.NH3],
            };
            this.insertCurrentArray(data);
            this.adddata(1);
          }
        }

        // MP10 Jetty
        if (topic === "geyzer/data/OBB") {
          message = JSON.parse(message);
          if (message.JID == 2) {
            const data = {
              indexStation: 2,
              indexSensor: 3,
              data: [message.O2, message.LEL, message.VOC],
            };
            this.insertCurrentArray(data);
            this.adddata(2);
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

            this.insertCurrentArray(data);
            this.adddata(3);
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
          // this.checkLNG();
          // if (message) {
          const data = {
            indexStation: 4,
            indexSensor: 0,
            data: message,
          };
          console.log(data);
          // this.lel1 = message;

          // this.checkWarningRemarks(4);
          // this.getMQTTDataLNG(data);
          // this.check(4, 0, message.LEL, maxLEL);
          this.insertCurrentArrayLNG(data);
          this.adddata(4);
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
            data: message,
          };
          // this.getMQTTDataLNG(data);
          // this.checkLNG();
          // this.check(4, 1, message.LEL, maxLEL);
          this.insertCurrentArrayLNG(data);
          this.adddata(5);
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
            data: message,
          };
          // this.getMQTTDataLNG(data);
          // this.checkLNG();
          // this.check(4, 2, message.LEL, maxLEL);
          this.insertCurrentArrayLNG(data);
          this.adddata(6);
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
            data: message,
          };
          this.lel4 = message;
          this.lel42 = message;

          // this.getMQTTDataLNG(data);
          // this.checkLNG();
          // this.check(4, 3, message.LEL, maxLEL);
          this.insertCurrentArrayLNG(data);
          this.adddata(7);
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
            data: message,
          };
          this.lel5 = message;
          this.lel52 = message;

          // this.getMQTTDataLNG(data);
          // this.checkLNG();
          // this.check(4, 4, message.LEL, maxLEL);
          this.insertCurrentArrayLNG(data);
          this.adddata(8);
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
    adddata: function (index) {
      let gettime = new Date();
      this.time2 = moment(gettime)
        .tz("Asia/Kuala_Lumpur")
        // .format("H:mm:ss")
        .format("H:mm:ss");
      // .format("LTS");
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // add a zero in front of numbers<10
      h = checkTime(h);
      m = checkTime(m);
      s = checkTime(s);
      this.realTime = h + ":" + m + ":" + s;
      const data = { index: index, realTime: this.time2 };
      // console.log(data);
      this.getCurrentTimeArray(data);
    },
  },
  async mounted() {
    this.getActive(0);
    this.getActiveSensor(0);
    const active = document.getElementById(0).classList.add("active");
    this.getDataHourly("geyser_one", "O2");
    this.getDataDaily("geyser_one", "O2");
    this.getDataMonthly("geyser_one", "O2");

    this.createConnection();
    this.doSubscribe();
  },
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading2 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-card__title {
  font-size: 1rem;
}
.description {
  font-size: 0.85rem;
}
.active {
  /* background: #64d3e4 !important; */
  background: #31666e !important;
}

.v-card__subtitle {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .page-enter-active,
.page-leave-active {
  transition: opacity 5.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
} */
.v-btn__content {
  color: var(--clr-neon);
}
.neon2 {
  color: var(--clr-neon);
  text-decoration: none;
}
.neon {
  /* margin-top: -150px; */
  font-size: var(--font-size);
  display: inline-block;
  position: relative;
  cursor: pointer;
  border: var(--clr-neon) 0.125em solid;

  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.2em #fff7, 0 0 0.3em var(--clr-neon);
  box-shadow: inset 0 0 0.5em var(--clr-neon), 0 0 0.5em var(--clr-neon);
}

.neon::before {
  content: "";
  position: absolute;
  top: 140%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-neon);
  transform: perspective(0.2em) rotateX(10deg) scale(1.3, 0.4);
  filter: blur(0.5em);
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 100ms linear;
  z-index: 2000;
}

.neon::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: var(--clr-neon); */
  box-shadow: 0 0 2em var(--clr-neon);
  z-index: -1;
  opacity: 0;
  transition: opacity 100ms linear;
}

.neon:hover::after {
  opacity: 1;
}
.neon:hover,
.neon:focus {
  color: white;
}
.neon:hover::before {
  opacity: 0.8;
}
</style>

<style lang="scss" scoped>
.map-con {
  @include frame-border;
  padding: 1vh 1vw;
  // margin: 10px 0.3vw;
  width: 100%;
}
.v-card__title {
  padding: 10px 10px;
}
</style>
