document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('user');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    // Toggle the eye icon
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    let isValid = true;

    // Get input values
    const idInput = document.getElementById('id');
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(error => error.remove());

    // Validate 身分證字號
    if (idInput.value.trim() === '') {
        showError(idInput, '身分證字號為必填');
        isValid = false;
    }

    // Validate 用戶代號
    if (userInput.value.trim() === '' || userInput.value.length < 6 || userInput.value.length > 12) {
        showError(userInput, '用戶代號需為6至12位英數混合');
        isValid = false;
    }

    // Validate 網銀密碼
    if (passwordInput.value.trim() === '' || passwordInput.value.length < 6 || passwordInput.value.length > 16) {
        showError(passwordInput, '密碼需為6至16位英數混合');
        isValid = false;
    }

    // If all inputs are valid, simulate login
    if (isValid) {
        const hardcodedUser = 'testuser';
        const hardcodedPassword = 'testpassword';

        if (userInput.value === hardcodedUser && passwordInput.value === hardcodedPassword) {
            alert('登入成功！');
            // Redirect to another page (e.g., dashboard.html)
            window.location.href = 'dashboard.html';
        } else {
            alert('用戶代號或密碼錯誤');
        }
    }
});