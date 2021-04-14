const Slides = document.getElementsByClassName("carousel-item");
const len = Slides.length;
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
});
document.querySelector(".previous").addEventListener("click", () => {
  prevSlide();
});

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = len - 1;
  } else {
    currentSlide--;
  }
  updateSlidePosition();
}

function nextSlide() {
  if (currentSlide === len - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  for (let slide of Slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }

  Slides[currentSlide].classList.add("carousel-item-visible");
}
