$(document).ready(() => {
  /*Date Init*/
  $(".input-group.date").datepicker({
    format: "yyyy-mm-dd",
    keyboardNavigation: true,
    daysOfWeekHighlighted: "0",
    calendarWeeks: true,
    todayHighlight: true,
  });

  $("#default-datatable").DataTable();

  var table = $("#data-datatable").DataTable({
    lengthChange: false,
    //buttons: [ 'copy', 'excel', 'pdf', 'print', 'colvis' ]
    buttons: ["excel"],
    columnDefs: [{ orderable: false, targets: -1 }],
  });

  table
    .buttons()
    .container()
    .appendTo("#data-datatable_wrapper .col-md-6:eq(0)");
  $(".dt-buttons.btn-group").css({ display: "none" });
  $("#data-datatable_wrapper .col-md-6:eq(0)").append(`<h3>Header Text</h3>`);
  $("#data-datatable_wrapper .col-md-6:eq(1)").empty().append(`
      <div style="text-align: right; height: 100%">        
        <button type="button" class="btn btn-ripple" id="datatable-download-btn">로그인</button>
        <select id="data-download-type">
            <option>Excel</option>
            <option>PDF</option>
        </select>
      </div>
    `);
  $("#datatable-download-btn").css({
    height: $("#data-download-type").height(),
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
