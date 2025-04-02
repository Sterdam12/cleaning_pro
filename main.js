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

 let questionTitle = document.querySelectorAll('.question-title');

 let toggleQuestion = function() {
    this.classList.toggle('active');
 }

 questionTitle.forEach(function(title){
    title.addEventListener('click', toggleQuestion)
 });


 document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".contact_modal");
    const openBtn = document.querySelector("#button__contact__head");
    const closeBtn = document.querySelector(".contact_modal__close");
    
    if (openBtn && modal) {
        openBtn.addEventListener("click", function () {
            modal.classList.add("active");
        });
    }
    
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", function () {
            modal.classList.remove("active");
        });
    }
    
    // Закрытие модалки при клике вне её области
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});