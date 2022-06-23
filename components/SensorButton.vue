<template>
  <v-row class="row-button">
    <v-col
      class="flex-btn"
      v-for="(sensor, index) in sensors[active].sensors"
      :key="index"
    >
      <v-btn
        :id="sensor"
        :active="active"
        class="button elevation-12"
        @click="btnClick(sensor, index)"
        active-class="rSelected"
        >{{ sensors[jettyIndex].sensorData[index].description }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      loading1: true,
    };
  },
  computed: {
    ...mapState({
      sensors: (state) => state.stations,
      jettyIndex: (state) => state.active,
      sensorIndex: (state) => state.activeSensor,
    }),
  },
  props: ["active"],
  methods: {
    ...mapMutations({
      getActiveSensor: "getActiveSensor",
      setActiveGraph: "setActiveGraph",
      getActive: "getActive",
      getHourly: "getHourly",
      getDaily: "getDaily",
      getMonthly: "getMonthly",
      getDatabaseHourly: "getDatabaseHourly",
      getDatabaseDaily: "getDatabaseDaily",
      getDatabaseMonthly: "getDatabaseMonthly",
      setLoading1: "setLoading1",
      setLoading2: "setLoading2",
      setLoading3: "setLoading3",
    }),
    btnClick: function (sensor, index) {
      this.getActiveSensor(index);
      console.log(sensor);
      console.log(index);
      const active2 = document.getElementById(sensor).classList.add("active");
      let sensorsID;
      if (this.active == 1) {
        sensorsID = ["O2", "LEL", "NH3"];
      } else if (this.active == 3) {
        sensorsID = ["O2", "LEL", "VOC", "NH3", "CL2", "H2S"];
      } else if (this.active == 4) {
        sensorsID = ["LEL1", "LEL2", "LEL3", "LEL4", "LEL5"];
      } else {
        sensorsID = ["O2", "LEL", "VOC"];
      }
      // console.log(sensorsID)
      for (let i = 0; i < sensorsID.length; i++) {
        let Classes = sensorsID[i];
        if (Classes != sensor) {
          let deactive = document
            .getElementById(Classes)
            .classList.remove("active");
        }
      }
      if (sensor == "LEL1") {
        // console.log("here");
        this.setActiveGraph(4);
      }
      if (sensor == "LEL2") {
        this.setActiveGraph(5);
      }
      if (sensor == "LEL3") {
        this.setActiveGraph(6);
      }
      if (sensor == "LEL4") {
        this.setActiveGraph(7);
      }
      if (sensor == "LEL5") {
        this.setActiveGraph(8);
      }
      let station = ["geyser_one", "geyser_two", "geyser_four", "geyser_three"];
      let sensorArray = [];
      if (this.jettyIndex == 0) {
        sensorArray = ["O2", "LEL", "VOC"];
      } else if (this.jettyIndex == 1) {
        sensorArray = ["O2", "LEL", "DG"];
      } else if (this.jettyIndex == 2) {
        sensorArray = ["O2", "LEL", "VOC"];
      } else if (this.jettyIndex == 3) {
        sensorArray = ["O2", "LEL", "VOC", "DG", "CL2", "H2S"];
      }
      if (this.jettyIndex != 4) {
        this.getDataHourly(station[this.jettyIndex], sensorArray[index]);
        this.getDataDaily(station[this.jettyIndex], sensorArray[index]);
        this.getDataMonthly(station[this.jettyIndex], sensorArray[index]);
      } else {
        this.getDataHourlyLNG("geyser_five", "LEL", index + 1);
        this.getDataDailyLNG("geyser_five", "LEL", index + 1);
        this.getDataMonthlyLNG("geyser_five", "LEL", index + 1);
      }
    },
    getDataHourly: function (station, sensorVal) {
      this.setLoading1(true);
      this.$axios
        .$get(`http://165.22.243.184:7777/api/hourly`, {
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
    getDataHourlyLNG: function (station, sensorVal, pid) {
      this.setLoading1(true);
      this.$axios
        .$get(`http://165.22.243.184:7777/api/hourlyLNG`, {
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
        .$get(`http://165.22.243.184:7777/api/daily`, {
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
    getDataDailyLNG: function (station, sensorVal, pid) {
      this.setLoading2(true);
      this.$axios
        .$get(`http://165.22.243.184:7777/api/dailyLNG`, {
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
    getDataMonthly: function (station, sensorVal) {
      this.setLoading3(true);
      this.$axios
        .$get(`http://165.22.243.184:7777/api/monthly`, {
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
    getDataMonthlyLNG: function (station, sensorVal, pid) {
      this.setLoading3(true);
      this.$axios
        .$get(`http://165.22.243.184:7777/api/monthlyLNG`, {
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
  },
  mounted() {
    this.getActiveSensor(0);
    //  console.log(this.active)

    setTimeout(() => {
      const active2 = document.getElementById("O2").classList.add("active");
    }, 1);
  },
  watch: {
    active: function () {
      if (document.getElementById("LEL")) {
        let deactive = document
          .getElementById("LEL")
          .classList.remove("active");
      }
      if (document.getElementById("VOC")) {
        let deactive = document
          .getElementById("VOC")
          .classList.remove("active");
      }
      if (document.getElementById("NH3")) {
        let deactive = document
          .getElementById("NH3")
          .classList.remove("active");
      }
      if (document.getElementById("CL2")) {
        let deactive = document
          .getElementById("CL2")
          .classList.remove("active");
      }
      if (document.getElementById("H2S")) {
        let deactive = document
          .getElementById("H2S")
          .classList.remove("active");
      }
      if (document.getElementById("LEL1")) {
        let deactive = document
          .getElementById("LEL1")
          .classList.remove("active");
      }
      if (document.getElementById("LEL2")) {
        let deactive = document
          .getElementById("LEL2")
          .classList.remove("active");
      }
      if (document.getElementById("LEL3")) {
        let deactive = document
          .getElementById("LEL3")
          .classList.remove("active");
      }
      if (document.getElementById("LEL4")) {
        let deactive = document
          .getElementById("LEL4")
          .classList.remove("active");
      }
      if (document.getElementById("LEL5")) {
        let deactive = document
          .getElementById("LEL5")
          .classList.remove("active");
      }

      if (this.active != 4) {
        setTimeout(() => {
          const active2 = document.getElementById("O2").classList.add("active");
        }, 1);
      } else {
        setTimeout(() => {
          const active2 = document
            .getElementById("LEL1")
            .classList.add("active");
        }, 1);
      }
    },
  },
};
</script>

<style scoped>
.col {
  padding: 0px;
}
.row-button {
  margin: 0 20px;
}
.flex-btn {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.active {
  /* background: #64d3e4 !important; */
  background: #31666e !important;
  /* color: white !important; */
}
.active.v-btn__content {
  /* background: #64d3e4 !important; */
  /* background: #31666e !important; */
  color: white !important;
}

.button {
  width: 140px;
}

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .button {
    font-size: 0.7rem;
    width: 64px;
  }
}
/* Iphone XR */
@media (max-width: 376px) {
  .button {
    font-size: 0.6rem;
    width: 64px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .row-button {
    margin: 0 10px;
  }
}
/* MOTO G4/ Galaxy S5 */
@media (max-width: 360px) {
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .button {
    font-size: 0.55rem;
    min-width: 40px !important;
    width: 50px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .row-button {
    margin: 0 0px;
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .button {
    font-size: 0.5rem;
    min-width: 40px !important;
    width: 45px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .row-button {
    margin: 0 0px;
  }
}
</style>
