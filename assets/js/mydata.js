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
    id: "1",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "2",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "3",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "4",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "5",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "6",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "7",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "8",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "9",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "10",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "11",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "shani",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
  {
    id: "12",
    KP_DID: "0x000...001",
    PI: "KRP23D...001",
    name: "홍길동",
    phone_number: "010-1234-5678",
    issue_date: "2021.08.01 12:00:52",
    state: "발급완료",
  },
];

$(document).ready(function () {
  let table = $("#corporate-approval").DataTable({
    lengthMenu: [10, 20, 25, 50],
    data: tableData,
    // //dom: "Blfrtp",
    // dom: '<".top-table"Bl><" .card-table"rt><".div1"p><".searchInput"f>',
    dom: '<".top-table"l><" .card-table"rt><".div1"p><".searchInput"f>',
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
    data: tableData,
    columns: [
      { data: "id", title: "No" },
      { data: "KP_DID", title: "KP_DID" },
      { data: "PI", title: "PI" },
      { data: "name", title: "이름" },
      { data: "phone_number", title: "휴대폰번호" },
      { data: "issue_date", title: "발급일시" },
      { data: "state", title: "상태" },
    ],
  });
  $("#myInputTextField").on("keyup", function () {
    table.search(this.value).draw();
  });
  var info = table.page.info();
  $("#filterbox").html(
    "(" + (info.page + 1) + "건 " + "/ 총" + info.pages + "건.)"
  );
});

// popup form validation before submit

function displaymessage() {
  let message = document.getElementById("message");
  message.innerHTML =
    "폐기된 KP-DID는 복구할 수 없으며 발급받은 인증서도 더 이상 사용이 불가합니다.";
}

function citylab_disposalSubmit() {
  let comment = document.getElementById("citylab_comment").value;
  let checked = document.getElementById("user-checkbox").checked;
  let validation_message = document.getElementById(
    "citylab_validation_message"
  );
  if (comment == "") {
    validation_message.innerHTML = "폐기사유를 입력해 주세요.";
  }
  if (!checked) {
    validation_message.innerHTML = "폐기를 확인하려면 확인란을 선택하십시오.";
  }
}

// Navigation bar breadcrumb deesign

$(".sidebar-menu a").on("click", function () {
  //selecting the syllabus class
  $select = $('<div class="syllabus ml-4"></div>');
  $(this)
    .parents("li")
    .each(function (n, li) {
      //Adding / to each anchor tag of li
      $select.prepend(" ", $(li).children("a").clone());
    });
  // Displaying the heirarchical order of pages.
  $(".display").html(
    $select.prepend(
      '<span><i class="icon-home"></i><a class="ml-2 pl-1 pr-2" href="#syllabus">메인</a></span >'
    )
  );
});
