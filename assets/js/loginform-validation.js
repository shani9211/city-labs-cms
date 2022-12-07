function loginformsubmit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "" && password == "") {
    let message = document.getElementById("message");
    message.innerHTML = "사용자 이름과 비밀번호가 비어 있습니다";
    return false;
  }
  if (username == "") {
    let message = document.getElementById("message");
    message.innerHTML = "사용자 이름이 잘못되었습니다";

    return false;
  }
  if (password == "") {
    let message = document.getElementById("message");
    message.innerHTML = "비밀번호가 맞지 않습니다";
    return false;
  }
  if (username == "admin" && password == 12345) {
    console.log(username, password);
    // alert("login succeses");
    location.href = "dashboard.html";
    return true;
  } else {
    let message = document.getElementById("message");
    message.innerHTML =
      "아이디 혹은 비밀번호가 정확하지 않습니다. 다시 입력해 주세요.";
    return false;
  }
}
