// work-page-toyproject
const wpToyproject = document.querySelector("#work-page-toyproject");
const backBtn3 = document.querySelector("#work-page-toyproject>header>.back>.arrow");

displayChange(toyproject,mainPage1,wpToyproject);
displayChange(backBtn3,wpToyproject,mainPage1);

const toypjWorkProBtns = document.querySelector("#work-page-toyproject > #board > #work-process");

const contactStamp3 = document.querySelector(".contact-stamp-3");
contactStamp(toyproject,contactStamp3);

const leftBtn3 = document.querySelector("#work-page-toyproject > #board > #work-img-slide > .left-button");
const rightBtn3 = document.querySelector("#work-page-toyproject > #board > #work-img-slide > .right-button");

const imgSlideToyproject = document.querySelector("#work-page-toyproject > #board > #work-img-slide");

const toyprojectSlide1 = imgSlideToyproject.children[1];
const toyprojectSlide2 = imgSlideToyproject.children[2];

const toyprojectSlides = [toyprojectSlide1,toyprojectSlide2];

toyprojectSlideControl(toyprojectSlides);
toyprojectSlide(leftBtn3,toyprojectSlides);
toyprojectSlide(rightBtn3,toyprojectSlides);

// const wptStickerBox = document.querySelector("#work-page-toyproject > header > .sticker-box");

// for(i=0; i<wptStickerBox.children.length; i++) {
//   wptStickerBox.children[i].style.zIndex = 3;
// };

// const Tsticker1 = wptStickerBox.children[0];
// const Tsticker2 = wptStickerBox.children[1];

// dragNdrop(Tsticker1);
// dragNdrop(Tsticker2);