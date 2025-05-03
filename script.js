document.querySelector('.submit').addEventListener('click', function (event) {
    event.preventDefault();

    const id = document.getElementById('id').value.trim();
    const user = document.getElementById('user').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginButton = this;

    document.getElementById('id-error').style.display = 'none';
    document.getElementById('user-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';

    let hasError = false;

    if (!id) {
        document.getElementById('id-error').style.display = 'block';
        hasError = true;
    }
    if (!user) {
        document.getElementById('user-error').style.display = 'block';
        hasError = true;
    }
    if (!password) {
        document.getElementById('password-error').style.display = 'block';
        hasError = true;
    }

    if (hasError) {
        loginButton.disabled = false;
    } else {
        alert('登入成功，注意:此為詐騙網頁');
        window.location.href = 'https://www.cathay-cube.com.tw/cathaybk';
    }
});

document.querySelector('.toggle-password').addEventListener('mousedown', function () {
    const userInput = document.getElementById('user');
    userInput.type = 'text';
    this.querySelector('i').classList.remove('fa-eye-slash');
    this.querySelector('i').classList.add('fa-eye');
});

document.querySelector('.toggle-password').addEventListener('mouseup', function () {
    const userInput = document.getElementById('user');
    userInput.type = 'password';
    this.querySelector('i').classList.remove('fa-eye');
    this.querySelector('i').classList.add('fa-eye-slash');
});

document.querySelector('.toggle-password').addEventListener('mouseleave', function () {
    const userInput = document.getElementById('user');
    userInput.type = 'password';
    this.querySelector('i').classList.remove('fa-eye');
    this.querySelector('i').classList.add('fa-eye-slash');
});

document.querySelector('.toggle-password2').addEventListener('mousedown', function () {
    const passwordInput = document.getElementById('password');
    passwordInput.type = 'text';
    this.querySelector('i').classList.remove('fa-eye-slash');
    this.querySelector('i').classList.add('fa-eye');
});

document.querySelector('.toggle-password2').addEventListener('mouseup', function () {
    const passwordInput = document.getElementById('password');
    passwordInput.type = 'password';
    this.querySelector('i').classList.remove('fa-eye');
    this.querySelector('i').classList.add('fa-eye-slash');
});

document.querySelector('.toggle-password2').addEventListener('mouseleave', function () {
    const passwordInput = document.getElementById('password');
    passwordInput.type = 'password';
    this.querySelector('i').classList.remove('fa-eye');
    this.querySelector('i').classList.add('fa-eye-slash');
});

function showAlert(message) {
    alert(message);
}
