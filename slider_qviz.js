const slider = document.getElementById('areaSlider');
const input = document.getElementById('areaInput');
const thumb = document.querySelector('.slider-thumb');

// Синхронизация ползунка и инпута
slider.addEventListener('input', function() {
  input.value = this.value;
  updateThumbPosition();
});

input.addEventListener('input', function() {
  let value = Math.max(30, Math.min(500, this.value));
  slider.value = value;
  this.value = value; // Корректируем если вышли за пределы
  updateThumbPosition();
});

function updateThumbPosition() {
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  thumb.style.left = `${percent}%`;
}

// Инициализация
updateThumbPosition();


document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 5;

  function showStep(step) {
      document.querySelectorAll(".price_qwiz__container").forEach((container, index) => {
          container.style.display = index + 1 === step ? "flex" : "none";
      });
  }

  document.querySelectorAll("#price_qwiz_next").forEach(button => {
      button.addEventListener("click", function () {
          if (currentStep < totalSteps) {
              currentStep++;
              showStep(currentStep);
          }
      });
  });

  document.querySelectorAll("#price_qwiz_prev").forEach(button => {
      button.addEventListener("click", function () {
          if (currentStep > 1) {
              currentStep--;
              showStep(currentStep);
          }
      });
  });

  showStep(currentStep);
});
