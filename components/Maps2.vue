<template>
  <div id="map" ref="map"></div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = new window.google.maps.Map(this.$refs["maps"], {
      center: { lat: -25.344, lng: 131.036 },
      zoom: 4,
    });
  },
};
</script>

<style>
#map {
  height: 600px;
  background: gray;
}
</style>
