// ================= HEADER SLIDER =================
const headerSlides = document.querySelectorAll('.header__slide');
const headerArrow = document.querySelector('.header__arrow');
let currentHeaderSlide = 0;

function showHeaderSlide(index) {
  headerSlides.forEach(slide => slide.classList.remove('header__slide--active'));
  headerSlides[index].classList.add('header__slide--active');
}

headerArrow.addEventListener('click', () => {
  currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
  showHeaderSlide(currentHeaderSlide);

  document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
});

setInterval(() => {
  currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
  showHeaderSlide(currentHeaderSlide);
}, 4000);


// ================= NEWS SLIDER =================
const newsTrack = document.querySelector('.news__track');
const newsCards = document.querySelectorAll('.news__card');
const newsPrev = document.querySelector('.news__prev');
const newsNext = document.querySelector('.news__next');

let newsIndex = 0;
let visibleCards = 3; 

function cardWidth() {
  const style = window.getComputedStyle(newsCards[0]);
  const marginRight = parseInt(style.marginRight) || 20;
  return newsCards[0].offsetWidth + marginRight;
}

// Update pozicionin e track
function updateNewsSlider() {
  newsTrack.style.transform = `translateX(-${newsIndex * cardWidth()}px)`;
}

// Next button
newsNext.addEventListener('click', () => {
  if(newsIndex < newsCards.length - visibleCards) {
    newsIndex++;
  } else {
    newsIndex = 0;
  }
  updateNewsSlider();
});

newsPrev.addEventListener('click', () => {
  if(newsIndex > 0){
    newsIndex--;
  } else {
    newsIndex = newsCards.length - visibleCards;
  }
  updateNewsSlider();
});

setInterval(() => {
  newsIndex++;
  if(newsIndex > newsCards.length - visibleCards) newsIndex = 0;
  updateNewsSlider();
}, 4000);


// ================= SMOOTH NAVIGATION =================
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});
