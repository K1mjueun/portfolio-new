
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

    for(let i=0; i<heart06.length-1; i++) {
      Appear(heart06[i], Second*(i+1));
    }
    
    for(i=0; i<greetingText.length-1; i++) {
      Appear(greetingText[i], SecondSlow * (i+2));
    }

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
const speechBubble = document.querySelector('.speech-bubble');
const greetingText = speechBubble.children;
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

    for(let i=0; i<lastHeart06.length-1; i++) {
      Appear(lastHeart06[i], Second*(i+1));
    }

    Appear(goodBye1, SecondSlow*2);
    Appear(goodBye2, SecondSlow*3);
};
});