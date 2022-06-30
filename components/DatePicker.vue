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
    <!-- <span> -->
    <v-card-title>DATE RANGE</v-card-title>
    <!-- </span> -->
    <v-card-subtitle style="text-align: center; padding-top: 1vh"
      >Please select jetty and date/s. You can select range of dates or single
      date. If you want to select just a date, click on the date
      twice.</v-card-subtitle
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
      <vc-date-picker
        v-model="range"
        is-range
        is-dark
        color="blue"
        :timezone="timezone"
      ></vc-date-picker>
    </div>
    <div style="display: flex; width: 100%; justify-content: space-evenly">
      <v-btn
        @click="
          () => {
            range = {
              start: null,
              end: null,
            };
            station = null;
            clear();
          }
        "
        style="width: 200px; margin-top: 20px"
        class="neon2"
        >Reset</v-btn
      >

      <v-btn
        @click="download(station, start, end)"
        style="width: 200px; margin-top: 20px"
        class="neon3"
        >Download</v-btn
      >
    </div>
  </section>
</template>

<script>
import moment from "moment";

import { mapState } from "vuex";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data: () => ({
    station: null,
    isLoading: false,
    fullPage: true,
    today: moment().format("YYYY-MM-DD"),
    availableDates: [],
    disabled: [],
    days: [],
    selectedDate: [],
    date: new Date(),
    timezone: "Asia/Kuala_Lumpur",
    range: {
      start: null,
      end: null,
    },
    start: null,
    end: null,
  }),
  computed: {
    // dates() {
    //   return this.days.map(day => day.date);
    // },
    // attributes() {
    //   return this.dates.map(date => ({
    //     highlight: true,
    //     dates: date
    //   }));
    // }
  },
  computed: {
    ...mapState({
      stations: (state) => state.stations,
    }),
  },
  components: {
    Loading,
  },
  methods: {
    download: function (station, start, end) {
      // this.setLoading1(true);
      console.log(start);
      if (start == null || end == null) {
        alert("Please select valid date/s");
        return;
      }
      if (station == null) {
        alert("Please select jetty");
        return;
      }
      this.isLoading = true;
      this.$axios

        .$get(`http://167.99.75.232:7777/api/download`, {
          // .$get(`http://localhost:5000/api/download`, {
          params: {
            // .$get(`/api/daily/`,{params:{
            station: station,
            start: start,
            end: end,
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
    clear: function () {
      for (let i = 0; i <= 4; i++) {
        // if (i != index) {
        let deactive = document.getElementById(i).classList.remove("active");
        // }
      }
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
      // console.log(this.station);
    },
    getDatesBetweenDates: function (startDate, endDate) {
      let dates = [];
      //to avoid modifying the original date
      const theDate = new Date(startDate);
      // console.log(endDate);
      while (theDate < endDate) {
        dates = [...dates, moment(new Date(theDate)).format("YYYY-MM-DD")];
        theDate.setDate(theDate.getDate() + 1);
      }
      dates = [...dates, moment(endDate).format("YYYY-MM-DD")];
      return dates;
    },
  },
  watch: {
    range: function (val) {
      // console.log(val);
      if (val != null) {
        this.start = moment(this.range.start).format("YYYY-MM-DD");
        this.end = moment(this.range.end).format("YYYY-MM-DD");
        var dateList = this.getDatesBetweenDates(
          this.range.start,
          this.range.end
        );
      }
      // this.reset = false;
      // console.log(dateList);
      // console.log(this.start, this.end);
    },
  },
  async mounted() {
    // this.getScheduleIpah1();
  },
};
</script>
<style scoped>
.active {
  /* background: #64d3e4 !important; */
  background: var(--clr-neon) !important;

  /* background: #e53e3e !important; */
}

.active.theme--dark.v-card > .v-card__subtitle {
  color: #333 !important;
  font-weight: bolder;
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
}

.neon::after {
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
<style>
.vc-container.vc-is-dark {
  /* width: 100%; */
  margin: auto;
}
</style>
