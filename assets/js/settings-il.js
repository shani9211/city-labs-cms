$(document).ready(() => {
  /*Date Init*/
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });

  /*Modal Listeners*/
  $("#add-institution-popup").on("show.bs.modal", () => {
    /*Reset Modal Inputs & Dropdowns*/
    $("#add-institution-popup input[type=text]").val(null);
    $("#add-institution-popup select option").prop("selected", false);
    $("#add-institution-popup select option:disabled").prop("selected", true);
  });

  const tableData = [
    {
      num: 5,
      name: "시티랩스",
      manager: "홍길동",
      contactPerson: "01012345678",
      email: "east@post.co.kr",
      div: "발급기관",
      regDate: "2021.08.30 12:00:00",
    },
    {
      num: 4,
      name: "시티랩스",
      manager: "홍길동",
      contactPerson: "01012345678",
      email: "east@post.co.kr",
      div: "발급기관",
      regDate: "2021.08.30 12:00:00",
    },
    {
      num: 3,
      name: "시티랩스",
      manager: "홍길동",
      contactPerson: "01012345678",
      email: "east@post.co.kr",
      div: "발급기관",
      regDate: "2021.08.30 12:00:00",
    },
    {
      num: 2,
      name: "시티랩스",
      manager: "홍길동",
      contactPerson: "01012345678",
      email: "east@post.co.kr",
      div: "발급기관",
      regDate: "2021.08.30 12:00:00",
    },
    {
      num: 1,
      name: "시티랩스",
      manager: "홍길동",
      contactPerson: "01012345678",
      email: "east@post.co.kr",
      div: "발급기관",
      regDate: "2021.08.30 12:00:00",
    },
  ];

  var table = $("#institution-list-table").DataTable({
    pageLength: 6,
    searching: false,
    lengthChange: false,
    paging: false,
    info: false,
    // dom: "Blfrtip",
    columns: [
      { data: "num", title: "No." },
      { data: "name", title: "기관명" },
      { data: "manager", title: "담당자" },
      { data: "contactPerson", title: "담당자 연락처" },
      { data: "email", title: "이메일" },
      { data: "div", title: "기관구분" },
      { data: "regDate", title: "등록일시" },
      {
        data: null,
        render: (data, type, row) =>
          `<button type="button" class="btn btn-primary btn-width" onclick="myFunc(${data.num})">수정</button>`,
        title: "수정",
      },
    ],
    data: tableData,
  });
});

let myFunc = (id) => {
  /* Must Find Object using Id */
  /* Render to Modal */
  $("#org-mod-popup .modal-body").empty().append(`
        <h4>기관 수정</h4>    
        <div class="container">
        <h6>기관 정보</h6>
        <hr>
        <table>
            <tbody>
            <tr>
                <td class="label">기관유형</td>
                <td class="value">
                <p>발급기관</p>
                </td>
            </tr>
            <tr>
                <td class="label">기관명</td>
                <td class="value">
                <p>시티랩스</p>
                </td>
            </tr>
            <tr>
                <td class="label">사업자번호</td>
                <td class="value">
                <p>11012345601</p>
                </td>
            </tr>
            <tr>
                <td class="label">대표이메일</td>
                <td class="value">
                <div class="row">
                    <div class="input-group search col-sm-12 col-md-12 col-sm-12" style=" margin: 0;">                        
                    <input type="text" value="east@post.co.kr" class="form-control" id="search">                        
                    </div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>            
        <div class="container">
        <h6>담당자 정보</h6>
        <hr>
        <table>
            <tbody>
            <tr>
                <td class="label">담당자명</td>
                <td class="value">
                <div class="row">
                    <div class="input-group search col-sm-12 col-md-12 col-sm-12" style=" margin: 0;">                        
                    <input type="text" value="홍길동" class="form-control" id="search">                        
                    </div>
                </div>
                </td>
            </tr>
            <tr>
                <td class="label">담당자 연락처</td>
                <td class="value">
                <div class="row">
                    <div class="input-group search col-sm-12 col-md-12 col-sm-12" style=" margin: 0;">                        
                    <input type="text" value="01012345678" class="form-control" id="search">                        
                    </div>
                </div>
                </td>
            </tr>
            <tr>
                <td class="label">담당자 이메일</td>
                <td class="value">
                <div class="row">
                    <div class="input-group search col-sm-12 col-md-12 col-sm-12" style=" margin: 0;">                        
                    <input type="text" value="east@post.co.kr" class="form-control" id="search">                        
                    </div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class="container">
        <h6>DID 정보</h6>
        <hr>
        <table>
            <tbody>
            <tr>
                <td class="label">기관 DID</td>
                <td class="value">
                <div class="row">
                    <div class="input-group search col-sm-12 col-md-12 col-sm-12" style=" margin: 0;">                        
                    <p>did:post:29fanirqoihziuhf0q289yhfvsinvawie</p>
                    </div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    `);
  $("#org-mod-popup").modal("show");
};

//*****************blur popUp background********************/

$(document).ready(function () {
  $("#blur-button").click(function () {
    $("#org-mod-popup").addClass("blur");
  });
  $("#remove-blur").click(function () {
    $("#org-mod-popup").removeClass("blur");
  });
  $("#remove-blur2").click(function () {
    $("#org-mod-popup").removeClass("blur");
  });
});

$(document).ready(function () {
  $("#blur-button2").click(function () {
    $("#add-institution-popup").addClass("blur");
  });
  $("#remove-blur3").click(function () {
    $("#add-institution-popup").removeClass("blur");
  });
  $("#remove-blur4").click(function () {
    $("#add-institution-popup").removeClass("blur");
  });
});
