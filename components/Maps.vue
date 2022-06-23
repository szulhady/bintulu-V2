<template>
  <section style="overfloe: hidden">
    <GMap
      ref="gMap"
      language="en"
      :cluster="{ options: { styles: clusterStyle } }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="15.6"
    >
      <!-- :center="{ lat: locations[3].lat, lng: locations[3].lng }" -->
      <!-- :center="{ lat: 3.26405106281144, lng: 113.06933375925954 }" -->
      <!-- :center="center" -->
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{
          icon: location === currentLocation ? pins.selected : pins.notSelected,
        }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow
          :opened="true"
          :options="{
            maxWidth: 220,
            minWidth: 200,
          }"
        >
          <!-- <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code> -->
          <!-- <code>
            {{ location.name }}
          </code> -->
          <v-card-subtitle class="compact">
            {{ location.name }}
          </v-card-subtitle>
          <div
            v-for="(sensor, index) in location.data"
            :key="index"
            style="display: flex; align-items: center; padding-bottom: 5px"
          >
            <div id="circle"></div>
            <v-card-subtitle class="compact">
              {{ sensor.name }} - aa{{ a }}
            </v-card-subtitle>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
      <!-- <GMapCircle :options="circleOptions" /> -->
    </GMap>
  </section>
</template>

<script>
export default {
  data() {
    return {
      iwOpen: true,
      a: 10,
      center: { lat: 5.261191707245304, lng: 113.07866732381167 },
      mapStyle: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#242f3e",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#746855",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#242f3e",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#263c3f",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6b9a76",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#38414e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#212a37",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9ca5b3",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#746855",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#1f2835",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f3d19c",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#2f3948",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#17263c",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#515c6d",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#17263c",
            },
          ],
        },
      ],
      currentLocation: {},
      // circleOptions: {
      //   ...
      // },,,
      locations: [
        {
          name: "petrochemical jetty",
          lat: 3.2592932651185236,
          lng: 113.0752931476544,
          data: [
            {
              name: "02",
              value: "10",
            },
            {
              name: "LEL",
              value: "5",
            },
            {
              name: "VOC",
              value: "3",
            },
          ],
        },
        {
          name: "ammonia whaft jetty",
          lat: 3.2614980671619365,
          lng: 113.06751818919237,
          data: [
            {
              name: "02",
              value: "10",
            },
            {
              name: "LEL",
              value: "5",
            },
            {
              name: "NH3",
              value: "3",
            },
          ],
        },
        {
          name: "OBB jetty",
          lat: 3.258601715715236,
          lng: 113.07704509915513,
          data: [
            {
              name: "02",
              value: "10",
            },
            {
              name: "LEL",
              value: "5",
            },
            {
              name: "VOC",
              value: "3",
            },
          ],
        },
        {
          name: "dg yard",
          lat: 3.2647273706828495,
          lng: 113.07265982264411,
          data: [
            {
              name: "02",
              value: "10",
            },
            {
              name: "LEL",
              value: "5",
            },
            {
              name: "VOC",
              value: "3",
            },
            {
              name: "NH3",
              value: "10",
            },
            {
              name: "CL2",
              value: "5",
            },
            {
              name: "H2S",
              value: "3",
            },
          ],
        },
        {
          name: "lng iso tank yard",
          lat: 3.2660908704052347,
          lng: 113.07120972436627,
          data: [
            {
              name: "LEL 1",
              value: "10",
            },
            {
              name: "LEL 2",
              value: "5",
            },
            {
              name: "LEL 3",
              value: "3",
            },
            {
              name: "LEL 4",
              value: "10",
            },
            {
              name: "LEL 5",
              value: "5",
            },
          ],
        },
      ],
      pins: {
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAAAXNSR0IArs4c6QAAA49JREFUSEullV2IG1UUx8/NZJJMvifJJrubj8nsbC31A7/Quru4UvShWii0iE9i61sfLBRK33wQBJ+Egi9VUKGPvvimWCxK0c0qwpaiothMMtnJxybZZJLZzMbJTGbKjGbZSSZLaO/b3Pu/v/s/555zB8ER4/ulpRABcOywBCG0vcayjWnbkN3CrxRFDzF0GcfRBdyFRwg3bspkWQFloMiyij7VNP3G7WLx/gcAmuXAcWCOpq5hTvgok4o5MYfD1oim6VBptodKT/n8JY6/NBWYY7I35yL+d0JB4qhMHKzt9wdQaYi31vLF06PJg5A36fSHc/HQ+0H/bLARYL8vQ3Wn85lc2H7vFIBqAjeW0wzhdv+Rmic9M1kbEwkdSd4V/n15rVD4zQTmmKUbdJq8hGGTOTPyJYh9GKpDiEX84HBM3qOhYfnde2t57hn0czq9iHswls7MTbjjd1pQb4mgDoemJ+PAWNgPdDI+EUi92YWu0E+iHEU9GwwTW/FYwCLqyyr8mecPYKNFB0Lw1GMUEG6nRd/uSFDdFd40gZGYbysS9lkEzZYIbMW+fgNeAp5YTlr0Yk+Gel1496GAhNsFTx/PTDhst3sXTCDuxbeoRdIikPoy/H6ft730J5dT4PdaU26ELLTEU+heIuGTA0SNysQCCFlvsMA3oCGIFmg06Idj2XnLnK4D8JUW4B3JbxI2afpyOhX6xOX6r2cPD0GUYE/qm1M+jweipH9CoygqlCrCd6ss97oJvJ1MRv0EXqRtXM5S6OVqSxL2BsdfLZcrBzFuZLMXY3HvF2TAZ/8iTCFLkgy1uvDxapG/ZkgsSdtkMl8tJMi3vIRrFmMwUFQoV9o/nGRLryEAfQJoPKghTPsytUCed+LWwh0/QVU1qDU6vKSg59fz+eZofaIxf2SYZQLT7mST0UW7vjU26roO5Vqn1RsoZ19hS7nDh9m+2EZ/B8PefxJzAd94KRlxCZ2eutfdf/GFfOnuuHNboCH6iaHOJUjf1+GQtSWNR3W72r2+znFXDbMzA836ZDLfLM5H3iA8//9TBipUa8JfJ/Pc49NubapDE0hRJ7w+/O7CAuk2vneaXeiJ/dOrHH/roYDGpl+WMtdTyegVl8sJLNf6doUtnDmqpo50aGzcoNPrUTJwB3NisNvoXlzhtm8+GpBh4g59UDd6QNccJ1Y57u9HApph09RVDcFzK4XS26OOmAZ9AKG4X57DroLEAAAAAElFTkSuQmCC",

        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAAAXNSR0IArs4c6QAAA49JREFUSEullV2IG1UUx8/NZJJMvifJJrubj8nsbC31A7/Quru4UvShWii0iE9i61sfLBRK33wQBJ+Egi9VUKGPvvimWCxK0c0qwpaiothMMtnJxybZZJLZzMbJTGbKjGbZSSZLaO/b3Pu/v/s/555zB8ER4/ulpRABcOywBCG0vcayjWnbkN3CrxRFDzF0GcfRBdyFRwg3bspkWQFloMiyij7VNP3G7WLx/gcAmuXAcWCOpq5hTvgok4o5MYfD1oim6VBptodKT/n8JY6/NBWYY7I35yL+d0JB4qhMHKzt9wdQaYi31vLF06PJg5A36fSHc/HQ+0H/bLARYL8vQ3Wn85lc2H7vFIBqAjeW0wzhdv+Rmic9M1kbEwkdSd4V/n15rVD4zQTmmKUbdJq8hGGTOTPyJYh9GKpDiEX84HBM3qOhYfnde2t57hn0czq9iHswls7MTbjjd1pQb4mgDoemJ+PAWNgPdDI+EUi92YWu0E+iHEU9GwwTW/FYwCLqyyr8mecPYKNFB0Lw1GMUEG6nRd/uSFDdFd40gZGYbysS9lkEzZYIbMW+fgNeAp5YTlr0Yk+Gel1496GAhNsFTx/PTDhst3sXTCDuxbeoRdIikPoy/H6ft730J5dT4PdaU26ELLTEU+heIuGTA0SNysQCCFlvsMA3oCGIFmg06Idj2XnLnK4D8JUW4B3JbxI2afpyOhX6xOX6r2cPD0GUYE/qm1M+jweipH9CoygqlCrCd6ss97oJvJ1MRv0EXqRtXM5S6OVqSxL2BsdfLZcrBzFuZLMXY3HvF2TAZ/8iTCFLkgy1uvDxapG/ZkgsSdtkMl8tJMi3vIRrFmMwUFQoV9o/nGRLryEAfQJoPKghTPsytUCed+LWwh0/QVU1qDU6vKSg59fz+eZofaIxf2SYZQLT7mST0UW7vjU26roO5Vqn1RsoZ19hS7nDh9m+2EZ/B8PefxJzAd94KRlxCZ2eutfdf/GFfOnuuHNboCH6iaHOJUjf1+GQtSWNR3W72r2+znFXDbMzA836ZDLfLM5H3iA8//9TBipUa8JfJ/Pc49NubapDE0hRJ7w+/O7CAuk2vneaXeiJ/dOrHH/roYDGpl+WMtdTyegVl8sJLNf6doUtnDmqpo50aGzcoNPrUTJwB3NisNvoXlzhtm8+GpBh4g59UDd6QNccJ1Y57u9HApph09RVDcFzK4XS26OOmAZ9AKG4X57DroLEAAAAAElFTkSuQmCC",
      },
      // mapStyle: [...],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  },
  methods: {
    // setCenter: function (index) {
    //   this.a = index;
    //   this.$refs.gMap.map.setCenter({
    //     lat: this.locations[this.a].lat,
    //     lng: this.locations[this.a].lng,
    //   });
    //   // map.setCenter();
    // },
  },
  async mounted() {
    setTimeout(() => {
      // this.a = Math.random() * 10;
      this.locations[0].data[0].value = this.a;
      // this.$refs.gmap.$mapPromise.then(() => {
      this.$refs.gMap.$children[0].markerLoaded = false;
      // this.$refs.gMap.$children[0].markerLoaded = true;
      console.log(this.$refs.gMap);
      // this.$refs.gMap.initChildren();
      // this.$refs.gMap.$children[0].init();
      // this.$refs.gMap.infoWindow.setContent();
      // });
      // this.$refsgMap.map.initChildren();
    }, 4000);
    // console.log(this.$refs.gMap2[0]);
    // this.$refs.gMap.marker.addListener("mouseover", function () {
    //   infowindow.open(map, this);
    // });
    // this.$refs.gMap.marker.addListener("click", function () {
    //   var content = "asd";
    //   infowindow.setContent(content);
    //   infowindow.open(yourmap, this);
    // });
  },
  // components: { VueSlickCarousel, DetailCards },
  props: ["a"],
};
</script>

<style scoped>
.GMap__Wrapper {
  height: calc(100vh - 100px);
}

.v-btn {
  white-space: normal;
  padding: 10px;
}

.btn-content {
  font-size: 0.6rem !important;
}
</style>

<style lang="scss">
.gm-style iframe + div {
  border: none !important;
}

.gm-style .gm-style-iw-d {
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden !important;
  color: white;
  padding: 0 !important;
  margin: 0;
  text-transform: uppercase;
  .compact {
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
    font-weight: bold;
  }
}
button.gm-ui-hover-effect {
  // background-color: red !important;
  // border-color: blue;
  // color: green;
  // display: none;
}
.gm-style .gm-style-iw-c {
  // background-color: transparent;
  background-color: rgba(0, 0, 0, 0.8);
  // padding: px;
  // filter: blur(1px);
  // -webkit-filter: blur(1px);
}

.gm-style .gm-style-iw-t::after {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      // aqua 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0.3);
  // background-color: aqua;
}
.gmnoprint {
  margin: 0 !important;
  font-size: 0.5rem !important;
  display: none;
}
.gm-style-cc {
  display: none;
}
.gm-style-mtc {
  button {
    font-size: 0.8rem !important;
    height: 30px !important;
  }
}
#circle {
  width: 10px;
  height: 10px;
  background: green;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
