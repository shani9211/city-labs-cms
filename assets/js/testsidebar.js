function loadNavbarDiv() {
  let navbar_code_str = `<div class="sidebar-menu">
          <p>Dashboard</p>
        </div>
        <div class="sidebar-menu">
          <p>Operation</p>
        </div>
        <div class="sidebar-menu">
          <p>Institution Managment</p>
        </div>
        <div class="sidebar-menu">
          <p>Certificate</p>
        </div>
        <div class="sidebar-menu">
          <p>Settings</p>
        </div>`;
  $("body").append(navbar_code_str);
}
