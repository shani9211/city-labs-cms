$(document).ready(() => {
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });
});

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

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#myModal").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#myModal").removeClass("blur");
  });
});

// Dynamic data with dataTable
// data table code here

const tableData = [
  {
    id: "1",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "2",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "3",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "4",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "5",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "6",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "7",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "8",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "9",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "10",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "11",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "12",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "13",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "14",
    name: "시티랩스",
    certification: "우정서비스",
    username: "사용자명",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
];

const tableData_tab2 = [
  {
    id: "1",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "2",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "3",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "4",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "5",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "6",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "7",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
  {
    id: "8",
    name: "홍길동",
    certification: "우정서비스",
    KP_DID: "0x000...001",
    username: "홍길동",
    issue_date: "2021.08.01 12:00:52",
    reason_for_disposal: "관리자폐기",
    manager: "홍길동",
  },
];
$(document).ready(function () {
  let table = $("#certificate-corporate-user").DataTable({
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
      { data: "name", title: "사업자명" },
      { data: "certification", title: "인증서" },
      { data: "username", title: "사용자명" },
      { data: "KP_DID", title: "KP-DID" },
      { data: "issue_date", title: "발급일시" },

      {
        data: null,
        render: (data, type, row) =>
          `<a href="certificate-corporate-user-details.html">보기</a>`,
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
    "#certificate_corporate_user_disposal_list"
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
      { data: "username", title: "사용자명" },
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
   <h5  style="  border-bottom: 1px solid #D2D2D2;  width: 100%;  margin-top:20px; padding-bottom:10px "> 담당자 </h5>
 <form id="kp_Did_user_profile">
  <div class="form-group row">
    <label
      for="input-10"
      class="col-sm-2 col-form-label no-border"
      >사업자명</label >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-10"
        name="발급기관"
        value="시티랩스"
        disabled
      />
    </div>
    <label
      for="input-11"
      class="col-sm-2 col-form-label no-border"
      >대표자</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-11"
        name="발급일"
        value="홍길동"
        disabled
      />
    </div>
  </div>
  <div class="form-group row">
    <label
      for="input-12"
      class="col-sm-2 col-form-label no-border"
      >사업자등록번호</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-12"
        name="사업자번호"
        value="12345678910"
        disabled
      />
    </div>
    <label
      for="input-13"
      class="col-sm-2 col-form-label no-border"
      >KP-DID발급일시</label >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="상태"
        value="2021.08.14"
        disabled
      />
    </div>
  </div>
 

  <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >KP-DID</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="발급기관 DID"
        disabled
        value="0x000000i2nvi2n2nisdiaf001"
      />
    </div>
  </div>

  <h5  style="  border-bottom: 1px solid #D2D2D2;  width: 100%;  margin-top:40px; padding-bottom:10px "> 인증서 정보
 </h5>
  <div class="form-group row">
    <label
      for="input-12"
      class="col-sm-2 col-form-label no-border"
      >인증서</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-12"
        name="홍길동"
        value="우정서비스"
        disabled
      />
    </div>
    <label
      for="input-13"
      class="col-sm-2 col-form-label no-border"
      >사용자</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="홍길동"
        value="홍길동"
        disabled
      />
    </div>
  </div>
 <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >KP-DID</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="대표이메일"
        value="0x000000i2nvi2n2nisdiaf001"
        disabled
      />
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
        name="홍길동"
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
        name="폐기완료"
        value="폐기완료"
        disabled
      />
    </div>
  </div>
    <div class="form-group row">
    <label
      for="input-12"
      class="col-sm-2 col-form-label no-border"
      >폐기일시</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-12"
        name="2021.07.21 15:00:02"
        value="2021.07.21 15:00:02"
        disabled
      />
    </div>
    <label
      for="input-13"
      class="col-sm-2 col-form-label no-border"
      >폐기사유</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="사용자폐기"
        value="사용자폐기"
        disabled
      />
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
