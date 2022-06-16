// contact page
const contactPage = document.querySelector("#contact-page");
contactPage.style.display ="none";
console.log(contactPage);

console.log(contactStamp1);
console.log(contactStamp2);
console.log(contactStamp3);

displayChange(contactStamp1,wpWindie,contactPage);
displayChange(contactStamp2,wpBubbleroom,contactPage);
displayChange(contactStamp3,wpToyproject,contactPage);

const goFirstPage = document.querySelector("#note-board-2 > h5");
displayChange(goFirstPage,contactPage,startPage1);