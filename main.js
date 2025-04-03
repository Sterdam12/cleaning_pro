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

const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.burger__menu-close');
const burgerMenu = document.querySelector('.burger__menu');

menuBtn.addEventListener('click', ()=>{
    burgerMenu.classList.add('burger__menu-open');
});

menuClose.addEventListener('click', ()=>{
    burgerMenu.classList.remove('burger__menu-open');
});


/*Калькулятор стоимости*/
document.addEventListener("DOMContentLoaded", function () {
    const prices = {
        cleaningType: {
            "Поддерживающая": 70,
            "Генеральная": 100,
            "После ремонта": 120,
            "Помыть окна": 200,
        },
        extraServices: {
            "Помыть холодильник": 500,
            "Химчистка мебели": 1000,
            "Помыть СВЧ внутри": 500,
            "Помыть духовой шкаф": 500,
            "Уборка балкона": 500,
            "Глажка белья": 500,
            "Чистка ковра": 1000,
            "Помыть люстру": 500,
        },
        minPrice: 3800
    };

    const getSelectedValue = (name) => {
        return document.querySelector(`input[name="${name}"]:checked`)?.closest("label")?.textContent.trim();
    };

    const calculatePrice = () => {
        const cleaningType = getSelectedValue("calc-option-2");
        const area = parseInt(document.getElementById("areaInput2").value) || 30;

        let pricePerM2 = prices.cleaningType[cleaningType] || 0;
        let baseCost = pricePerM2 * area;

        let extraCost = 0;
        document.querySelectorAll(".online_calc_select input:checked").forEach((checkbox) => {
            const serviceText = checkbox.closest("label").textContent.trim();
            extraCost += prices.extraServices[serviceText] || 0;
        });

        let totalCost = baseCost + extraCost;
        if (totalCost < prices.minPrice) {
            totalCost = prices.minPrice;
        }

        document.querySelector(".online_calc__total span").textContent = ` ${totalCost.toLocaleString()} руб.`;
    };

    document.querySelectorAll('input[name="calc-option-2"], .online_calc_select input, #areaInput2, #areaSlider2').forEach(input => {
        input.addEventListener("input", calculatePrice);
    });

    calculatePrice();
});


/*Кастомной скролл бар*/
document.addEventListener("DOMContentLoaded", function () {
    const tableWrapper = document.querySelector(".price__table");
    const scrollbar = document.querySelector(".price__scrollbar");
    const thumb = document.querySelector(".price__scrollbar-thumb");

    function syncThumb() {
        let scrollPercent = tableWrapper.scrollLeft / (tableWrapper.scrollWidth - tableWrapper.clientWidth);
        let thumbPosition = scrollPercent * (scrollbar.clientWidth - thumb.clientWidth);
        thumb.style.transform = `translateX(${thumbPosition}px)`;
    }

    tableWrapper.addEventListener("scroll", syncThumb);
});
