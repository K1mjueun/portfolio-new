// main page 1
const mainPage1 = document.querySelector("#main-page");

displayChange(myPhoto,startPage2,mainPage1);

const workBox = document.querySelector("#work-box");
const windie = workBox.children[0];
const bubbleroom = workBox.children[1];
const toyproject = workBox.children[2];

const bling = document.querySelector('.my-photo-mini > section:nth-child(2)');

const mpclick1 = document.querySelector('#main-page > #board >.click-1');
const mpclick2 = document.querySelector('#main-page > #board >.click-2');
const mpclick3 = document.querySelector('#main-page > #board >.click-3');

const mparrow1 = document.querySelector('#main-page > #board >.arrow-1');
const mparrow2 = document.querySelector('#main-page > #board >.arrow-2');
const mparrow3 = document.querySelector('#main-page > #board >.arrow-3');

let AppImgWidth = 385;
let AppImgHeight = 380;

mouseoverBigger(windie, mpclick1, mparrow1,AppImgWidth, AppImgHeight);
mouseoverBigger(bubbleroom, mpclick2, mparrow2, AppImgWidth, AppImgHeight);
mouseoverBigger(toyproject, mpclick3, mparrow3,AppImgWidth, AppImgHeight);

mouseleaveSmaller(windie, mpclick1, mparrow1,AppImgWidth, AppImgHeight);
mouseleaveSmaller(bubbleroom, mpclick2, mparrow2,AppImgWidth, AppImgHeight);
mouseleaveSmaller(toyproject, mpclick3, mparrow3,AppImgWidth, AppImgHeight);


let blingBingle = [
  {transform : 'rotate(0deg)'},
  {transform : 'rotate(360deg)'}
];

  let blingBingleTime = {
    duration:1000,
    iterations:1
  };

myPhoto.addEventListener('click', function() {
    setTimeout(function() {
      bling.animate(blingBingle,blingBingleTime);
    },500);
});