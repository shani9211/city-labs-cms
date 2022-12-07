$(document).ready(() => {
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });
});

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#myModal2").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#myModal2").removeClass("blur");
  });
});

$(document).ready(function () {
  $("#blur-button2").click(function () {
    $("#certificate_discard").addClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#certificate_discard").removeClass("blur");
  });
});

// Dynamic data with dataTable
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

const tableData_tab2 = [
  {
    id: "1",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "2",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "3",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "4",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "5",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "6",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "7",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "8",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "9",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "10",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "11",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "12",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "13",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
];
$(document).ready(function () {
  let table = $("#certificate-individual-user").DataTable({
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
      { data: "id", title: "No" },
      { data: "KP_DID", title: "KP_DID" },
      { data: "PI", title: "PI" },
      { data: "name", title: "이름" },
      { data: "phone_number", title: "휴대폰번호" },
      { data: "issue_date", title: "발급일시" },
      { data: "state", title: "상태" },
      {
        data: null,
        render: (data, type, row) =>
          `<a href="certifcate-individual-user-details.html">보기</a>`,
        title: "수정",
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

//*************************** */ Disposal list   Tab Table*****************//

$(document).ready(function () {
  let disposal_list_table = $(
    "#certificate_individual_user_disposal_list"
  ).DataTable({
    lengthMenu: [10, 20, 25, 50],
    data: tableData_tab2,
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
    columns: [
      { data: "id", title: "No" },
      { data: "name", title: "이름" },
      { data: "certification", title: "인증서" },
      { data: "KP_DID", title: "KP_DID" },
      { data: "issue_date", title: "발급일시" },

      { data: "reason_for_disposal", title: "폐기사유" },

      { data: "manager", title: "처리자" },
      {
        data: null,
        render: (data, type, row) =>
          `<button type="button" class="btn btn-primary btn-width" onclick="myfunc(${data.id})">수정</button>`,
        title: "수정",
      },
    ],
  });
  $("#tab_2_myInputTextField").on("keyup", function () {
    disposal_list_table.search(this.value).draw();
  });
  var info = disposal_list_table.page.info();
  $("#tab_2_filterbox").html(
    "(" + (info.page + 1) + "건 " + "/ 총" + info.pages + "건.)"
  );
});

// render data on popup form

const myfunc = (id) => {
  $("#view_details_kp_did .modal-body").empty().append(`
  <form id="kp_Did_user_profile">
  <div class="form-group row">
    <label
      for="input-10"
      class="col-sm-2 col-form-label no-border"
      >인증서</label >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-10"
        name="발급기관"
        value="우정서비스"
        disabled />
    </div>
    <label
      for="input-11"
      class="col-sm-2 col-form-label no-border"
      >사용자</label >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-11"
        name="홍길동"
        value="홍길동"
        disabled/>
    </div>
  </div>
  <div class="form-group row">
    <label
      for="input-14" class="col-sm-2 col-form-label no-border" >KP-DID</label >
    <div class="col-sm-10">
      <input type="text" class="form-control" id="input-14" name="KP-DID" disabled value="0x000000i2nvi2n2nisdiaf001"/>
    </div>
  </div>
  <div class="form-group row">
    <label
      for="input-12"
      class="col-sm-2 col-form-label no-border"
      >발급일시</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-12"
        name="사업자번호"
        value="2021.07.21 12:55:56"
        disabled
      />
    </div>
    <label
      for="input-13"
      class="col-sm-2 col-form-label no-border"
      >상태</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="상태"
        value="폐기완료"
        disabled
      />
    </div>
  </div>
  <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >폐기일시</label>
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="대표이메일"
        value="2021.07.21 15:00:02"
        disabled />
    </div>
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >폐기사유</label>
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="대표이메일"
        value="사용자폐기"
        disabled />
    </div>
  </div>


</form>
  `);
  $("#view_details_kp_did").modal("show");
};

// popup form validation before submit

function displaymessage() {
  let message = document.getElementById("message");
  message.innerHTML =
    "폐기된 KP-DID는 복구할 수 없으며 발급받은 인증서도 더 이상 사용이 불가합니다.";
}

function disposalSubmit() {
  let comment = document.getElementById("comment").value;
  let checked = document.getElementById("user-checkbox").checked;
  let validation_message = document.getElementById("validation_message");
  if (comment == "") {
    validation_message.innerHTML = "폐기사유를 입력해 주세요.";
  }
  if (!checked) {
    validation_message.innerHTML = "폐기를 확인하려면 확인란을 선택하십시오.";
  }
}

function certificate_discard() {
  let comment = document.getElementById("discard_comment").value;
  // let checked = document.getElementById(
  //   "certificate_discard_confrim_checkbox"
  // ).checked;
  let checked = document.getElementById("user-checkbox").checked;
  let validation_message = document.getElementById(
    "certificate_discard_validation_message"
  );
  if (comment == "") {
    validation_message.innerHTML = "폐기사유를 입력해 주세요.";
  }
  if (!checked) {
    validation_message.innerHTML = "폐기를 확인하려면 확인란을 선택하십시오.";
  }
}
