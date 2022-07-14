// work-page-windie
const wpWindie = document.getElementById("work-page-windie");

const windieSlides = {
    backBtn1 : document.querySelector("#work-page-windie>header>.back>.arrow"),
    windieWorkProBtns : document.querySelector("#work-page-windie > .board > .work-process"),
    windieWorkProBtns : document.querySelector("#work-page-windie > .board > .work-process"),
    contactStamp1 : document.querySelector("#work-page-windie > .board > .contact-stamp"),
    leftBtn1 : document.querySelector("#work-page-windie > .board > .work-img-slide > .left-button"),
    rightBtn1 : document.querySelector("#work-page-windie > .board > .work-img-slide > .right-button"),
    imgSlideWindie : document.querySelector("#work-page-windie > .board > .work-img-slide"),

    windieSlideContainer : {
      imgWrapper : document.getElementById("windie-slide-container"),
      imgSlides : Array.from(document.querySelectorAll("#windie-slide-container > section"))
    }
};

displayChange(windie,mainPage1,wpWindie);
displayChange(windieSlides.backBtn1,wpWindie,mainPage1);

contactStampAppear(windie,windieSlides.contactStamp1);

windieSlideControl(windieSlides.windieSlideContainer.imgSlides);
windieSlide(windieSlides.leftBtn1,windieSlides.windieSlideContainer.imgSlides);
windieSlide(windieSlides.rightBtn1,windieSlides.windieSlideContainer.imgSlides);

const wpwStickerBox = document.querySelector("#work-page-windie > header > .sticker-box");

for(i=0; i<wpwStickerBox.children.length; i++) {
  wpwStickerBox.children[i].style.zIndex = 3;
};

const Wsticker1 = wpwStickerBox.children[0];
const Wsticker2 = wpwStickerBox.children[1];

dragNdrop(Wsticker1);
dragNdrop(Wsticker2);