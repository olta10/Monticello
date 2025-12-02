// HEADER SLIDER
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

  if(currentHeaderSlide === 1){
    document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
  }
});

setInterval(() => {
  currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
  showHeaderSlide(currentHeaderSlide);
}, 4000);


// NEWS SLIDER
const newsTrack = document.querySelector('.news__track');
const newsCards = document.querySelectorAll('.news__card');
const newsPrev = document.querySelector('.news__prev');
const newsNext = document.querySelector('.news__next');
const cardWidth = newsCards[0].offsetWidth + 20; // 20 = gap
let newsIndex = 0;

function updateNewsSlider() {
  newsTrack.style.transform = `translateX(-${newsIndex * cardWidth}px)`;
}

newsNext.addEventListener('click', () => {
  if(newsIndex < newsCards.length - 3){ // show 3 cards at a time
    newsIndex++;
    updateNewsSlider();
  }
});

newsPrev.addEventListener('click', () => {
  if(newsIndex > 0){
    newsIndex--;
    updateNewsSlider();
  }
});

// Auto scroll every 4 seconds
setInterval(() => {
  newsIndex++;
  if(newsIndex > newsCards.length - 3) newsIndex = 0;
  updateNewsSlider();
}, 4000);


document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});
