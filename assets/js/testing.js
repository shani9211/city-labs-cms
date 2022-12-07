var options = {
  series: [
    {
      data: [3000, 2000, 1200, 1800, 2500, 2500],
    },
  ],
  chart: {
    type: "bar",
    toolbar: false,
    height: 300,
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      horizontal: true,
      barHeight: "40%",

      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    offsetX: 30,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  grid: {
    row: {
      colors: ["#EAEAEA"],
    },
  },
  xaxis: {
    categories: ["우편", "쇼핑", "모바일 우편함", "예금", "보험", "포스트페이"],
  },
  fill: {
    colors: "#DD695D",
    opacity: 0.9,
    type: "solid",
  },
};

var chart = new ApexCharts(document.querySelector("#barchart"), options);
chart.render();

// var options = {
//   series: [
//     {
//       data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     stacked: true,
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 50,
//       horizontal: false,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: true,
//     style: {
//       fontSize: "12px",
//       fontWeight: "bold",
//     },
//     offsetX: 30,
//     style: {
//       fontSize: "12px",
//       colors: ["#304758"],
//     },
//   },

//   grid: {
//     row: {
//       colors: ["#F44336", "#E91E63", "#9C27B0"],
//     },
//     // column: {
//     //   colors: ["#F44336", "#E91E63", "#9C27B0"],
//     // },
//   },
//   xaxis: {
//     categories: [
//       "South Korea",
//       "Canada",
//       "United Kingdom",
//       "Netherlands",
//       "Italy",
//       "France",
//       "Japan",
//       "United States",
//       "China",
//       "Germany",
//     ],
//   },
// };

var options = {
  series: [
    {
      data: [3000, 2000, 1200, 1800, 2500, 2500],
    },
  ],
  chart: {
    type: "bar",
    toolbar: false,
    height: 300,
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      horizontal: true,
      barHeight: "40%",

      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    offsetX: 30,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  grid: {
    row: {
      colors: ["#EAEAEA"],
    },
  },
  xaxis: {
    categories: ["우편", "쇼핑", "모바일 우편함", "예금", "보험", "포스트페이"],
  },
  fill: {
    colors: "#DD695D",
    opacity: 0.9,
    type: "solid",
  },
};
var chart = new ApexCharts(document.querySelector("#barchart1"), options);
chart.render();

//////////////////// PIE CHART

var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#daily_pie_chart"), options);
chart.render();

var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: "pie",
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -10,
      },
    },
  },

  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  fill: {
    colors: ["#909090", "#facdc6", "#d36055", "#ca9690", "#DD695D"],
  },
};

var chart = new ApexCharts(
  document.querySelector("#monthly_pie_chart"),
  options
);
chart.render();
