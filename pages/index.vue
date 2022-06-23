<template>
  <div style="display: flex">
    <!-- <div
      style="width: 24.1vw; height: height: calc(100vh - 100px) !important"
      class="map-cont"
    >
      <v-card>
        <v-card-subtitle> space </v-card-subtitle>
      </v-card>
    </div> -->
    <div
      style="width: 70vw; height: height: calc(100vh - 100px) !important"
      class="map-cont"
    >
      <div style="display: flex; justify-content: space-between">
        <v-card-subtitle class="compact"> REAL-TIME DATA </v-card-subtitle>
        <div
          id="MyClockDisplay"
          class="clock compact"
          onload="showTime()"
        ></div>
      </div>
      <Maps :a="a" />
    </div>
    <div
      style="width: 28.7vw; height: height: calc(100vh - 100px) !important"
      class="map-cont"
    >
      <!-- <v-card>
        <v-card-subtitle> space </v-card-subtitle>
      </v-card> -->
      <Status />
      <div style="padding-top: 2vh">
        <WeatherMain :weather="forecasts[0].weather[0].main" :data="weather" />
      </div>
      <v-row style="padding-top: 3vh">
        <v-col cols="4">
          <Weather
            :weather="forecasts[1].weather[0].main"
            :temp="forecasts[1].main.temp"
            :description="forecasts[1].weather[0].description"
            :date="forecasts[1].dt_txt"
          />
        </v-col>
        <v-col cols="4">
          <Weather
            :weather="forecasts[2].weather[0].main"
            :temp="forecasts[2].main.temp"
            :description="forecasts[2].weather[0].description"
            :date="forecasts[2].dt_txt"
          />
        </v-col>
        <v-col cols="4">
          <Weather
            :weather="forecasts[3].weather[0].main"
            :temp="forecasts[3].main.temp"
            :description="forecasts[3].weather[0].description"
            :date="forecasts[3].dt_txt"
          />
        </v-col>
        <!-- <v-col cols="6"><Weather /> </v-col> -->
        <!-- <v-col cols="6"><Weather /> </v-col> -->
      </v-row>
      <div style="margin-top: 2vh">
        <Notification />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Notification from "~/components/Notification.vue";
import Maps from "~/components/Maps3.vue";
import Status from "~/components/Status.vue";
import WeatherMain from "~/components/WeatherMain2.vue";
import Weather from "~/components/Weather";

// import moment from "moment";
import moment from "moment-timezone";

export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  data() {
    return {
      time2: "",
      a: 0,
    };
  },
  components: {
    Logo,
    VuetifyLogo,
    Notification,
    Maps,
    Status,
    WeatherMain,
    Weather,
  },
  methods: {
    showTime: function () {
      let gettime = new Date();
      this.time2 = moment(gettime)
        .tz("Asia/Kuala_Lumpur")
        // .format("H:mm:ss")
        .format("ddd, D MMM YYYY, LTS");
      document.getElementById("MyClockDisplay").innerText = this.time2;
      document.getElementById("MyClockDisplay").textContent = this.time2;

      setTimeout(this.showTime, 1000);
    },
  },
  mounted() {
    this.showTime();
    setInterval(() => {
      this.a = Math.random() * 10;
    }, 1000);
  },
  computed: {
    ...mapState({
      forecasts: (state) => state.forecasts,
      weather: (state) => state.weather,
    }),
  },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
.map-cont {
  @include frame-border;
  padding: 10px;
  margin: 10px 0.3vw;
}

.compact {
  padding: 0;
  margin: 0 0 5px 0;
  font-size: 0.9rem;
}

.clock {
  color: white;
  // font-size: 60px;
  font-family: Orbitron;
  letter-spacing: 1px;
}
</style>
