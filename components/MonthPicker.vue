<template>
  <section
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70vw;
    "
    class="inner"
  >
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <v-card-title>MONTH</v-card-title>
    <v-card-subtitle style="text-align: center; padding-top: 1vh"
      >Please select jetty and month/s.You can select single month or multiple
      months to download data.</v-card-subtitle
    >
    <div style="display: flex; justify-content: center; overlow: hidden">
      <div>
        <div v-for="(station, index) in stations" :key="index" class="flex">
          <v-card
            @click="console(index)"
            class="elevation-5 rounded-lg"
            :id="index"
            style="margin-bottom: 2vh; margin-top: 2vh; margin-right: 2vw"
          >
            <v-card-subtitle class="jetty">
              {{ station.jetty }}
            </v-card-subtitle>
          </v-card>
        </div>
      </div>
      <v-date-picker
        v-model="months"
        type="month"
        multiple
        :show-current="false"
        @click:month="arrange"
      ></v-date-picker>
    </div>
    <div style="display: flex; width: 100%; justify-content: space-evenly">
      <v-btn
        @click="
          () => {
            months = [];
            monthsArray = [];
            station = null;
            clear();
          }
        "
        style="width: 200px; margin-top: 20px"
        class="neon2"
        >Reset</v-btn
      >
      <v-btn
        @click="download(monthsArray, station)"
        style="width: 200px; margin-top: 20px"
        class="neon3"
        >Download</v-btn
      >
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data: () => ({
    months: [],
    monthsArray: [],
    station: null,
    isLoading: false,
    fullPage: true,
  }),
  computed: {
    ...mapState({
      stations: (state) => state.stations,
    }),
  },
  components: {
    Loading,
  },
  methods: {
    download: function (month, station) {
      if (month.length < 1) {
        alert("Please select month");
        return;
      }
      if (station == null) {
        alert("Please select jetty");
        return;
      }
      // this.setLoading1(true);
      this.isLoading = true;
      this.$axios
        .$get(`http://167.99.75.232:7777/api/download/month`, {
          // .$get(`http://localhost:5000/api/download/month`, {
          params: {
            // .$get(`/api/daily/`,{params:{
            station: station,
            month: month,
          },
        })
        .then((response) => {
          console.log(response);
          // res.download(response);
          if (typeof response !== "object") {
            let blob = new Blob([response], { type: "text/csv" });
            let link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "Report.csv";
            link.click();
            this.isLoading = false;
          } else {
            alert(response.msg);
            this.isLoading = false;
          }
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          this.isLoading = false;
        });
    },
    arrange: function () {
      var sorted = this.months.sort(function (date1, date2) {
        return new Date(date1) - new Date(date2);
      });
      this.monthsArray = sorted;
      console.log(this.monthsArray);
    },
    console: function (index) {
      // console.log(index);
      const active = document.getElementById(index).classList.add("active");
      for (let i = 0; i <= 4; i++) {
        if (i != index) {
          let deactive = document.getElementById(i).classList.remove("active");
        }
      }
      let station = [
        "geyser_one",
        "geyser_two",
        "geyser_four",
        "geyser_three",
        "geyser_five",
      ];
      let sensorArray = [];
      this.station = station[index];
      console.log(this.station);
    },
    clear: function () {
      for (let i = 0; i <= 4; i++) {
        // if (i != index) {
        let deactive = document.getElementById(i).classList.remove("active");
        // }
      }
    },
  },
};
</script>

<style scoped>
.active {
  /* background: #64d3e4 !important; */
  background: var(--clr-neon) !important;

  /* background: #e53e3e !important; */
}
.v-card__title {
  text-align: center;
}
.active.theme--dark.v-card > .v-card__subtitle {
  color: #333 !important;
  font-weight: bolder;
}
</style>
<style>
.v-picker {
  border: 0.2px solid rgba(255, 255, 255, 0.244);
  border-radius: 5px;
}
.v-picker__title {
  background: #1a202c !important;
}
.v-date-picker-table {
  background: #1a202c !important;
  padding: 0;
  height: 100%;
}
.v-date-picker-header.theme--dark {
  background: #273042 !important;
}
.v-date-picker-table .v-btn.v-btn--active {
  background: var(--clr-neon) !important;
  color: #333;
  font-weight: bolder;
  /* background: #e53e3e !important; */
  /* margin: 0 10px; */
  width: 80%;
}
.v-picker__title__btn.v-date-picker-title__year {
  display: none;
}

.neon2 {
  /* margin-top: -150px; */
  /* font-size: var(--font-size); */
  display: inline-block;
  position: relative;
  cursor: pointer;
  border: #e53e3e 0.125em solid;

  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.2em #fff7, 0 0 0.3em #e53e3e;
  box-shadow: inset 0 0 0.5em #e53e3e, 0 0 0.5em #e53e3e;
}
.neon2::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 30%;
  background: #e53e3e;
  /* transform: perspective(0.2em) rotateX(10deg) scale(1.3, 0.4); */
  filter: blur(0.5em);
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 100ms linear;
}

.neon2::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e53e3e;
  box-shadow: 0 0 2em #e53e3e;
  z-index: -1;
  opacity: 0;
  transition: opacity 100ms linear;
}
.neon2:hover::after {
  opacity: 1;
}
.neon2:hover,
.neon2:focus {
  color: white;
}
.neon2:hover::before {
  opacity: 0.8;
}
.neon3 {
  /* margin-top: -150px; */
  /* font-size: var(--font-size); */
  display: inline-block;
  position: relative;
  cursor: pointer;
  border: var(--clr-neon) 0.125em solid;

  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.2em #fff7, 0 0 0.3em var(--clr-neon);
  box-shadow: inset 0 0 0.5em var(--clr-neon), 0 0 0.5em var(--clr-neon);
}

.neon3::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 30%;
  background: var(--clr-neon);
  /* transform: perspective(0.2em) rotateX(10deg) scale(1.3, 0.4); */
  filter: blur(0.5em);
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 100ms linear;
}

.neon3::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--clr-neon);
  box-shadow: 0 0 2em var(--clr-neon);
  z-index: -1;
  opacity: 0;
  transition: opacity 100ms linear;
}

.neon3:hover::after {
  opacity: 1;
}
.neon3:hover,
.neon3:focus {
  color: white;
}
.neon3:hover::before {
  opacity: 0.8;
}
</style>
