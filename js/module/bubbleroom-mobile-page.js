//bubbleroom-mobile-page
const bubbleroomMbPage = document.querySelector('#bubbleroom-mobile-page');
displayChange(bubbleroomWorkProBtns.children[2],wpBubbleroom,bubbleroomMbPage);

const bubbleMbbackBtn = document.querySelector("#bubbleroom-mobile-page-1 >#note-board> .mobile-arrow-sticker");
const bubbleMbTopBtn = document.querySelector("#bubbleroom-mobile-page-2 >#note-board>.mobile-top-sticker");

displayChange(bubbleMbbackBtn,bubbleroomMbPage,wpBubbleroom);
// 뒤로가기
tothetop(bubbleMbTopBtn);