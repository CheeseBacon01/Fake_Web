document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('user');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    // Toggle the eye icon
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

document.querySelector('.submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    const id = document.getElementById('id').value.trim();
    const user = document.getElementById('user').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginButton = this;

    // Reset error messages
    document.getElementById('id-error').style.display = 'none';
    document.getElementById('user-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';

    // Validate inputs
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
        loginButton.disabled = false; // Re-enable the button
    } else {
        alert('登入成功，注意:此為詐騙網頁');
        // Proceed with login logic
        window.location.href = 'https://www.cathay-cube.com.tw/cathaybk';
    }
});

function showAlert(message) {
    alert(message);
}