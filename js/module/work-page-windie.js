// work-page-windie
const wpWindie = document.querySelector("#work-page-windie");
const backBtn1 = document.querySelector("#work-page-windie>header>.back>.arrow");

displayChange(windie,mainPage1,wpWindie);
displayChange(backBtn1,wpWindie,mainPage1);

const windieWorkProBtns = document.querySelector("#work-page-windie > #board > #work-process");

const contactStamp1 = document.querySelector(".contact-stamp-1");
contactStamp(windie,contactStamp1);

const leftBtn1 = document.querySelector("#work-page-windie > #board > #work-img-slide > .left-button");
const rightBtn1 = document.querySelector("#work-page-windie > #board > #work-img-slide > .right-button");

const imgSlideWindie = document.querySelector("#work-page-windie > #board > #work-img-slide");

const windieSlide1 = imgSlideWindie.children[1];
const windieSlide2 = imgSlideWindie.children[2];
const windieSlide3 = imgSlideWindie.children[3];
const windieSlide4 = imgSlideWindie.children[4];
const windieSlide5 = imgSlideWindie.children[5];

const windieSlides = [windieSlide1,windieSlide2,windieSlide3,windieSlide4,windieSlide5];

windieSlideControl(windieSlides);
windieSlide(leftBtn1,windieSlides);
windieSlide(rightBtn1,windieSlides);

const wpwStickerBox = document.querySelector("#work-page-windie > header > .sticker-box");

for(i=0; i<wpwStickerBox.children.length; i++) {
  wpwStickerBox.children[i].style.zIndex = 3;
};

const Wsticker1 = wpwStickerBox.children[0];
const Wsticker2 = wpwStickerBox.children[1];

// Wsticker1.addEventListener('mousemove', (event) => {
//   let top = event.clientX;
//   let left = event.clientY;
//   Wsticker1.style.right = top + 'px';
//   Wsticker1.style.top = left + 'px';
// });

// Wsticker2.addEventListener('mousemove', (event) => {
//   let top = event.clientX;
//   let left = event.clientY;
//   Wsticker2.style.right = top + 'px';
//   Wsticker2.style.top = left + 'px';
// });

dragNdrop(Wsticker1);
dragNdrop(Wsticker2);