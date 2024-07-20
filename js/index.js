const btn = document.getElementById("loginBtn");
const modal = document.getElementById("login-modal-background");
const loginBtn = document.getElementById("login");

btn.onclick = function() {
    modal.style.display = "block";
}

loginBtn.onclick = function() {
    modal.style.display = "none";
    alert("로그인은 안 해도 돼요~^^");
    btn.innerText = '로그아웃';
}