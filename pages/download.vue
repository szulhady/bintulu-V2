<template>
  <section style="display: flex">
    <div class="left-side">
      <v-card-title style="word-wrap: break-word">
        Please select between two options below.
      </v-card-title>
      <v-card
        style="height: 30vh"
        @click="
          () => {
            first = true;
            second = false;
          }
        "
      >
        <v-btn
          class="neon3"
          style="
            width: 100%;
            height: 5vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
          "
        >
          Date range
        </v-btn>
        <vc-date-picker
          :min-date="new Date()"
          :max-date="new Date()"
          :disabled-dates="{ weekdays: [1, 2, 3, 4, 5, 6, 7] }"
          is-range
          is-dark
          color="blue"
          class="img"
        ></vc-date-picker>
      </v-card>
      <v-card
        style="height: 30vh; margin-top: 5vh"
        @click="
          () => {
            first = false;
            second = true;
          }
        "
      >
        <v-btn
          class="neon3"
          style="
            width: 100%;
            height: 5vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
          "
        >
          <!-- <router-link to="/trends"> View Trends </router-link> -->
          Month
        </v-btn>
        <v-date-picker
          type="month"
          multiple
          :show-current="false"
          readonly
          class="img2"
        ></v-date-picker>
      </v-card>
      <v-btn
        to="/trends"
        class="neon3"
        style="
          width: 100%;
          height: 5vh;
          font-size: 0.7em;
          display: flex;
          justify-content: center;
          text-align: center;
          margin-top: 5vh;
        "
      >
        <!-- <router-link to="/trends"> View Trends </router-link> -->
        back to trends
      </v-btn>
    </div>
    <div class="right-side">
      <!-- <div class="inner"> -->
      <transition name="slide-fade" mode="out-in">
        <DatePicker v-if="first" />
        <MonthPicker v-if="second" />
      </transition>
      <!-- </div> -->
      <!-- <transition name="slide-fade"> -->

      <!-- </transition> -->
    </div>
  </section>
</template>

<script>
import DatePicker from "~/components/DatePicker.vue";
import MonthPicker from "~/components/MonthPicker.vue";
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  data() {
    return {
      first: true,
      second: false,
    };
  },
  components: {
    DatePicker,
    MonthPicker,
  },
};
</script>

<style scoped>
.v-picker__title {
  display: none;
}
.img {
  transform: translateY(-5vh) scale(0.6) !important;
  /* transform: scale(0.6) !important; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.img2 {
  transform: translateY(-10vh) scale(0.45) !important;
  /* transform: scale(0.6) !important; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-fade-enter-active {
  display: flex;
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  display: none;
  opacity: 0;
  /* transition: all 0.1s cubic-bezier(1.0,0.5,0.8,1.0); */
}
.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  transform: translateX(10px);
  opacity: 0;
}
.left-side {
  width: 22vw;
  height: calc(100vh - 100px) !important;
  padding-left: 1vw;
  padding-right: 1vw;
  position: relative;
}

.right-side {
  width: 78vw;
  height: calc(100vh - 100px) !important;
  padding: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card__title {
  word-break: break-word !important;
}
</style>

<style>
.inner {
  padding: 30px;
  border: 5px solid black;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.5s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361' /%3E%3Cstop offset='25%25' stop-color='%23094687' /%3E%3Cstop offset='50%25' stop-color='%231B5DA4' /%3E%3Cstop offset='100%25' stop-color='%230F355D' /%3E%3C/linearGradient%3E %3Cpath d='M0 3 L0 0 L3 0' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 0 L100 0 L100 3 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 97 L0 100 L3 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 100 L100 100 L100 97 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
}
</style>
