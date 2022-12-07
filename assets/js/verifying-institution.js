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

$(document).ready(() => {
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });
});

// Dynamic data with dataTable
// data table code here

const tableData = [
  {
    id: "1",
    name: "홍길동",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
];

const tableData_tab2 = [
  {
    id: "1",
    name: "홍길동",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
  {
    id: "2",
    name: "홍길동",
    KP_DID: "0x000...001",
    issue_date: "2021.08.01 12:00:52",
  },
];
$(document).ready(function () {
  let table = $("#verifying-institution-list").DataTable({
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
      { data: "name", title: "검증기관" },
      { data: "KP_DID", title: "검증기관 DID" },
      { data: "issue_date", title: "발급일시" },
      {
        data: null,
        render: (data, type, row) =>
          `<button type="button" class="btn btn-primary btn-width" onclick="issuerlist(${data.id})">수정</button>`,
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

const issuerlist = () => {
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
    <div class="col-sm-2">
      <input
        type="text"
        class="form-control"
        id="input-13"
        name="상태"
        value="2021.08.14"
        disabled
      />
    </div>
       <div class="col-sm-2 text-right">
      <button type="button" class="btn btn-primary" onclick="issue_Disposal_Confirmation()">폐기
</button>
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
    <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >검증기관 DID</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="발급기관 DID"
        disabled
        value=" did:post:a09vnq3498th8hvnpw984tyh0a8wshdv"
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
        value="2021.08.30 12:00:00"
        disabled
      />
    </div>
  </div>
   
</form>
  `);
  $("#view_details_kp_did").modal("show");
};

const issue_Disposal_Confirmation = () => {
  $(document).ready(function () {
    $("#view_details_kp_did").modal("hide");
    $("#confirmation").modal("show");
  });
};

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
      { data: "KP_DID", title: "KP_DID" },
      { data: "issue_date", title: "발급일시" },
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
   <h5  style="  border-bottom: 1px solid #D2D2D2;  width: 100%;  margin-top:20px; padding-bottom:10px "> 기본정보 </h5>
 <form id="kp_Did_user_profile">
  <div class="form-group row">
    <label
      for="input-10"
      class="col-sm-2 col-form-label no-border"
      >검증기관</label >
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
      >검증기관 DID</label
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
        value="검증기관 폐기 테스트"
      />
    </div>
  </div>
    <div class="form-group row">
    <label
      for="input-14"
      class="col-sm-2 col-form-label no-border"
      >DID 폐기일시</label
    >
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="input-14"
        name="발급기관 DID"
        disabled
        value="2021.08.30 12:00:00"
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
        value="east@post.co.kr"
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
        value="2021.08.30 12:00:00"
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

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#confirmation").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#confirmation").removeClass("blur");
  });
});

$(document).ready(function () {
  $("#blur-button2").click(function () {
    $("#cnf-popup-3").addClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#cnf-popup-3").removeClass("blur");
    $("#confirmation").removeClass("blur");
  });
});
