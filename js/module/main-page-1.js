// main page 1
const mainPage1 = document.querySelector("#main-page");

const blind = document.querySelector(".blind");
const shadow1 = document.querySelector(".shadow-1");
const shadow2 = document.querySelector(".shadow-2");
const shadow3 = document.querySelector(".shadow-3");

const windieMemo = document.querySelector(".windie-memo");
const bubbleroomMemo = document.querySelector(".bubbleroom-memo");
const toypjMemo = document.querySelector(".toyproject-memo");

const bling = document.querySelector('.my-photo-mini > section:nth-child(2)');

const mpclick1 = document.querySelector('#main-page > #note-board >.click-1');
const mpclick2 = document.querySelector('#main-page > #note-board >.click-2');
const mpclick3 = document.querySelector('#main-page > #note-board >.click-3');

const mparrow1 = document.querySelector('#main-page > #note-board >.arrow-1');
const mparrow2 = document.querySelector('#main-page > #note-board >.arrow-2');
const mparrow3 = document.querySelector('#main-page > #note-board >.arrow-3');

let windieMemoWidth = 350;
let windieMemoHeight = 400;

let bubbleroomMemoWidth = 400;
let bubbleroomMemoHeight = 410;

let toypjMemoWidth = 300;
let toypjMemoHeight = 450;

mouseoverBigger(windieMemo, mpclick1, mparrow1,windieMemoWidth, windieMemoHeight);
mouseoverBigger(bubbleroomMemo, mpclick2, mparrow2, bubbleroomMemoWidth, bubbleroomMemoHeight);
mouseoverBigger(toypjMemo, mpclick3, mparrow3,toypjMemoWidth, toypjMemoHeight);

mouseleaveSmaller(windieMemo, mpclick1, mparrow1,windieMemoWidth, windieMemoHeight);
mouseleaveSmaller(bubbleroomMemo, mpclick2, mparrow2,bubbleroomMemoWidth, bubbleroomMemoHeight);
mouseleaveSmaller(toypjMemo, mpclick3, mparrow3,toypjMemoWidth, toypjMemoHeight);

displayChange(myPhoto,startPage2,mainPage1);

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