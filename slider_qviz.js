const slider1 = document.getElementById('areaSlider');
const input1 = document.getElementById('areaInput');
const thumb1 = document.querySelector('.slider-thumb');

const slider2 = document.getElementById('areaSlider2');
const input2 = document.getElementById('areaInput2');
const thumb2 = document.querySelector('.slider-thumb2');

// Функция обновления позиции ползунка
function updateThumbPosition(slider, thumb) {
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  thumb.style.left = `${percent}%`;
}

// Обработчики для первого слайдера
slider1.addEventListener('input', function() {
  input1.value = this.value;
  updateThumbPosition(slider1, thumb1);
});

input1.addEventListener('input', function() {
  let value = Math.max(30, Math.min(500, this.value));
  slider1.value = value;
  this.value = value;
  updateThumbPosition(slider1, thumb1);
});

// Обработчики для второго слайдера
slider2.addEventListener('input', function() {
  input2.value = this.value;
  updateThumbPosition(slider2, thumb2);
});

input2.addEventListener('input', function() {
  let value = Math.max(30, Math.min(500, this.value));
  slider2.value = value;
  this.value = value;
  updateThumbPosition(slider2, thumb2);
});

// Инициализация
updateThumbPosition(slider1, thumb1);
updateThumbPosition(slider2, thumb2);



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
