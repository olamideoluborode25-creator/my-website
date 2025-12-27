const themeBtn = document.getElementById('theme-btn');
const greetingH1 = document.getElementById('greeting');

// 1. Theme Toggle
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Dynamic Greeting based on time
const hour = new Date().getHours();
if (hour < 12) {
    greetingH1.innerText = "Good Morning, I'm [OLUBORODE OLAMIDE]";
} else if (hour < 18) {
    greetingH1.innerText = "Good Afternoon, I'm [OLUBORODE OLAMIDE]";
} else {
    greetingH1.innerText = "Good Evening, I'm [OLUBORODE OLAMIDE]";
}