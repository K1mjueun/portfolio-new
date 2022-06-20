//windie-mobile-page
const windieMbPage = document.querySelector('#windie-mobile-page');
displayChange(windieWorkProBtns.children[1],wpWindie,windieMbPage);

const windieMbbackBtn = document.querySelector("#windie-mobile-page > .back");
const windieMbTopBtn = document.querySelector("#windie-mobile-page > .top-sticker");

displayChange(windieMbbackBtn,windieMbPage,wpWindie);
// 뒤로가기
tothetop(windieMbTopBtn);