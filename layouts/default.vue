<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      height="46px"
      class="top-header"
    >
      <!-- color="rgba(64, 86, 107, 1)" -->
      <img src="bpsb2.png" alt="nex-plex-logo" width="30px" />
      <v-toolbar-title v-text="title" class="title-main" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-layout>
        <nuxt />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "MBSA",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "OTHERS",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "bintulu port dashboard",
    };
  },
  methods: {
    ...mapMutations({
      getHourly: "getHourly",
      getDaily: "getDaily",
      getMonthly: "getMonthly",
    }),
    getDataHourly: function (station, sensorVal, indexStation, indexSensor) {
      this.$axios
        .$get(`https://bintuluport-backend.herokuapp.com/api/hourly`, {
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
          let hour = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            hour.push(item.hour);
          });
          data = { station, indexStation, indexSensor, min, max, avg, hour };
          // console.log(data)
          this.getHourly(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataDaily: function (station, sensorVal, indexStation, indexSensor) {
      this.$axios
        .$get(`https://bintuluport-backend.herokuapp.com/api/daily`, {
          // .$get(`/api/daily`, {
          params: {
            // .$get("/api/weekly/",{params:{
            position: station,
            val: sensorVal,
          },
        })
        .then((response) => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let day = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            day.push(item.day);
          });
          data = { station, indexStation, indexSensor, min, max, avg, day };
          this.getDaily(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataMonthly: function (station, sensorVal, indexStation, indexSensor) {
      this.$axios
        .$get(`https://bintuluport-backend.herokuapp.com/api/monthly`, {
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
          let month = [];
          let monthName = [];

          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            monthName.push(item.monthname);
          });
          data = {
            station,
            indexStation,
            indexSensor,
            min,
            max,
            avg,
            monthName,
          };
          this.getMonthly(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    // Petrochemical Jetty
    // const sensorPetrochemicalJetty = ["O2", "LEL", "VOC"];
    // for (let j = 0; j < sensorPetrochemicalJetty.length; j++) {
    //   this.getDataHourly("geyser_one", sensorPetrochemicalJetty[j], 0, j);
    //   this.getDataDaily("geyser_one", sensorPetrochemicalJetty[j], 0, j);
    //   this.getDataMonthly("geyser_one", sensorPetrochemicalJetty[j], 0, j);
    // }

    // const sensorWhaftJetty = ["O2", "LEL", "DG"];
    // for (let j = 0; j < sensorWhaftJetty.length; j++) {
    //   this.getDataHourly("geyser_two", sensorWhaftJetty[j], 1, j);
    //   this.getDataDaily("geyser_two", sensorWhaftJetty[j], 1, j);
    //   this.getDataMonthly("geyser_two", sensorWhaftJetty[j], 1, j);
    // }

    // const sensorMP10Jetty = ["O2", "LEL", "VOC"];
    // for (let j = 0; j < sensorMP10Jetty.length; j++) {
    //   this.getDataHourly("geyser_four", sensorMP10Jetty[j], 2, j);
    //   this.getDataDaily("geyser_four", sensorMP10Jetty[j], 2, j);
    //   this.getDataMonthly("geyser_four", sensorMP10Jetty[j], 2, j);
    // }

    // const sensorDGYard = ["O2", "LEL", "VOC", "DG", "CL2", "H2S"];
    // for (let j = 0; j < sensorDGYard.length; j++) {
    //   this.getDataHourly("geyser_three", sensorDGYard[j], 3, j);
    //   this.getDataDaily("geyser_three", sensorDGYard[j], 3, j);
    //   this.getDataMonthly("geyser_three", sensorDGYard[j], 3, j);
    // }

    // const sensorLNG = ["LEL1", "LEL2", "LEL3", "LEL4", "LEL5"];
    // for (let j = 0; j < sensorDGYard.length; j++) {
    //   this.getDataHourly("geyser_three", sensorDGYard[j], 3, j);
    //   this.getDataDaily("geyser_three", sensorDGYard[j], 3, j);
    //   this.getDataMonthly("geyser_three", sensorDGYard[j], 3, j);
    // }
    this.$store.dispatch("setForecasts");
  },
};
</script>

<style lang="scss">
.top-header {
  @include header-background;
}

html {
  overflow-y: hidden;
}
.card2 {
  @include frame-border;
  width: 200px;
  height: 200px;
}
</style>
<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
* {
  // font-family: "Montserrat", sans-serif;
  // font-family: "Montserrat", sans-serif;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
}
.v-application::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  background-image: url(~/assets/pattern.png);
  background-size: 4.6875rem;
  background-repeat: repeat;
  background-attachment: initial;
}
.v-application {
  @include main-background;
  z-index: 2;
}
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
  text-transform: uppercase;
}
.v-main__wrap::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -5;
  background: linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);
}
.v-main__wrap::after {
  content: "";
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  z-index: -10;
  background-color: #273136;
  background-image: linear-gradient(
    180deg,
    rgba(50, 70, 80, 0.9) 0,
    #0d101b 100%
  );
  background-image: url("/cover3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: initial;
  height: 100%;
  transition: background 0.2s linear;
  background-size: cover;
}
</style>
