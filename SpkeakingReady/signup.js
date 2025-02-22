document.addEventListener("DOMContentLoaded", function() {
    let daySelect = document.getElementById("day");
    let monthSelect = document.getElementById("month");
    let yearSelect = document.getElementById("year");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let form = document.getElementById("registerForm");

    // Tạo danh sách ngày
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Tạo danh sách tháng
    let months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    months.forEach((month, index) => {
        let option = document.createElement("option");
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Tạo danh sách năm
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    // Kiểm tra hợp lệ khi submit form
    form.addEventListener("submit", function(event) {
        let phonePattern = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/; // Số điện thoại Việt Nam
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Kiểm tra email có @
        let passwordMinLength = 8; // Mật khẩu ít nhất 8 ký tự

        let phoneValue = phoneInput.value.trim();
        let emailValue = emailInput.value.trim();
        let passwordValue = passwordInput.value.trim();

        if (!phonePattern.test(phoneValue)) {
            alert("Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại Việt Nam hợp lệ.");
            event.preventDefault();
            return;
        }

        if (!emailPattern.test(emailValue)) {
            alert("Email không hợp lệ! Vui lòng nhập đúng định dạng email.");
            event.preventDefault();
            return;
        }

        if (passwordValue.length < passwordMinLength) {
            alert("Mật khẩu phải có ít nhất 8 ký tự.");
            event.preventDefault();
            return;
        }

        alert("Đăng ký thành công!");
    });
});
