//windie-mobile-page
const windieMbPage = document.querySelector('#windie-mobile-page');
displayChange(windieWorkProBtns.children[1],wpWindie,windieMbPage);

const windieMbbackBtn = document.querySelector("#windie-mobile-page-1 >#note-board> .mobile-arrow-sticker");
const windieMbTopBtn = document.querySelector("#windie-mobile-page-2 >#note-board>.mobile-top-sticker");

displayChange(windieMbbackBtn,windieMbPage,wpWindie);
// 뒤로가기
tothetop(windieMbTopBtn);