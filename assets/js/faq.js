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
    category: "법인서비스",
    title: "개인회원가입",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "2",
    category: "이용내역",
    title: "우체국 우편 로그인",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "3",
    category: "로그인",
    title: "쇼핑 이용내역 조회",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "4",
    category: "회원가입",
    title: "법인 DID 신청",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "5",
    category: "우체국 앱 정식 런칭",
    title: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "6",
    category: "우체국 앱 정식 런칭",
    title: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "7",
    category: "우체국 앱 정식 런칭",
    title: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
];

const tableData_2 = [
  {
    id: "1",
    category: "법인서비스",
    title: "개인회원가입",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "2",
    category: "이용내역",
    title: "우체국 우편 로그인",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "3",
    category: "로그인",
    title: "쇼핑 이용내역 조회",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "4",
    category: "회원가입",
    title: "법인 DID 신청",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "5",
    category: "우체국 앱 정식 런칭",
    title: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "6",
    category: "우체국 앱 정식 런칭",
    title: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
  {
    id: "7",
    category: "우체국 앱 정식 런칭",
    title: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    manager: "관리자",
  },
];
//****************************table for FAQ App section page *****************//

$(document).ready(function () {
  let table = $("#corporate-user").DataTable({
    //dom: "Blfrtp",
    dom: '<".top-table"><" .card-table"rt><".div1"p><".searchInput"f>',
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
      { data: "category", title: "카테고리" },
      { data: "title", title: "제목" },
      { data: "registration_date", title: "등록일시" },
      { data: "date_of_modification", title: "수정일시" },
      { data: "manager", title: "처리자" },
      {
        data: null,
        render: (data, type, row, meta) =>
          `<div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input onchange="mySwitcher(this, '${data.id})" id="customSwitches-${meta.row}">
                    <label class="custom-control-label" for="customSwitches-${meta.row}"/>
                </div>`,
        title: "노출상태",
      },
      {
        data: null,
        render: (data, type, row) =>
          `<button class="btn btn-primary mx-3 w-75" onclick="myfunc(${data.id})">수정</button>`,
        title: "관리",
      },
    ],
  });
  $("#myInputTextField").on("keyup", function () {
    table.search(this.value).draw();
  });
  var info = table.page.info();
  $("#filterbox").html(
    "(" + "조회결과 " + (info.page + 1) + "건 " + "/ 총" + info.pages + "건)"
  );
});

const myfunc = (id) => {
  $("#faq-edit_table-popup .modal-body").empty().append(`
      <h5
                style="
                  border-bottom: 1px solid #d2d2d2;
                  width: 100%;
                  padding: 10px;
                "
              >
               FAQ수정
              </h5>
              <form>
                <div class="form-group row">
                  <label
                    for="input-10"
                    class="col-sm-2 col-form-label no-border"
                    >등록자</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="input-10"
                      name="등록자"
                      value="홍길동"
                      disabled
                    />
                  </div>
                  <label
                    for="input-11"
                    class="col-sm-2 col-form-label no-border"
                    >등록일</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="input-11"
                      name="발급일"
                      value="2021.08.16"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-15"
                    class="col-sm-2 col-form-label no-border"
                    >상단고정</label
                  >
                  <div
                    class="col-sm-2"
                    style="padding: 10px 0px; margin: 0px 0px 0px -6px"
                  >
                    <button
                      class="
                        btn btn-md btn-primary
                        dropdown-toggle
                        tab-content-button
                        w-100
                      "
                      type="button"
                      data-toggle="dropdown"
                    >
                      예
                    </button>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-13"
                    class="col-sm-2 col-form-label no-border"
                    >내용
                  </label>
                  <div class="col-sm-10" style="margin: 10px 0px">
                    <input
                      type="text"
                      class="form-control"
                      id="input-14"
                      placeholder="내용을 입력하세요."
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >제목</label
                  >
                  <div class="input-group col-sm-10" style="margin: 10px 0px">
                    <textarea
                      placeholder="내용을 입력하세요."
                      class="form-control"
                    ></textarea>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-16"
                    class="col-sm-2 col-form-label no-border"
                    >등록사유</label
                  >
                  <div class="input-group col-sm-10" style="margin: 10px 0px">
                    <textarea
                      placeholder="사유를 입력하세요."
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </form>
  
  `);
  $("#faq-edit_table-popup").modal("show");
};

//****************************FAQ Web Tab Table*****************//

$(document).ready(function () {
  let disposal_list_table = $("#individual_user_disposal_list").DataTable({
    //dom: "Blfrtp",
    dom: '<".top-table"><" .card-table"rt><".div1"p><".searchInput"f>',
    language: {
      lengthMenu: " _MENU_",
      zeroRecords: "Nothing found - sorry",
      info: "Showing page _PAGE_ of _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
    },
    data: tableData_2,
    columns: [
      { data: "id", title: "No" },
      { data: "category", title: "제목" },
      { data: "title", title: "제목" },
      { data: "registration_date", title: "등록일시" },
      { data: "date_of_modification", title: "수정일시" },
      { data: "manager", title: "처리자" },
      {
        data: null,
        render: (data, type, row, meta) =>
          `<div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input onchange="mySwitcher(this, '${data.id}) " id="customSwitches1-${meta.row}">
                  <label class="custom-control-label" for="customSwitches1-${meta.row}"/>
                </div>`,
        title: "노출상태",
      },
      {
        data: null,
        render: (data, type, row) =>
          `<button class="btn btn-primary mx-3 w-75" onclick="myfuncweb(${data.id})">수정</button>`,
        title: "관리",
      },
    ],
  });
  $("#tab_2_myInputTextField").on("keyup", function () {
    disposal_list_table.search(this.value).draw();
  });

  var info = disposal_list_table.page.info();
  $("#tab_2_filterbox").html(
    "(" + "조회결과 " + (info.page + 1) + "건 " + "/ 총" + info.pages + "건)"
  );
});

const myfuncweb = (id) => {
  $("#faq-edit_table-popup_web .modal-body").empty().append(`
      <h5
                style="
                  border-bottom: 1px solid #d2d2d2;
                  width: 100%;
                  padding: 10px;
                "
              >
               FAQ수정
              </h5>
              <form>
                <div class="form-group row">
                  <label
                    for="input-10"
                    class="col-sm-2 col-form-label no-border"
                    >등록자</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="input-10"
                      name="등록자"
                      value="홍길동"
                      disabled
                    />
                  </div>
                  <label
                    for="input-11"
                    class="col-sm-2 col-form-label no-border"
                    >등록일</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="input-11"
                      name="발급일"
                      value="2021.08.16"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-15"
                    class="col-sm-2 col-form-label no-border"
                    >상단고정</label
                  >
                  <div
                    class="col-sm-2"
                    style="padding: 10px 0px; margin: 0px 0px 0px -6px"
                  >
                    <button
                      class="
                        btn btn-md btn-primary
                        dropdown-toggle
                        tab-content-button
                        w-100
                      "
                      type="button"
                      data-toggle="dropdown"
                    >
                      예
                    </button>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-13"
                    class="col-sm-2 col-form-label no-border"
                    >내용
                  </label>
                  <div class="col-sm-10" style="margin: 10px 0px">
                    <input
                      type="text"
                      class="form-control"
                      id="input-14"
                      placeholder="내용을 입력하세요."
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >제목</label
                  >
                  <div class="input-group col-sm-10" style="margin: 10px 0px">
                    <textarea
                      placeholder="내용을 입력하세요."
                      class="form-control"
                    ></textarea>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-16"
                    class="col-sm-2 col-form-label no-border"
                    >등록사유</label
                  >
                  <div class="input-group col-sm-10" style="margin: 10px 0px">
                    <textarea
                      placeholder="사유를 입력하세요."
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </form>
  
  `);
  $("#faq-edit_table-popup_web").modal("show");
};

/////////////////////////////  popup form validation before submit /////////////////////////////////

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

//*****************blur popUp background App Section********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#faq-registration-popup").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#faq-registration-popup").removeClass("blur");
  });
});

//*****************blur popUp background on FAQ EDIT for App Section  ********************/

$(document).ready(function () {
  $("#faq_edit_popup_blur-button").click(function () {
    $("#faq-edit_table-popup").addClass("blur");
  });
  $("#faq_edit_popup_remove-blur").click(function () {
    $("#faq-edit_table-popup").removeClass("blur");
  });
});

//*****************blur popUp background on FAQ EDIT for web  Section  ********************/
$(document).ready(function () {
  $("#faq_edit_popup_web_blur_button").click(function () {
    $("#faq-edit_table-popup_web").addClass("blur");
  });
  $("#faq_edit_popup_web_remove_blur").click(function () {
    $("#faq-edit_table-popup_web").removeClass("blur");
  });
});
