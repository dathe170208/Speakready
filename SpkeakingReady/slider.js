let images = ["imagepage/image1.jpg", "imagepage/image2.jpg", "imagepage/image3.jpg"];
let currentIndex = 0;
let interval; // Biến lưu interval

// Hàm đổi ảnh
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("slider-img").src = images[currentIndex];

    resetAutoSlide(); // Reset thời gian tự động khi bấm nút
}

// Hàm tự động chuyển ảnh mỗi 10s
function autoSlide() {
    interval = setInterval(() => {
        changeImage(1);
    }, 10000); // 10000ms = 10s
}

// Hàm reset autoSlide khi bấm nút
function resetAutoSlide() {
    clearInterval(interval); // Dừng interval cũ
    autoSlide(); // Khởi động lại autoSlide
}

// Bắt đầu tự động chuyển ảnh khi load trang
window.onload = autoSlide;
