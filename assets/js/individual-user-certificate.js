$(document).ready(() => {
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });
});
// data table code here

const tableData = [
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "홍길동",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "shani",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
  {
    conDate: "2021.08.26 12:00:00",
    name: "rai",
    belong: "시티랩스",
    permissionGroup: "슈퍼관리자",
    activities: "로그인",
    accessIP: "168.10.100.0",
  },
];

$(document).ready(function () {
  const table = $("#certificate-issuence-list").DataTable({
    lengthMenu: [10, 20, 50, 75, 100],
    data: tableData,
    //dom: "Blfrtp",
    dom: '<".top-table"Bl><" .card-table"rt><".div1"pi><".searchInput"f>',
    buttons: [
      {
        extend: "excel",
        text: "엑셀 다운로드",
        exportOptions: {
          modifier: {
            page: "current",
          },
        },
      },
    ],
    language: {
      lengthMenu: " _MENU_",
      zeroRecords: "Nothing found - sorry",
      info: "Showing page _PAGE_ of _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
    },
    columns: [
      { data: "conDate", title: "접속일시" },
      { data: "name", title: "이름" },
      { data: "belong", title: "소속" },
      { data: "permissionGroup", title: "권한그룹" },
      { data: "activities", title: "활동내용" },
      { data: "accessIP", title: "접속 IP" },
      {
        data: null,
        render: function () {
          //return (`<a href="">clickhere</>`)
          return `<a href="individual-user-certificate-details.html">관리</a>`;
        },
        title: "action",
      },
    ],
  });
  $("#myInputSearch").on("keyup", function () {
    table.search(this.value).draw();
  });
  var info = table.page.info();
  $("#filterbox").html(
    "(" + (info.page + 1) + "건 " + "/ 총" + info.pages + "건.)"
  );

  // tab second table
  const table2 = $("#certificate-issuence-list-tab2").DataTable({
    lengthMenu: [10, 20, 50, 75, 100],
    data: tableData,
    //dom: "Blfrtp",
    dom: '<".top-table"Bl><" .card-table"rt><".div1"pi><".searchInput"f>',
    buttons: [
      {
        extend: "excel",
        text: "엑셀 다운로드",
        exportOptions: {
          modifier: {
            page: "current",
          },
        },
      },
    ],
    language: {
      lengthMenu: " _MENU_",
      zeroRecords: "Nothing found - sorry",
      info: "Showing page _PAGE_ of _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
    },
    columns: [
      { data: "conDate", title: "접속일시" },
      { data: "name", title: "이름" },
      { data: "belong", title: "소속" },
      { data: "permissionGroup", title: "권한그룹" },
      { data: "activities", title: "활동내용" },
      { data: "accessIP", title: "접속 IP" },
      {
        data: null,
        render: function () {
          //return (`<a href="">clickhere</>`)
          return `<a href="individual-user-certificate-details.html">보기</a>`;
        },
        title: "action",
      },
    ],
  });
  $("#myInputSearch2").on("keyup", function () {
    table2.search(this.value).draw();
  });
  var info = table2.page.info();
  $("#filterbox2").html(
    "(" + (info.page + 1) + "건 " + "/ 총" + info.pages + "건.)"
  );
});
