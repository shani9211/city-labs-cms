$(document).ready(() => {
  // drawChart1();
});

var chartElem = document.getElementById("row-1-chart");
var ctx = chartElem.getContext("2d");
// $(chartElem).css("width", $("#row-1-chart").width());
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],
    datasets: [
      {
        label: "개인 DID",
        //data: [10, 20, 4, 18, 7, 5, 10, 2, 3],
        data: [20, 35, 25, 50, 30, 25, 35, 50],
        backgroundColor: "transparent",
        borderColor: "#383838",
        pointRadius: "0",
        borderWidth: 1,
      },
      {
        label: "법인 DID",
        //data: [10, 20, 4, 18, 7, 5, 10, 2, 3],
        data: [0, 45, 7, 60, 10, 50, 20, 35],
        backgroundColor: "transparent",
        borderColor: "#DD695D",
        pointRadius: "0",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "top",
      align: "start",

      labels: {
        fontSize: 16,
        fontColor: "#909090",
        boxWidth: 1,
      },
      tooltips: {
        displayColors: true,
      },
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#585757",
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.07)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#585757",
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.07)",
          },
        },
      ],
    },
  },
});

// graph for week
var chartElemWeek = document.getElementById("row-1-chart-week");
var ctxWeek = chartElemWeek.getContext("2d");
var myChart = new Chart(ctxWeek, {
  type: "line",
  data: {
    labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],
    datasets: [
      {
        label: "개인 DID",
        //data: [10, 20, 4, 18, 7, 5, 10, 2, 3],
        data: [20, 35, 25, 50, 30, 25, 35, 50],
        backgroundColor: "transparent",
        borderColor: "#383838",
        pointRadius: "0",
        borderWidth: 1,
      },
      {
        label: "법인 DID",
        //data: [10, 20, 4, 18, 7, 5, 10, 2, 3],
        data: [0, 45, 7, 60, 10, 50, 20, 35],
        backgroundColor: "transparent",
        borderColor: "#DD695D",
        pointRadius: "0",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "top",
      align: "start",

      labels: {
        fontSize: 16,
        fontColor: "#909090",
        boxWidth: 1,
      },
      tooltips: {
        displayColors: true,
      },
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#585757",
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.07)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#585757",
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.07)",
          },
        },
      ],
    },
  },
});

// graph for Month
var chartElemMonth = document.getElementById("row-1-chart-week");
var ctxMonth = chartElemMonth.getContext("2d");
var myChart = new Chart(ctxMonth, {
  type: "line",
  data: {
    labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],
    datasets: [
      {
        label: "개인 DID",
        //data: [10, 20, 4, 18, 7, 5, 10, 2, 3],
        data: [20, 35, 25, 50, 30, 25, 35, 50],
        backgroundColor: "transparent",
        borderColor: "#383838",
        pointRadius: "0",
        borderWidth: 1,
      },
      {
        label: "법인 DID",
        //data: [10, 20, 4, 18, 7, 5, 10, 2, 3],
        data: [0, 45, 7, 60, 10, 50, 20, 35],
        backgroundColor: "transparent",
        borderColor: "#DD695D",
        pointRadius: "0",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "top",
      align: "start",

      labels: {
        fontSize: 16,
        fontColor: "#909090",
        boxWidth: 1,
      },
      tooltips: {
        displayColors: true,
      },
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#585757",
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.07)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#585757",
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.07)",
          },
        },
      ],
    },
  },
});
