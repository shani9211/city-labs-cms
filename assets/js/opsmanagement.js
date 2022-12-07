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

// $(document).ready(() => {
//   oTable = $("#default-datatable").DataTable(); //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said
//   $("#myInputTextField").keyup(function () {
//     oTable.search($(this).val()).draw();
//   });
// });

// $(document).ready(function () {
//   tab = $("#data-table").DataTable();
//   $("#filterbox").keyup(function () {
//     tab.search($(this).val()).draw();
//   });
// });

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
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "2",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "3",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반,팝업",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "4",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반,팝업,헤드알럿",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "5",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "6",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "7",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "8",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "9",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "10",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "11",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "12",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
];
const tableData2 = [
  {
    id: "1",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "2",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "3",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반,팝업",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "4",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반,팝업,헤드알럿",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "5",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "6",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "7",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "8",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "9",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "10",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "11",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
  {
    id: "12",
    title: "우체국 앱 정식 런칭",
    exposure_type: "일반",
    registration_date: "2021.08.16 12:00",
    date_of_modification: "2021.08.16 12:00",
    issue_date: "관리자",
  },
];

//****************************/ Post office app Tab *****************//

$(document).ready(function () {
  let table = $("#postOffice_app").DataTable({
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
      { data: "title", title: "제목" },
      { data: "exposure_type", title: "노출유형" },
      { data: "registration_date", title: "등록일시" },
      { data: "date_of_modification", title: "수정일시" },
      { data: "issue_date", title: "처리자" },
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
          `<button class="btn btn-primary mx-3 w-75" onclick="noticeEdit(${data.id})">수정</button>`,
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

const noticeEdit = (id) => {
  $("#notice_edit_popup .modal-body").empty().append(`

         <form id="notice-edit">
                        <div class="form-group row">
                        <label
                        for="input-10"
                        class="col-sm-2 col-form-label no-border"
                        >등록자</label >
                        <div class="col-sm-4">
                        <input
                        type="text"
                        class="form-control remove_input_filed_border"
                        id="input-10"
                        name="시티랩스"
                        placeholder="홍길동"
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
                        class="form-control remove_input_filed_border"
                        id="input-11"
                        name="발급일"
                        placeholder="2021.08.30 "
                        />
                        </div>
                        </div>
                      <div class="form-group row">
                        <label
                        for="input-14"
                        class="col-sm-2 col-form-label no-border"
                        >제목</label
                        >
                        <div class="col-sm-10">
                        <input
                        type="text"
                        class="form-control remove_input_filed_border"
                        id="input-14"
                        name="제목"
                      
                        placeholder="제목을 입력하세요"
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
                       <textarea class="form-control remove_input_filed_border" name="textarea" id="contents" placeholder="내용을 입력하세요" rows="5"></textarea>
                        </div>
                        </div>

                        
                        <div class="form-group row pt-4">
                        <label
                        for="input-12"
                        class="col-sm-2 col-form-label no-border"
                        >노출유형</label
                        >
                        <div class="col-sm-8 icheck-material-primary" style="display: flex;align-items:center; justify-content: space-evenly; margin-left: -25px; ">
                       <div class="form-check  icheck-material-primary">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="cb16"
                           
                          />
                          <label class="form-check-label no-border" for="cb16"
                            >일반</label
                          >
                        </div>
                        <div class="form-check icheck-material-primary ">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="cb14"
                          />
                          <label class="form-check-label no-border" for="cb14"
                            >팝업</label
                          >
                        </div>
                        <div class="form-check  icheck-material-primary">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="cb15"
                          />
                          <label class="form-check-label no-border" for="cb15"
                            >헤드알럿</label
                          >
                        </div>
                        </div>
                       
                       
                        </div>
                        <div class="form-group row">
                        <label
                        for="input-14"
                        class="col-sm-2 col-form-label no-border"
                        >상단고정</label
                        >
                        <div class="col-sm-5">
                         <div class="form-group">
                            <select class="form-control remove_input_filed_border" id="sel1" style="width: 150px;">
                            <option>예</option>
                            <option>아니요</option>
                            
                            </select>
                            </div>
                        </div>
                        </div>
                        <div class="form-group row">
                        <label
                        for="input-14"
                        class="col-sm-2 col-form-label no-border"
                        >등록사유</label>
                         <div class="col-sm-10 pt-2">
                       <textarea class="form-control remove_input_filed_border " name="textarea" id="contents" placeholder="내용을 입력하세요" rows="2"></textarea>
                        </div>
                        </div>

                        </form>
  `);
  $("#notice_edit_popup").modal("show");
};

//****************************/ Post office integrated web Tab Table*****************//

$(document).ready(function () {
  let disposal_list_table = $("#postOffice_web").DataTable({
    //dom: "Blfrtp",
    dom: '<".top-table"><" .card-table"rt><".div1"p><".searchInput"f>',
    language: {
      lengthMenu: " _MENU_",
      zeroRecords: "Nothing found - sorry",
      info: "Showing page _PAGE_ of _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
    },
    data: tableData2,
    columns: [
      { data: "id", title: "No" },
      { data: "title", title: "제목" },
      { data: "exposure_type", title: "노출유형" },
      { data: "registration_date", title: "등록일시" },
      { data: "date_of_modification", title: "수정일시" },
      { data: "issue_date", title: "처리자" },
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
          `<button class="btn btn-primary mx-3 w-75" onclick="noticeEdit(${data.id})">수정</button>`,
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

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#notice-registration-popup").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#notice-registration-popup").removeClass("blur");
  });
  $("#blur-button2").click(function () {
    $("#notice-registration-popup").addClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#notice-registration-popup").removeClass("blur");
  });
  $("#remove-blur3").click(function () {
    $("#notice-registration-popup").removeClass("blur");
  });
});

$(document).ready(function () {
  $("#blur-button3").click(function () {
    $("#notice_edit_popup").addClass("blur");
  });
  $("#remove-blur4").click(function () {
    $("#notice_edit_popup").removeClass("blur");
  });
  $("#remove-blur5").click(function () {
    $("#notice_edit_popup").removeClass("blur");
  });
  $("#blur-button4").click(function () {
    $("#notice_edit_popup").addClass("blur");
  });
  $("#remove-blur6").click(function () {
    $("#notice_edit_popup").removeClass("blur");
  });
});
