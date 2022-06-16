//toyproject-pc-page
const toyprojectPCPage = document.querySelector('#toyproject-pc-page');
displayChange(toypjWorkProBtns.children[1],wpToyproject,toyprojectPCPage);

const toypjPCbackBtn = document.querySelector("#mandoo-back >.pc-arrow-sticker");
// const toypjPCTopBtn = document.querySelector("#toyproject-pc-page > #note-board>.pc-top-sticker");

displayChange(toypjPCbackBtn,toyprojectPCPage,wpToyproject);
// 뒤로가기
// tothetop(toypjPCTopBtn);








//작동하는 토이프로젝트 PC 화면

//배경 + 페이지 1
const mandooBack = document.querySelector('#mandoo-back');
const mandooFace = mandooBack.children;
const page1 = document.querySelector(".page-1");
const ballNtext = page1.children;

for (let i = 8; i < 16; i++) {
  mandooFace[i].style.display = "none";
};

let Tong = [{
    transform: 'translateY(-15px)'
  },
  {
    transform: 'translateY(15px)'
  },
  {
    transform: 'translateY(-15px)'
  },
];
let TongTiming = {
  duration: 1000,
  iterations: Infinity
};
ballNtext[0].animate(Tong, TongTiming);

let movingFace1 = [{
    transform: 'rotate(5deg)'
  },
  {
    transform: 'rotate(-5deg)'
  },
  {
    transform: 'rotate(5deg)'
  }
];
let movingFace2 = [{
    transform: 'rotate(-5deg)'
  },
  {
    transform: 'rotate(5deg)'
  },
  {
    transform: 'rotate(-5deg)'
  }
];

let movingTiming = {
  duration: 2000,
  iterations: Infinity
};

for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    mandooFace[i].animate(movingFace1, movingTiming);
  } else {
    mandooFace[i].animate(movingFace2, movingTiming);
  }
};

//페이지 2
const page2 = document.querySelector(".page-2");
const speechBubble = document.querySelector('.speech-bubble');
const greetingText = speechBubble.children;

let Second = 300;
let SecondSlow = 1500;

function Appear(element, time) {
  setTimeout(function () {
    element.style.display = 'flex';
  }, time);
};

ballNtext[0].addEventListener('click', () => {
  page1.style.display = "none";
  page2.style.display = "flex";

  if (page2.style.display = "flex") {

    Appear(heart06[0], Second);
    Appear(heart06[1], Second * 2);
    Appear(heart06[2], Second * 3);
    Appear(heart06[3], Second * 4);
    Appear(heart06[4], Second * 5);
    Appear(heart06[5], Second * 6);
    Appear(heart06[6], Second * 7);

    Appear(greetingText[0], SecondSlow * 2);
    Appear(greetingText[1], SecondSlow * 3);
    Appear(greetingText[2], SecondSlow * 4);
    Appear(greetingText[3], SecondSlow * 5);
    Appear(greetingText[4], SecondSlow * 6);
    Appear(greetingText[5], SecondSlow * 7);

    Appear(snackBone, SecondSlow * 8);

    let movingSnackBone = [{
        transform: 'rotate(-5deg)'
      },
      {
        transform: 'rotate(10deg)'
      },
      {
        transform: 'rotate(-5deg)'
      }
    ];

    let snackBoneTiming = {
      duration: 800,
      iterations: Infinity
    };
    snackBone.animate(movingSnackBone, snackBoneTiming);
  }
});

const heart06 = page2.children;
const mandooPhoto = document.querySelector('.photo');
const snackBone = document.querySelector(".snack-bone");

snackBone.style.display = "none";

function displayNone(element, elemlength) {
  for (i = 0; i < elemlength; i++) {
    element[i].style.display = "none";
  };
};
displayNone(heart06, heart06.length - 3);
displayNone(greetingText, greetingText.length);

//페이지 3
const page3 = document.querySelector('.page-3');

snackBone.addEventListener('click', function () {
  page2.style.display = "none";
  page3.style.display = "flex";
  mandooBack.style.height = "500vh";
  for (let i = 8; i < 16; i++) {
    mandooFace[i].style.display = "flex";
  };
});

//페이지 4
const page4 = document.querySelector('.page-4');
const mandooIllu = document.querySelector('.mandoo-illu-bottom');

mandooIllu.addEventListener('click', function () {
  page3.style.display = "none";
  page4.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    transition: "1s"
  });
});

//페이지 5
const page5 = document.querySelector('.page-5');
const kongsunIllu = document.querySelector('.kongsun-illu-bottom');
const lastHeart06 = page5.children;
const goodBye1 = document.querySelector('.page-5 > h1');
const goodBye2 = document.querySelector('.page-5 > h2');
console.log(lastHeart06);
console.log(goodBye1);
console.log(goodBye2);

kongsunIllu.addEventListener('click', function () {
  page4.style.display = "none";
  page5.style.display = "flex";
  mandooBack.style.height = "100vh";
  for (let i = 8; i < 16; i++) {
    mandooFace[i].style.display = "none";

    // if (page5.style.display = "flex") {
    //   for(let i=0; i<lastHeart06.length; i++) {
    //     Appear(lastHeart06[i], Second*i);
    // };
    // ↑ 이걸 쓰니까 맨 밑 goodBye들 Appear속도가 너무 빨라짐

    Appear(lastHeart06[0], Second);
    Appear(lastHeart06[1], Second * 2);
    Appear(lastHeart06[2], Second * 3);
    Appear(lastHeart06[3], Second * 4);
    Appear(lastHeart06[4], Second * 5);
    Appear(lastHeart06[5], Second * 6);
    Appear(lastHeart06[6], Second * 7);

    Appear(goodBye1, SecondSlow*2);
    Appear(goodBye2, SecondSlow*3);
};
});