const btn = document.getElementById("loginBtn");
const modal = document.getElementById("login-modal-background");
const loginBtn = document.getElementById("login");
const joinBtn = document.getElementById("join");

btn.onclick = function() {
    modal.style.display = "block";
}

loginBtn.onclick = function() {
    modal.style.display = "none";
    alert("로그인은 안 해도 돼요~^^");
}

joinBtn.onclick = function() {
    modal.style.display = "none";
    alert("회원가입은 안 해도 돼요~^^");
}