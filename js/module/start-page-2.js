// start page2
const startPage2 = document.querySelector('#start-2');
const myPhoto = document.querySelector("#start-2 > .portfolio-text > .my-photo");
const arrow1 = document.querySelector("#start-2 > .arrow-1");
const clickText2 = startPage2.children[4];

shaking(myPhoto,photoMoving,photoMovingTime);

displayChange(myPhotoHide, startPage1, startPage2);

mouseOverLeave(myPhoto,arrow1);
mouseOverLeave(myPhoto,clickText2);