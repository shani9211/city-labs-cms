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
      id: "1",
      group: "슈퍼관리자",
      desc: "모든 메뉴 접근 및 등록/수정/조회 가능",
      regDate: "2021.08.26 12:00:00",
      registrant: "관리자1",
      modDate: "2021.08.26 12:00:00",
      modifier: "관리자1",
    },
    {
      id: "2",
      group: "슈퍼관리자",
      desc: "모든 메뉴 접근 및 등록/수정/조회 가능",
      regDate: "2021.08.26 12:00:00",
      registrant: "관리자1",
      modDate: "2021.08.26 12:00:00",
      modifier: "관리자1",
    },
    {
      id: "3",
      group: "슈퍼관리자",
      desc: "모든 메뉴 접근 및 등록/수정/조회 가능",
      regDate: "2021.08.26 12:00:00",
      registrant: "관리자1",
      modDate: "2021.08.26 12:00:00",
      modifier: "관리자1",
    },
    {
      id: "4",
      group: "슈퍼관리자",
      desc: "모든 메뉴 접근 및 등록/수정/조회 가능",
      regDate: "2021.08.26 12:00:00",
      registrant: "관리자1",
      modDate: "2021.08.26 12:00:00",
      modifier: "관리자1",
    },
    {
      id: "5",
      group: "슈퍼관리자",
      desc: "모든 메뉴 접근 및 등록/수정/조회 가능",
      regDate: "2021.08.26 12:00:00",
      registrant: "관리자1",
      modDate: "2021.08.26 12:00:00",
      modifier: "관리자1",
    },
  ];

  var table = $("#authorization-settings-table").DataTable({
    pageLength: 6,
    searching: false,
    lengthChange: false,
    paging: false,
    info: false,
    // dom: "Blfrtip",

    columns: [
      { data: "group", title: "그룹명" },
      { data: "desc", title: "그룹설명" },
      { data: "regDate", title: "등록일시" },
      { data: "registrant", title: "등록자" },
      { data: "modDate", title: "수정일시" },
      { data: "modifier", title: "수정자" },
      {
        data: null,
        render: (data, type, row) =>
          `<button type="button" class="btn btn-primary btn-width" onclick="myFunc('${data.id}')">수정</button>`,
        title: "상세",
      },
    ],
    data: tableData,
  });
});

//-----------------------------------------------//
let myFunc = (id) => {
  /* Must Find Object using Id */
  /* Render to Modal */
  $("#edit-permission-modal .modal-body").empty().append(`
  <h4
                style="
                  color: #dd695d;
                  padding-bottom: 20px;
                  border-bottom: 2px solid #d2d2d2;
                  padding-bottom: 20px;
                "
              >
               권한그룹 수정

              </h4>
              <form>
                <div class="form-group row">
                  <label
                    for="input-10"
                    class="col-md-2 col-form-label no-border"
                    >그룹명</label
                  >
                  <div class="col-md-10">
                    <input
                      type="text"
                      class="form-control remove_input_filed_border"
                      id="input-10"
                      name="그룹명 입력"
                      placeholder="그룹명 입력"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-10"
                    class="col-md-2 col-form-label no-border"
                    >그룹설명</label
                  >
                  <div class="col-md-10">
                    <input
                      type="text"
                      class="form-control remove_input_filed_border"
                      id="input-10"
                      name="권한그룹에 대한 설명 입력"
                      placeholder="권한그룹에 대한 설명 입력"
                    />
                  </div>
                </div>

                <h5
                  style="border-bottom: 2px solid #d2d2d2; padding-bottom: 20px"
                >
                  권한설정
                </h5>
                <div class="form-group row pt-1 pb-1">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >DID관리</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb36"
                      />
                      <label class="form-check-label no-border" for="cb36"
                        >조회</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb35"
                      />
                      <label class="form-check-label no-border" for="cb35"
                        >폐기처리</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb34"
                      />
                      <label class="form-check-label no-border" for="cb34"
                        >법인 승인/반려</label
                      >
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >인증서관리</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb33"
                      />
                      <label class="form-check-label no-border" for="cb33"
                        >조회</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb32"
                      />
                      <label class="form-check-label no-border" for="cb32"
                        >폐기처리</label
                      >
                    </div>
                    <div
                      class="form-check icheck-material-primary"
                      style="visibility: hidden"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb31"
                      />
                      <label class="form-check-label no-border" for="cb31"
                        >헤드알럿</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >마이데이터</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb30"
                      />
                      <label class="form-check-label no-border" for="cb30"
                        >조회</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >리포트</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb29"
                      />
                      <label class="form-check-label no-border" for="cb29"
                        >일반</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >운영관리</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb28"
                      />
                      <label class="form-check-label no-border" for="cb28"
                        >조회</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb27"
                      />
                      <label class="form-check-label no-border" for="cb27"
                        >등록</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb26"
                      />
                      <label class="form-check-label no-border" for="cb26"
                        >수정</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    >설정</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb25"
                      />
                      <label class="form-check-label no-border" for="cb25"
                        >조회</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb24"
                      />
                      <label class="form-check-label no-border" for="cb24"
                        >사용자추가</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb23"
                      />
                      <label class="form-check-label no-border" for="cb23"
                        >사용자수정</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="input-12"
                    class="col-sm-2 col-form-label no-border"
                    style="visibility: hidden"
                    >DID관리</label
                  >
                  <div
                    class="col-sm-8 icheck-material-primary"
                    style="
                      display: flex;

                      align-items: center;
                    "
                  >
                    <div class="form-check icheck-material-primary no-border">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb22"
                      />
                      <label class="form-check-label no-border" for="cb22"
                        >권한그룹 등록</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb21"
                      />
                      <label class="form-check-label no-border" for="cb21"
                        >권한그룹 수정</label
                      >
                    </div>
                    <div class="form-check icheck-material-primary">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cb20"
                      />
                      <label class="form-check-label no-border" for="cb20"
                        >권한그룹 삭제</label
                      >
                    </div>
                     
                  </div>
                
                </div>
              </form>
    `);
  $("#edit-permission-modal").modal("show");
};

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#auth-group-reg-popup").addClass("blur");
  });
  $("#blur-button2").click(function () {
    $("#auth-group-reg-popup").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#auth-group-reg-popup").removeClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#auth-group-reg-popup").removeClass("blur");
  });
  $("#remove-blur3").click(function () {
    $("#auth-group-reg-popup").removeClass("blur");
  });
});

$(document).ready(function () {
  $("#blur-button3").click(function () {
    $("#edit-permission-modal").addClass("blur");
  });
  $("#blur-button4").click(function () {
    $("#edit-permission-modal").addClass("blur");
  });
  $("#blur-button5").click(function () {
    $("#edit-permission-modal").addClass("blur");
  });
  $("#remove-blur4").click(function () {
    $("#edit-permission-modal").removeClass("blur");
  });
  $("#remove-blur5").click(function () {
    $("#edit-permission-modal").removeClass("blur");
  });
  $("#remove-blur6").click(function () {
    $("#edit-permission-modal").removeClass("blur");
  });
  $("#remove-blur7").click(function () {
    $("#edit-permission-modal").removeClass("blur");
  });
  $("#remove-blur8").click(function () {
    $("#edit-permission-modal").removeClass("blur");
  });
  $("#remove-blur9").click(function () {
    $("#edit-permission-modal").removeClass("blur");
  });
});
