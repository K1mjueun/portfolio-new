// toyproject-process-page
const toyprojectProPage = document.querySelector('#toyproject-process-page');
displayChange(toypjWorkProBtns.children[0],wpToyproject,toyprojectProPage);

const toypjTopBtn = document.querySelector("#toyproject-process-page > .process-page-5 > .process-board > .top-sticker");

const toypjProbackBtn = document.querySelector("#toyproject-process-page > .process-page-1 > header > .back");
displayChange(toypjProbackBtn,toyprojectProPage,wpToyproject);
// 뒤로가기

tothetop(toypjTopBtn);

const pptStickerBox = document.querySelector("#toyproject-process-page > .process-page-1 > header > .sticker-box");

for(i=0; i<pptStickerBox.children.length; i++) {
  pptStickerBox.children[i].style.zIndex = 3;
};

const pptTsticker1 = pptStickerBox.children[0];
const pptTsticker2 = pptStickerBox.children[1];

dragNdrop(pptTsticker1);
dragNdrop(pptTsticker2);