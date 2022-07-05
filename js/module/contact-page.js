// contact page
const contactPage = document.querySelector("#contact-page");
contactPage.style.display ="none";
console.log(contactPage);

// console.log(contactStamp1);
// console.log(contactStamp2);
// console.log(contactStamp3);

displayChange(contactStamp1,wpWindie,contactPage);
displayChange(contactStamp2,wpBubbleroom,contactPage);
displayChange(contactStamp3,wpToyproject,contactPage);

const goFirstPage = document.querySelector("#contact-page > h5");
displayChange(goFirstPage,contactPage,startPage1);

let banchak = [
  {opacity: 1},
  {opacity: 0.1},
  {opacity: 1},
];

  let banchakTime = {
    duration: 4000,
    iterations: Infinity
  };

const decoSticker = document.querySelector("#contact-page > #deco-sticker");
if(contactPage.style.opacity = 1) {
    decoSticker.animate(banchak,banchakTime);
};

const emailAddress = document.querySelector("#personal-1 > h3");
const githubAddress = document.querySelector("#personal-2 > h4");

let addressMoving = [
  { transform: 'rotate(-1deg)'},
  { transform: 'rotate(1deg)'},
  { transform: 'rotate(0deg)'}
];
  let addressMovingTime = {
    duration: 700,
    iterations: 1
  };

function mouseOver(eventtarget) {
  eventtarget.addEventListener('mouseover', function() {
    eventtarget.animate(addressMoving,addressMovingTime);
  });
};

mouseOver(emailAddress);
mouseOver(githubAddress);