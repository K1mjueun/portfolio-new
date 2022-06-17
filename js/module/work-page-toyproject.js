// work-page-toyproject
const wpToyproject = document.querySelector("#work-page-toyproject");
const backBtn3 = document.querySelector("#work-page-toyproject> #note-board>.arrow-sticker");

displayChange(toyproject,mainPage1,wpToyproject);
displayChange(backBtn3,wpToyproject,mainPage1);

const toypjWorkProBtns = document.querySelector("#work-page-toyproject > #work-process");

const contactStamp3 = document.querySelector(".contact-stamp-3");
contactStamp(toyproject,contactStamp3);

const leftBtn3 = document.querySelector("#work-page-toyproject > #work-img-slide > .left-button");
const rightBtn3 = document.querySelector("#work-page-toyproject > #work-img-slide > .right-button");

const imgSlideToyproject = document.querySelector("#work-page-toyproject > #board > #work-img-slide");

const toyprojectSlide1 = imgSlideToyproject.children[1];
const toyprojectSlide2 = imgSlideToyproject.children[2];

const toyprojectSlides = [toyprojectSlide1,toyprojectSlide2];

toyprojectSlideControl(toyprojectSlides);
toyprojectSlide(leftBtn3,toyprojectSlides);
toyprojectSlide(rightBtn3,toyprojectSlides);