<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="status"
      :items-per-page="5"
      hide-default-footer
      class="table-font elevation-10"
    ></v-data-table>
    <!-- <hr /> -->
    <!-- <Duration :duration="duration" /> -->
  </div>
</template>

<script>
// import Duration from "~/components/Duration";
import { mapState, mapMutations } from "vuex";
import { status } from "~/src/class";
export default {
  data() {
    return {
      // headers: [
      //   {
      //     text: "Jetty",
      //     align: "start",
      //     sortable: false,
      //     value: "name",
      //   },
      //   { text: "Status", value: "calories" },
      // ],
      // items: [
      //   {
      //     name: "Petrochemical Jetty",
      //     calories: "sdfsdfsdfsdfvdsf fkdsmfksod ",
      //   },
      //   {
      //     name: "Ammonia Wharf Jetty",
      //     calories: "sdfsdfsdfsdfvdsf fkdsmfksod ",
      //   },
      //   {
      //     name: "MP10 Jetty",
      //     calories: "sdfsdfsdfsdfvdsf fkdsmfksod ",
      //   },
      //   {
      //     name: "DG Yard",
      //     calories: "sdfsdfsdfsdfvdsf fkdsmfksod ",
      //   },
      //   {
      //     name: "LNG ISO Tank Yard",
      //     calories: "sdfsdfsdfsdfvdsf fkdsmfksod ",
      //   },
      //   {
      //     name: "Jelly bean",
      //     calories: 375,
      //   },
      //   {
      //     name: "Lollipop",
      //     calories: 392,
      //   },
      //   {
      //     name: "Honeycomb",
      //     calories: 408,
      //   },
      //   {
      //     name: "Donut",
      //     calories: 452,
      //   },
      //   {
      //     name: "KitKat",
      //     calories: 518,
      //   },
      // ],
    };
  },
  components: {
    // Duration,
  },

  computed: {
    ...mapState({
      headers: (state) => state.headers,
      status: (state) => state.status,
    }),
  },
  // props: ["headers", "status"],
  mounted() {
    console.log(this.status);
    this.setStatus([
      new status("Petrochemical Jetty", "Good"),
      new status("Ammonia Wharf Jetty", "Good"),
      new status("OBB Jetty", "Good"),
      new status("DG Yard", "Good"),
      new status("LNG ISO Tank Yard", "Good"),
    ]);
  },
  methods: {
    ...mapMutations({
      setStatus: "setStatus",
    }),
  },
};
</script>

<style>
hr {
  margin: 0 20px;
}

/* Table */
.v-data-table.table-font.theme--dark {
  background-color: transparent !important;
  border-radius: 10px;
  overflow: hidden;
}
tr {
  /* background-color: rgb(162, 216, 224); */
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0px !important;
  font-size: 0.5em;
  height: 5vh;
}

tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.4);
  /* background-color: red; */
  /* background-color: rgb(255, 255, 255); */
  padding: 0px !important;
  color: #eee;
  height: 5vh;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 1.5em;
  height: 5.3vh;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 1.5em;
  height: 5.3vh;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.3);
  /* background-color: rgb(230, 242, 244); */
  padding: 0px !important;
  color: #eee;
  height: 5vh !important;
}
.v-data-table__wrapper {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
/* End of table */

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .v-data-table__mobile-row__header {
    font-size: 0.8rem;
  }
  .v-data-table__mobile-row__cell {
    font-size: 0.8rem;
  }
  th {
    background-color: rgb(255, 255, 255);
  }
  .v-data-table__mobile-row:nth-of-type(odd) {
    background-color: rgb(230, 242, 244);
  }
}
/* MOTO G4/ Galaxy S5*/
@media (max-width: 360px) {
  .v-data-table__mobile-row__header {
    font-size: 0.8rem;
  }
  .v-data-table__mobile-row__cell {
    font-size: 0.8rem;
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .v-data-table__mobile-row__header {
    font-size: 0.7rem;
  }
  .v-data-table__mobile-row__cell {
    font-size: 0.7rem;
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .v-data-table__mobile-row__header {
    font-size: 0.65rem;
  }
  .v-data-table__mobile-row__cell {
    font-size: 0.65rem;
  }
}
</style>
