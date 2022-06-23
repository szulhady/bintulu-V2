<template>
  <div class="level">
    <v-card-subtitle class="sidebar rounded-lg mb-3"> Current </v-card-subtitle>
    <div id="single" style="width: 100%; height: 30vh" :data="data"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: ["Current"],
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        xAxis: {
          name: "Time",
          offset: 20,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12,
            color: "#fff",
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom",
            textStyle: {
              color: "#fff",
            },
          },
          type: "category",
          data: this.time,
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12,
            color: "#fff",
          },
          name: this.yAxis,
          type: "value",
          min: 0,
          max: this.max,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12,
            textStyle: {
              color: "#fff",
            },
          },
        },

        series: [
          {
            //min data set
            name: "Current",
            data: this.data,
            type: "line",
            fontSize: 30,
            color: "#36c25b",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById("single"));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },
  updated() {
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: { show: true, title: "Save" },
      //   },
      // },
      legend: {
        data: ["Current"],
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
      },
      xAxis: {
        name: "Time",
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12,
          color: "#fff",
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom",
          textStyle: {
            color: "#fff",
          },
        },
        type: "category",
        data: this.time,
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12,
          color: "#fff",
        },
        name: this.yAxis,
        type: "value",
        min: 0,
        max: this.max,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12,
          textStyle: {
            color: "#fff",
          },
        },
      },

      series: [
        {
          //min data set
          name: "Current",
          data: this.data,
          type: "line",
          fontSize: 30,
          color: "#36c25b",
          areaStyle: { color: "rgba(135, 211, 124, 1)" },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            },
          },
        },
      ],
    };
    var myChart = this.$echarts.init(document.getElementById("single"));
    myChart.setOption(option, true);
    // console.log(this.data)
  },
  props: ["data", "yAxis", "max", "time"],
};
</script>

<style scoped>
.v-card__subtitle {
  font-size: 0.9em;
  padding: 0px 0px 0px 40px;
  color: aliceblue;
}
</style>
