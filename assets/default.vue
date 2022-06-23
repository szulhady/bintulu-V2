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
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
* {
  // font-family: "Montserrat", sans-serif;
  // font-family: "Montserrat", sans-serif;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
}
// Colors
$bg-color: #273136;
$dot-color: hsl(256, 33%, 70%);

// Dimensions
$dot-size: 1px;
$dot-space: 22px;
.v-application {
  @include main-background;
  background: linear-gradient(
        90deg,
        $bg-color ($dot-space - $dot-size),
        transparent 1%
      )
      center,
    linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
    $dot-color;
  background-size: $dot-space $dot-space;
  background-image: url(pattern.png);
}
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
  text-transform: uppercase;
}
</style>
