// Toggle Sidebar
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Toggle Dropdown Menu
document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.querySelector(".profile-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    profileBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn đóng khi click vào chính nó
        dropdownMenu.classList.toggle("show");
    });

    // Ẩn menu khi click ra ngoài
    document.addEventListener("click", function () {
        dropdownMenu.classList.remove("show");
    });

    dropdownMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn đóng khi click vào menu
    });
});

const lessons = {
    1: {
        title: "Greetings",
        dialogue: [
            "A: Hello! How are you?",
            "B: I'm fine, thank you!",
            "A: What's your name?",
            "B: My name is John."
        ]
    },
    2: {
        title: "At the Restaurant",
        dialogue: [
            "Waiter: Good evening! Do you have a reservation?",
            "Customer: Yes, under the name Smith.",
            "Waiter: Please follow me to your table."
        ]
    }
    // Thêm dữ liệu các lesson khác
};

// Xử lý click lesson
document.querySelectorAll('.lesson-item').forEach(item => {
    item.addEventListener('click', () => {
        const lessonId = item.dataset.lesson;
        const lessonData = lessons[lessonId];
        
        // Hiển thị khung hội thoại
        const dialoguePanel = document.getElementById('dialoguePanel');
        dialoguePanel.style.display = 'block';
        
        // Thêm nội dung hội thoại
        const dialogueContent = dialoguePanel.querySelector('.dialogue-content');
        dialogueContent.innerHTML = lessonData.dialogue
            .map(line => `<div class="dialogue-line">${line}</div>`)
            .join('');
    });
});