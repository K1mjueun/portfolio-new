// bubbleroom-process-page
const bubbleroomProPage = document.querySelector('#bubbleroom-process-page');
displayChange(bubbleroomWorkProBtns.children[0],wpBubbleroom,bubbleroomProPage);

const bubbleroomTopBtn = document.querySelector("#bubbleroom-process-page > #process-page-5 > #process-board > .top-sticker");

const bubbleroomProbackBtn = document.querySelector("#bubbleroom-process-page > #process-page-1 > header > .back");
displayChange(bubbleroomProbackBtn,bubbleroomProPage,wpBubbleroom);
// 뒤로가기

tothetop(bubbleroomTopBtn);

const ppbStickerBox = document.querySelector("#bubbleroom-process-page > #process-page-1 > header > .sticker-box");

for(i=0; i<ppbStickerBox.children.length; i++) {
  ppbStickerBox.children[i].style.zIndex = 3;
};

const ppbBsticker1 = ppbStickerBox.children[0];
const ppbBsticker2 = ppbStickerBox.children[1];

dragNdrop(ppbBsticker1);
dragNdrop(ppbBsticker2);