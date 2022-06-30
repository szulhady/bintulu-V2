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
  },
  async created() {
    this.$store.dispatch("setToday");
    this.$store.dispatch("setWeather");
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
