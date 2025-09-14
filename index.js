const carousel = document.getElementById("carousel");
const totalSlides = carousel.children.length;
let index = 0;

function showSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}
