// main page 1
const mainPage1 = document.querySelector("#main-page");

displayChange(myPhoto,startPage2,mainPage1);

const workBox = document.querySelector("#work-box");
const windie = workBox.children[0];
const bubbleroom = workBox.children[1];
const toyproject = workBox.children[2];

const bling = document.querySelector('.my-photo-mini > section:nth-child(2)');

let AppImgWidth = 385;
let AppImgHeight = 380;

mouseoverBigger(windie,AppImgWidth, AppImgHeight);
mouseoverBigger(bubbleroom, AppImgWidth, AppImgHeight);
mouseoverBigger(toyproject,AppImgWidth, AppImgHeight);

mouseleaveSmaller(windie, AppImgWidth, AppImgHeight);
mouseleaveSmaller(bubbleroom, AppImgWidth, AppImgHeight);
mouseleaveSmaller(toyproject, AppImgWidth, AppImgHeight);


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

const mainStickerBox = document.querySelector("#main-page > header > .sticker-box");
const Wsticker = mainStickerBox.children[0];
const Bsticker = mainStickerBox.children[1];
const Tsticker = mainStickerBox.children[2];

for(i=0; i<mainStickerBox.children.length; i++) {
  mainStickerBox.children[i].style.zIndex = 3;
};

dragNdrop(Wsticker);
dragNdrop(Bsticker);
dragNdrop(Tsticker);