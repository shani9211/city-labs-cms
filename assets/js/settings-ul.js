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
      name: "홍길동",
      phone: "01012345678",
      email: "east@post.co.kr",
      belong: "시티랩스",
      permissionGroup: "슈퍼관리자",
      active: true,
    },
    {
      name: "홍길동",
      phone: "01012345678",
      email: "east@post.co.kr",
      belong: "시티랩스",
      permissionGroup: "슈퍼관리자",
      active: true,
    },
    {
      name: "홍길동",
      phone: "01012345678",
      email: "east@post.co.kr",
      belong: "시티랩스",
      permissionGroup: "슈퍼관리자",
      active: true,
    },
    {
      name: "홍길동",
      phone: "01012345678",
      email: "east@post.co.kr",
      belong: "시티랩스",
      permissionGroup: "슈퍼관리자",
      active: true,
    },
    {
      name: "홍길동",
      phone: "01012345678",
      email: "east@post.co.kr",
      belong: "시티랩스",
      permissionGroup: "슈퍼관리자",
      active: true,
    },
  ];

  var table = $("#users-list-table").DataTable({
    pageLength: 6,
    searching: false,
    lengthChange: false,
    paging: false,
    info: false,
    dom: "Blfrtip",
    columns: [
      { data: "name", title: "이름" },
      { data: "email", title: "이메일" },
      { data: "phone", title: "휴대폰번호" },
      { data: "belong", title: "소속" },
      { data: "permissionGroup", title: "권한그룹" },
      {
        data: null,
        render: (data, type, row, meta) => `   
                <div class="custom-control custom-switch">
                  <input type="checkbox" onchange="mySwitcher(this, '${data.email}')" class="custom-control-input" id="customSwitches-${meta.row}">
                  <label class="custom-control-label" for="customSwitches-${meta.row}"></label>
                </div>
            `,
        title: "활성화 상태",
      },
      {
        data: null,
        render: (data, type, row) => `
                <button type="button" class="btn btn-primary btn-width" onclick="edit('${data.email}')">수정</button>
            `,
        title: "관리",
      },
    ],
    data: tableData,
  });
});

let edit = (id) => {
  $("#edit-popup").modal("show");
};

let mySwitcher = (element, email) => {
  alert(
    email + " will be " + ($(element).is(":checked") ? "" : "DE") + "ACTIVATED"
  );
};
