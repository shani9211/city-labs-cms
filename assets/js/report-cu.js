$(document).ready(() => {
  /*Date Init*/
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });
});

// ***********************************Data Table Javascript
const tableData = [
  {
    service: "우체국 우편",
    number_of_users: "2,000",
    term: "2021.08.26",
    average_number_of_times_per_person: "5",
    tottal_number_of_uses: "10000",
  },
  {
    service: "우체국 쇼핑",
    number_of_users: "2,000",
    term: "2021.08.26",
    average_number_of_times_per_person: "5",
    tottal_number_of_uses: "6000",
  },
  {
    service: "모바일 우편함",
    number_of_users: "2,000",
    term: "2021.08.26",
    average_number_of_times_per_person: "15",
    tottal_number_of_uses: "600",
  },
  {
    service: "우체국 보험",
    number_of_users: "2,000",
    term: "2021.08.26",
    average_number_of_times_per_person: "6",
    tottal_number_of_uses: "1000",
  },
  {
    service: "포스트페이",
    number_of_users: "12,000",
    term: "2021.08.26",
    average_number_of_times_per_person: "500",
    tottal_number_of_uses: "15000",
  },
];

$(document).ready(function () {
  let table = $("#individual-user-report").DataTable({
    lengthMenu: [10, 20, 25, 50],
    data: tableData,
    // //dom: "Blfrtp",
    // dom: '<".top-table"Bl><" .card-table"rt><".div1"p><".searchInput"f>',
    dom: '<".top-table"><" .card-table"rt><".div1">',
    columns: [
      { data: "service", title: "서비스" },
      { data: "number_of_users", title: "사용자수" },
      { data: "term", title: "기간" },
      { data: "average_number_of_times_per_person", title: "평균 횟수(1인당)" },
      { data: "tottal_number_of_uses", title: "총 사용횟수" },
    ],
  });
});

//**************************** */ MonthLy Table Chart ****************/

$(document).ready(function () {
  let table = $("#individual-user-report-monthly").DataTable({
    lengthMenu: [10, 20, 25, 50],
    data: tableData,
    // //dom: "Blfrtp",
    // dom: '<".top-table"Bl><" .card-table"rt><".div1"p><".searchInput"f>',
    dom: '<".top-table"><" .card-table"rt><".div1">',
    columns: [
      { data: "service", title: "서비스" },
      { data: "number_of_users", title: "사용자수" },
      { data: "term", title: "기간" },
      { data: "average_number_of_times_per_person", title: "평균 횟수(1인당)" },
      { data: "tottal_number_of_uses", title: "총 사용횟수" },
    ],
  });
});

//************************* */ Yearly Individual User Report *//////////
$(document).ready(function () {
  let table = $("#individual-user-report-yearly").DataTable({
    lengthMenu: [10, 20, 25, 50],
    data: tableData,
    // //dom: "Blfrtp",
    // dom: '<".top-table"Bl><" .card-table"rt><".div1"p><".searchInput"f>',
    dom: '<".top-table"><" .card-table"rt><".div1">',
    columns: [
      { data: "service", title: "서비스" },
      { data: "number_of_users", title: "사용자수" },
      { data: "term", title: "기간" },
      { data: "average_number_of_times_per_person", title: "평균 횟수(1인당)" },
      { data: "tottal_number_of_uses", title: "총 사용횟수" },
    ],
  });
});

//------------------ daily report bar chart

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

var chart = new ApexCharts(
  document.querySelector("#daily_report_barchart"),
  options
);
chart.render();

//------------------------- Monthly report bar chart///

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
var chart = new ApexCharts(
  document.querySelector("#monthly_report_barchart"),
  options
);
chart.render();

//---------------------- Yearly report bar chart////////////////

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
var chart = new ApexCharts(
  document.querySelector("#yearly_report_barchart"),
  options
);
chart.render();

//--------------------- Daily report display on pie chart-----------------------//
var options = {
  series: [44, 55, 13, 43, 22, 34],
  chart: {
    width: 400,
    height: 300,
    type: "pie",
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -10,
      },
    },
  },
  labels: ["우편", "쇼핑", "모바일 우편함", "예금", "보험", "포스트페이"],
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
    colors: ["#909090", "#facdc6", "#d36055", "#ca9690", "#DD695D", "#ca9690"],
  },
  legend: {
    position: "right",
    labels: {
      colors: "#909090",
      useSeriesColors: false,
    },

    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: [
        "#909090",
        "#facdc6",
        "#d36055",
        "#ca9690",
        "#DD695D",
        "#ca9690",
      ],
      radius: 12,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  tooltip: { enabled: false },
};

var chart = new ApexCharts(document.querySelector("#daily_pie_chart"), options);
chart.render();
//--------------------- Monthly report display on pie chart-----------------------//
var options = {
  series: [44, 55, 13, 43, 22, 34],
  chart: {
    width: 400,
    height: 300,
    type: "pie",
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -10,
      },
    },
  },
  labels: ["우편", "쇼핑", "모바일 우편함", "예금", "보험", "포스트페이"],
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
    colors: ["#909090", "#facdc6", "#d36055", "#ca9690", "#DD695D", "#ca9690"],
  },
  legend: {
    position: "right",
    labels: {
      colors: "#909090",
      useSeriesColors: false,
    },

    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: [
        "#909090",
        "#facdc6",
        "#d36055",
        "#ca9690",
        "#DD695D",
        "#ca9690",
      ],
      radius: 12,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  tooltip: { enabled: false },
};

var chart = new ApexCharts(
  document.querySelector("#monthly_pie_chart"),
  options
);
chart.render();
//--------------------- yearly report display on pie chart-----------------------//
var options = {
  series: [44, 55, 13, 43, 22, 34],
  chart: {
    width: 400,
    height: 300,
    type: "pie",
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -10,
      },
    },
  },
  labels: ["우편", "쇼핑", "모바일 우편함", "예금", "보험", "포스트페이"],
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
    colors: ["#909090", "#facdc6", "#d36055", "#ca9690", "#DD695D", "#ca9690"],
  },
  legend: {
    position: "right",
    labels: {
      colors: "#909090",
      useSeriesColors: false,
    },

    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: [
        "#909090",
        "#facdc6",
        "#d36055",
        "#ca9690",
        "#DD695D",
        "#ca9690",
      ],
      radius: 12,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  tooltip: { enabled: false },
};

var chart = new ApexCharts(
  document.querySelector("#yearly_pie_chart"),
  options
);
chart.render();
