const btn = document.getElementById("loginBtn");
const modal = document.getElementById("login-modal-background");
const loginBtn = document.getElementById("login");
const idText = document.querySelector('.id-text');
const pwText = document.querySelector('.pw-text');

btn.onclick = function() {
    if (btn.innerText === '로그인') {
        modal.style.display = "block";
    } else {
        btn.innerText = '로그인';
        alert("로그아웃 되었습니다.");
    }
}

loginBtn.onclick = function() {
    modal.style.display = "none";
    alert("로그인은 안 해도 돼요~^^");
    btn.innerText = '로그아웃';
}

document.getElementById('loginBtn').addEventListener('click', function() {
    var rememberCheckbox = document.getElementById('rememberCheckbox');
    if (rememberCheckbox.checked) {
        rememberCheckbox.checked = false;
    }
    
    idText.value = '';
    pwText.value = '';
});