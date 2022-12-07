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

    //****************************/ Post office app Tab *****************//
  
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
      "(" + "조회결과 "+ (info.page + 1) + "건 " + "/ 총" + info.pages + "건)"
    );
  });

  const myfunc = (id) => {
    $("#notice-registration-correction-popup .my-modal").modal("show");
  };

  



  //****************************/ Post office integrated web Tab Table*****************//
  
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
                  <input type="checkbox" class="custom-control-input onchange="mySwitcher(this, '${data.id}) " id="customSwitches1-${meta.row}">
                  <label class="custom-control-label" for="customSwitches1-${meta.row}"/>
                </div>`,
            title: "노출상태",
          },
        {
          data: null,
          render: (data, type, row) =>
            `<button class="btn btn-primary mx-3 w-75" >수정</button>`,
          title: "관리",
        },
      ],
    });
    $("#tab_2_myInputTextField").on("keyup", function () {
      table.search(this.value).draw();
    });
    var info = table.page.info();
    $("#tab_2_filterbox").html(
      "(" + "조회결과 "+ (info.page + 1) + "건 " + "/ 총" + info.pages + "건)"
    );
  });

 
  



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

// Navigation bar breadcrumb design
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
