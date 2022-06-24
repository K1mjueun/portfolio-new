// windie-process-page
const windieProPage = document.querySelector('#windie-process-page');
displayChange(windieWorkProBtns.children[0],wpWindie,windieProPage);

const windieTopBtn = document.querySelector("#windie-process-page > #process-page-5 > #process-board > .top-sticker");

const windieProbackBtn = document.querySelector("#windie-process-page > #process-page-1 > header > .back");
displayChange(windieProbackBtn,windieProPage,wpWindie);
// 뒤로가기

tothetop(windieTopBtn);

const ppwStickerBox = document.querySelector("#windie-process-page > #process-page-1 > header > .sticker-box");

for(i=0; i<ppwStickerBox.children.length; i++) {
  ppwStickerBox.children[i].style.zIndex = 3;
};

const ppwWsticker1 = ppwStickerBox.children[0];
const ppwWsticker2 = ppwStickerBox.children[1];

dragNdrop(ppwWsticker1);
dragNdrop(ppwWsticker2);