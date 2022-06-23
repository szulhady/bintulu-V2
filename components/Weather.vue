<template>
  <v-card
    class="elevation-10 weather-card rounded-lg"
    style="
      width: 150px;
      height: 17vh;
      overflow: hidden;

      display: flex;
      justify-content: center;
    "
  >
    <v-card-subtitle
      style="padding-top: 0px !important; text-align: center; font-size: 0.8em"
    >
      <!-- {{ date }} -->
      {{ date.slice(0, -9) }}
      <!-- 1 Jun 1994 -->
    </v-card-subtitle>
    <div v-if="weather === 'Clear'" class="icon sunny">
      <div class="sun">
        <div class="rays"></div>
      </div>
    </div>
    <!-- <div v-if="weather === 'shower rain'" class="icon sun-shower">
      <div class="cloud"></div>
      <div class="sun">
        <div class="rays"></div>
      </div>
      <div class="rain"></div>
    </div> -->
    <div v-if="weather === 'Thunderstorm'" class="icon thunder-storm">
      <div class="cloud"></div>
      <div class="lightning">
        <div class="bolt"></div>
        <div class="bolt"></div>
      </div>
    </div>
    <div v-if="weather === 'Clouds'" class="icon cloudy">
      <div class="cloud"></div>
      <div class="cloud"></div>
    </div>
    <div v-if="weather === 'Rain'" class="icon rainy">
      <div class="cloud"></div>
      <div class="rain"></div>
    </div>

    <!-- <v-card-subtitle> 31 °C </v-card-subtitle> -->
    <v-card-subtitle
      style="text-align: center; font-size: 0.8em; padding-bottom: 0"
    >
      {{ temp }} °C
    </v-card-subtitle>
    <!-- <v-card-subtitle style="text-align: center">
      adasdasdas clouds
    </v-card-subtitle> -->
    <v-card-subtitle style="text-align: center; font-size: 0.8em">
      {{ description }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["day", "weather", "temp", "description", "date"],
};
</script>

<style scoped>
.col .col-4 {
  padding: 0px !important;
}
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 300px; */
  /* height: 320px; */
  /* background: #271f40 !important; */
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #eeeeee;
  color: white !important;
  /* border: 4px solid rgb(125, 176, 216); */
  /* background: inherit; */
}
.v-card__subtitle {
  padding: 4px;
  color: white !important;
}

.icon {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  font-size: 1em; /* control icon size here */
  transform: scale(0.35);
}

.cloud {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em #fff, -2.1875em 0.6875em 0 -0.3125em #fff,
    2.0625em 0.9375em 0 -0.5625em #fff;
}
.cloud:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em #fff;
}
.cloud:nth-child(2) {
  z-index: 0;
  background: #fff;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff, 0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff, 2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  transform: scale(0.5) translate(6em, -3em);
  animation: cloud 4s linear infinite;
}
.cloud:nth-child(2):after {
  background: #fff;
}

.sun {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5em;
  height: 2.5em;
  margin: -1.25em;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em transparent;
  animation: spin 15s infinite linear;
}
.rays {
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  /* background: #fff; */
  background: white;
  border-radius: 0.25em;
  box-shadow: 0 5.375em white;
}
.rays:before,
.rays:after {
  content: "";
  position: absolute;
  top: 0em;
  left: 0em;
  display: block;
  width: 0.375em;
  height: 1.125em;
  transform: rotate(60deg);
  transform-origin: 50% 3.25em;
  background: white;
  border-radius: 0.25em;
  box-shadow: 0 5.375em white;
}
.rays:before {
  transform: rotate(120deg);
}
.cloud + .sun {
  margin: -2em 1em;
}

.rain,
.lightning,
.snow {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
}

.rain:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #0cf;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
    -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
    -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  transform: rotate(-28deg);
  animation: rain 3s linear infinite;
}

.bolt {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: #fff;
  opacity: 0.3;
  animation: lightning 2s linear infinite;
}
.bolt:nth-child(2) {
  width: 0.5em;
  height: 0.25em;
  margin: -1.75em 0 0 -1.875em;
  transform: translate(2.5em, 2.25em);
  opacity: 0.2;
  animation: lightning 1.5s linear infinite;
}
.bolt:before,
.bolt:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: -1.625em 0 0 -1.0125em;
  border-top: 1.25em solid transparent;
  border-right: 0.75em solid;
  border-bottom: 0.75em solid;
  border-left: 0.5em solid transparent;
  transform: skewX(-10deg);
}
.bolt:after {
  margin: -0.25em 0 0 -0.25em;
  border-top: 0.75em solid;
  border-right: 0.5em solid transparent;
  border-bottom: 1.25em solid transparent;
  border-left: 0.75em solid;
  transform: skewX(-10deg);
}
.bolt:nth-child(2):before {
  margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
}
.bolt:nth-child(2):after {
  margin: -0.125em 0 0 -0.125em;
  border-top: 0.375em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0.625em solid transparent;
  border-left: 0.375em solid;
}

.flake:before,
.flake:after {
  content: "\2744";
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.025em 0 0 -1.0125em;
  color: #fff;
  list-height: 1em;
  opacity: 0.2;
  animation: spin 8s linear infinite reverse;
}
.flake:after {
  margin: 0.125em 0 0 -1em;
  font-size: 1.5em;
  opacity: 0.4;
  animation: spin 14s linear infinite;
}
.flake:nth-child(2):before {
  margin: -0.5em 0 0 0.25em;
  font-size: 1.25em;
  opacity: 0.2;
  animation: spin 10s linear infinite;
}
.flake:nth-child(2):after {
  margin: 0.375em 0 0 0.125em;
  font-size: 2em;
  opacity: 0.4;
  animation: spin 16s linear infinite reverse;
}

/* Animations */

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes cloud {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
}

@keyframes rain {
  0% {
    background: #0cf;
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 #0cf;
  }
}

@keyframes lightning {
  45% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
  50% {
    color: #0cf;
    background: #0cf;
    opacity: 1;
  }
  55% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
}

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .v-card__subtitle {
    font-size: 0.8rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.35);
  }
}
/* Iphone XR */
@media (max-width: 376px) {
  .v-card__subtitle {
    font-size: 0.75rem;
    padding: 2px;
  }
}
/* MOTO G4/ Galaxy S5 */
@media (max-width: 360px) {
  .v-card__subtitle {
    font-size: 0.7rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.3);
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .v-card__subtitle {
    font-size: 0.65rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.3);
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .v-card__subtitle {
    font-size: 0.6rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.25);
  }
}
</style>
