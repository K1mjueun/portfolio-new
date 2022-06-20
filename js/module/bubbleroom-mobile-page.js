//bubbleroom-mobile-page
const bubbleroomMbPage = document.querySelector('#bubbleroom-mobile-page');
displayChange(bubbleroomWorkProBtns.children[2],wpBubbleroom,bubbleroomMbPage);

const bubbleMbbackBtn = document.querySelector("#bubbleroom-mobile-page > .back");
const bubbleMbTopBtn = document.querySelector("#bubbleroom-mobile-page > .top-sticker");

displayChange(bubbleMbbackBtn,bubbleroomMbPage,wpBubbleroom);
// 뒤로가기
tothetop(bubbleMbTopBtn);