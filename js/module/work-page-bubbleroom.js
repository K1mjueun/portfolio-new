// work-page-bubbleroom
const wpBubbleroom = document.querySelector("#work-page-bubbleroom");
const backBtn2 = document.querySelector("#work-page-bubbleroom>#note-board>.arrow-sticker");

displayChange(bubbleroomMemo,mainPage1,wpBubbleroom);
displayChange(backBtn2,wpBubbleroom,mainPage1);

const bubbleroomWorkProBtns = document.querySelector("#work-page-bubbleroom > #work-process");

const contactStamp2 = document.querySelector(".contact-stamp-2");
contactStamp(bubbleroomMemo,contactStamp2);

const leftBtn2 = document.querySelector("#work-page-bubbleroom > #work-img-slide > .left-button");
const rightBtn2 = document.querySelector("#work-page-bubbleroom > #work-img-slide > .right-button");

const imgSlideBubbleroom = document.querySelector("#work-page-bubbleroom > #work-img-slide");

const bubbleroomSlide1 = imgSlideBubbleroom.children[1];
const bubbleroomSlide2 = imgSlideBubbleroom.children[2];
const bubbleroomSlide3 = imgSlideBubbleroom.children[3];
const bubbleroomSlide4 = imgSlideBubbleroom.children[4];
const bubbleroomSlide5 = imgSlideBubbleroom.children[5];
const bubbleroomSlide6 = imgSlideBubbleroom.children[6];
const bubbleroomSlide7 = imgSlideBubbleroom.children[7];
const bubbleroomSlide8 = imgSlideBubbleroom.children[8];

const bubbleroomSlides = [bubbleroomSlide1,bubbleroomSlide2,bubbleroomSlide3,bubbleroomSlide4,bubbleroomSlide5,bubbleroomSlide6,bubbleroomSlide7,bubbleroomSlide8];

bubbleroomSlideControl(bubbleroomSlides);
bubbleroomSlide(leftBtn2,bubbleroomSlides);
bubbleroomSlide(rightBtn2,bubbleroomSlides);