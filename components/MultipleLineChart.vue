<template>
  <div class="level">
    <v-card-subtitle class="sidebar rounded-lg mb-3">
      {{ title }}
    </v-card-subtitle>
    <div
      :id="id"
      style="width: 100%; height: 30vh"
      :data="data"
      :xAxis="xAxis"
      :min="min"
      :max="max"
      :avg="avg"
      :time="time"
      :max2="max2"
    ></div>
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
          data: ["Min", "Max", "Avg"],
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        xAxis: {
          name: this.xAxis,
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
          name: "%",
          type: "value",
          min: 0,
          max: this.max2,
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
            name: "Min",
            data: this.min,
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
          {
            //max data set
            name: "Max",
            data: this.max,
            type: "line",
            fontSize: 30,
            color: "#f52525",
            areaStyle: { color: "rgba(246, 36, 89, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
          },
          {
            //average data set
            name: "Avg",
            data: this.avg,
            type: "line",
            fontSize: 30,
            color: "#1930fc",
            areaStyle: { color: "rgba(137, 196, 244, 0.5)" },
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
      var myChart = this.$echarts.init(document.getElementById(this.id));
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
        data: ["Min", "Max", "Avg"],
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
      },
      xAxis: {
        name: this.xAxis,
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
        name: "%",
        type: "value",
        min: 0,
        max: this.max2,
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
          name: "Min",
          data: this.min,
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
        {
          //max data set
          name: "Max",
          data: this.max,
          type: "line",
          fontSize: 30,
          color: "#f52525",
          areaStyle: { color: "rgba(246, 36, 89, 0.2)" },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            },
          },
        },
        {
          //average data set
          name: "Avg",
          data: this.avg,
          type: "line",
          fontSize: 30,
          color: "#1930fc",
          areaStyle: { color: "rgba(137, 196, 244, 0.5)" },
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
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true);
    // console.log(this.data)
  },
  props: ["data", "id", "title", "xAxis", "max2", "min", "max", "avg", "time"],
};
</script>

<style scoped>
.v-card__subtitle {
  font-size: 0.9em;
  padding: 0px 0px 0px 40px;
  color: aliceblue;
}
</style>
