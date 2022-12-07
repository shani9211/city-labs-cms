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
    app_date: "2021.08.26 12:00:00",
    businnes_name: "시티랩스",
    company_reg: "110-123456-01",
    division: "대표자",
    applicant: "홍길동",
    maneger: "관리자1",
    processes_date: "2021.08.01 12:00:52",
    state: "신청",
  },
  {
    id: "2",
    app_date: "2021.08.26 12:00:00",
    businnes_name: "시티랩스",
    company_reg: "110-123456-01",
    division: "대표자",
    applicant: "홍길동",
    maneger: "관리자1",
    processes_date: "2021.08.01 12:00:52",
    state: "신청",
  },
  {
    id: "3",
    app_date: "2021.08.26 12:00:00",
    businnes_name: "시티랩스",
    company_reg: "110-123456-01",
    division: "대표자",
    applicant: "홍길동",
    maneger: "관리자1",
    processes_date: "2021.08.01 12:00:52",
    state: "신청",
  },
  {
    id: "4",
    app_date: "2021.08.26 12:00:00",
    businnes_name: "시티랩스",
    company_reg: "110-123456-01",
    division: "대표자",
    applicant: "홍길동",
    maneger: "관리자1",
    processes_date: "2021.08.01 12:00:52",
    state: "신청",
  },
  {
    id: "5",
    app_date: "2021.08.26 12:00:00",
    businnes_name: "시티랩스",
    company_reg: "110-123456-01",
    division: "대표자",
    applicant: "홍길동",
    maneger: "관리자1",
    processes_date: "2021.08.01 12:00:52",
    state: "신청",
  },
];

$(document).ready(function () {
  let table = $("#corporate-approval").DataTable({
    lengthMenu: [10, 20, 25, 50],
    data: tableData,
    //dom: "Blfrtp",
    dom: '<".top-table"Bl><" .card-table"rt><".div1"p><".searchInput"f>',
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
      { data: "app_date", title: "신청일시" },
      { data: "businnes_name", title: "사업자명" },
      { data: "company_reg", title: "사업자등록번호" },
      { data: "division", title: "구분" },
      { data: "applicant", title: "신청자" },
      { data: "maneger", title: "처리자" },
      { data: "processes_date", title: "처리일시" },
      { data: "state", title: "상태" },
      {
        data: null,
        render: (data, type, row) =>
          `<a href="corporate-approval-details.html">보기</a>`,
        title: "상세",
      },
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

//***************************** Popup Background Color*/
$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#faq-registration-popup").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#faq-registration-popup").removeClass("blur");
  });
  $("#blur-button2").click(function () {
    $("#cnf-popup-1").addClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#faq-registration-popup").removeClass("blur");
  });
});
