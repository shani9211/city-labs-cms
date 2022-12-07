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

// Dynamic data with dataTable
// data table code here

const tableData = [
  {
    id: "1",
    issuer: "발급기관",
    issuer_DID: "발급기관 DID",
    issue_date: "2021.08.01 12:00:52",
    state: "상태",
  },
  {
    id: "2",
    issuer: "발급기관",
    issuer_DID: "발급기관 DID",
    issue_date: "2021.08.01 12:00:52",
    state: "상태",
  },
  {
    id: "3",
    issuer: "발급기관",
    issuer_DID: "발급기관 DID",
    issue_date: "2021.08.01 12:00:52",
    state: "상태",
  },
  {
    id: "4",
    issuer: "발급기관",
    issuer_DID: "발급기관 DID",
    issue_date: "2021.08.01 12:00:52",
    state: "상태",
  },

  {
    id: "5",
    issuer: "발급기관",
    issuer_DID: "발급기관 DID",
    issue_date: "2021.08.01 12:00:52",
    state: "상태",
  },
];

$(document).ready(function () {
  let table = $("#issuing-institution-user").DataTable({
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
      { data: "issuer", title: "발급기관" },
      { data: "issuer_DID", title: "발급기관 DID" },
      { data: "issue_date", title: "발급일시" },
      { data: "state", title: "상태" },

      {
        data: null,
        render: (data, type, row) =>
          `<button type="button" class="btn btn-primary btn-width" onclick="myfunc(${data.id})">수정</button>`,
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

//***************************** */ issuing list shows on click********************//
const myfunc = (id) => {
  $("#view_details_kp_did .modal-body").empty().append(`
   <h5  style="  border-bottom: 1px solid #D2D2D2;  width: 100%;  margin-top:20px; padding-bottom:10px "> 기본정보 </h5>
 <form id="issuer_user_profile">
  <div class="form-group row">
    <label
      for="input-10"
      class="col-sm-2 col-form-label no-border"
      >발급기관</label >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-10"
        name="시티랩스"
        value="시티랩스"
        disabled
      />
    </div>
    <label
      for="input-11"
      class="col-sm-2 col-form-label no-border"
      >발급일</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-11"
        name="발급일"
        value="2021.08.30 12:00:00"
        disabled
      />
    </div>
  </div>
  <div class="form-group row">
    <label
      for="input-12"
      class="col-sm-2 col-form-label no-border"
      >사업자번호</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-12"
        name="사업자번호"
        value="11012345601"
        disabled
      />
    </div>
    <label
      for="input-13"
      class="col-sm-2 col-form-label no-border"
      >상태</label >
    <div class="col-sm-2">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="상태"
        value="발급완료"
        disabled
      />
    </div>
    <div class="col-sm-2 text-right">
      <button type="button" class="btn btn-primary " onclick="issuerDisposal()">폐기</button>
    </div>
  </div>
 

  <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >대표 이메일</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="발급기관 DID"
        disabled
        value="east@post.co.kr"
      />
    </div>
  </div>
   <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >발급기관 DID</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="발급기관 DID"
        disabled
        value="did:post:a09vnq3498th8hvnpw984tyh0a8wshdv"
      />
    </div>
  </div>

  <h5  style="  border-bottom: 1px solid #D2D2D2;  width: 100%;  margin-top:40px; padding-bottom:10px "> 인증서 정보
 </h5>
  <div class="form-group row">
    <label
      for="input-12"
      class="col-sm-2 col-form-label no-border"
      >담당자명</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-12"
        name="홍길동"
        value="홍길동"
        disabled
      />
    </div>
    <label
      for="input-13"
      class="col-sm-2 col-form-label no-border"
      >담당자 연락처</label
    >
    <div class="col-sm-4">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="홍길동"
        value="01012345678"
        disabled
      />
    </div>
  </div>
 <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >담당자 이메일</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="대표이메일"
        value="east@post.co.kr"
        disabled
      />
    </div>
  </div>
   <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >정보 최종수정일</label>
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="대표이메일"
        value="2021.08.30 12:00:00"
        disabled
      />
    </div>
  </div>
    
</form>
  `);
  $("#view_details_kp_did").modal("show");
};

const issuerDisposal = () => {
  $(document).ready(function () {
    $("#view_details_kp_did").modal("hide");
    $("#issuer_disposal").modal("show");
  });
};

//*************************** */ Disposal list   Tab Table*****************//

const tableData_tab2 = [
  {
    id: "1",
    issuer: "발급기관",
    issuer_DID: "발급기관 DID",
    issue_date: "2021.08.01 12:00:52",
    state: "상태",
  },
];

$(document).ready(function () {
  const disposal_list_table = $("#issueing_user_disposal_list").DataTable({
    data: tableData_tab2,
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
      { data: "issuer", title: "발급기관" },
      { data: "issuer_DID", title: "발급기관 DID" },
      { data: "issue_date", title: "발급일시" },
      { data: "state", title: "상태" },
      {
        data: null,
        render: (data, type, row) =>
          `<button type="button" class="btn btn-primary btn-width" onclick="myfunc(${data.id})">수정</button>`,
        title: "수정",
      },
    ],
  });
});

// render data on popup form

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

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#issuer_disposal").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#issuer_disposal").removeClass("blur");
  });
});

$(document).ready(function () {
  $("#blur-button2").click(function () {
    $("#cnf-popup-3").addClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#cnf-popup-3").removeClass("blur");
  });
});
