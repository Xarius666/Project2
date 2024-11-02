let currentIndex = 0;
const totalCards = document.querySelectorAll('.cv-slider-card').length;
const cardsToShow = 3; // Number of cards to show at once
const slideWidth = 100 / cardsToShow; // Width of each slide in percent

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function slideRight() {
  if (currentIndex < totalCards - cardsToShow) {
    currentIndex++;
    updateSlider();
  }
}

function updateSlider() {
  const slider = document.querySelector('.cv-slider');
  const newTransformValue = -currentIndex * slideWidth; // Calculate new transform value
  slider.style.transform = `translateX(${newTransformValue}%)`;
}