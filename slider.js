const slides = document.querySelector('.slides');
const slide = document.querySelector('.slide');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.links a');

let currentIndex = 0;

prevArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  updateSlider();
});

nextArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
  links.forEach((link, index) => {
    link.classList.toggle('active', index === currentIndex);
  });
}