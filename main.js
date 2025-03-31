document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs"); 
    const buttons = document.querySelectorAll(".slider__tab");

    function showTab(index) {
        tabs.forEach((tab, i) => {
            tab.style.display = i === index ? "block" : "none";
        });

        buttons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            showTab(index);
        });
    });

    showTab(0); // Показываем первую вкладку по умолчанию
});
