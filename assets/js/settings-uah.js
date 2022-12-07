$(document).ready(() => {
  /*Date Init*/
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });

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
  ];

  var table = $("#access-history-table").DataTable({
    pageLength: 6,
    searching: false,
    lengthChange: false,
    paging: false,
    info: false,
    dom: "Blfrtip",
    columns: [
      { data: "conDate", title: "접속일시" },
      { data: "name", title: "이름" },
      { data: "belong", title: "소속" },
      { data: "permissionGroup", title: "권한그룹" },
      { data: "activities", title: "활동내용" },
      { data: "accessIP", title: "접속 IP" },
    ],
    data: tableData,
  });
});
