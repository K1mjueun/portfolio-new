
let photoMoving = [
  { transform: 'rotate(-3deg)'},
  { transform: 'rotate(3deg)'},
  { transform: 'rotate(-3deg)'}
];
  let photoMovingTime = {
    duration: 1500,
    iterations: Infinity
  };
  //사진 흔들거리는 효과

  function photoShaking (eventtarget, animation, time) {
  setInterval(function(){  
  eventtarget.animate(animation, time);
  },1500);
  };
  //사진 흔들거리는 효과

function mouseOverOut(element,eventtarget) {
  element.addEventListener('mouseover', function() {
    eventtarget.style.display = "flex";
  });
  element.addEventListener('mouseout', function() {
    eventtarget.style.display = "none";
  });
};
//mouseover, mouseout 했을 때 display 효과

let displayAppear = [
  {opacity: 0.7},
  {opacity: 0.8},
  {opacity: 0.9},
  {opacity: 1},
];

  let displayChangeTime = {
    duration: 500,
    iterations: 1
  };
  //화면 전환 애니메이션

  function displayChange(element, disappearTarget, appearTarget) {
    element.addEventListener('click', function() {
      disappearTarget.style.display = "none";
      appearTarget.style.display = "flex";
      appearTarget.animate(displayAppear,displayChangeTime);
      appearTarget.style.opacity = 1;
    });
  };
  //화면 전환 함수

  function mouseoverBigger (target, widthsize, heightsize) {
    target.addEventListener('mouseover', function() {
      target.style.zIndex = 2;
      target.style.width = (widthsize+20)+"px";
      target.style.height = (heightsize+20)+"px";
      target.style.transform = "rotate(1deg)";
    });
  };
  //작업물 마우스오버하면 커지는 효과

  function mouseleaveSmaller (target, widthsize, heightsize) {
      target.addEventListener('mouseleave', function() {
        target.style.zIndex = 1;
        target.style.width = widthsize+"px";
        target.style.height = heightsize+"px";
        target.style.transform = "rotate(0deg)";
    });
  };
  //작업물 마우스리브하면 작아지는 효과

  function tothetop(element) {
    element.addEventListener('click',function(){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        transition: ".5s"
      });
    });
  }
  //탑버튼 효과

  function contactStampAppear(element,target) {
    element.addEventListener('click', function() {
      setTimeout(function() {
      target.style.display="flex";
      },3000);
    });
  };
  //마지막 화면(contact 화면)으로 가는 도장 등장

  function windieSlideControl(arr) {
    arr.forEach((value) => {
      let getDatasetValue = Number(value.dataset.slideWindie);
      if (getDatasetValue === current) {
        value.style.display = "flex";
      } else {
        value.style.display = "none";
      }
    });
  }
  //슬라이더 작동을 위한 데이터셋 컨트롤(윈디용)

  let current = 0;
  function windieSlide(button,targetArr) {
    button.addEventListener('click', function () {
      if (button === leftBtn1) {
        current--;
        if (current < 0) {
          current = targetArr.length - 1;
        }
        windieSlideControl(targetArr);
      }
      if (button === rightBtn1) {
        current++;
        if (current >= targetArr.length) {
          current = 0;
        }
        windieSlideControl(targetArr);
      }
    });
  };
  //슬라이더 작동(윈디용)

  function bubbleroomSlideControl(arr) {
    arr.forEach((value) => {
      let getDatasetValue = Number(value.dataset.slideBubbleroom);
      if (getDatasetValue === current) {
        value.style.display = "flex";
      } else {
        value.style.display = "none";
      }
    });
  }
  //슬라이더 작동을 위한 데이터셋 컨트롤(버블룸용)

  function bubbleroomSlide(button,targetArr) {
    button.addEventListener('click', function () {
      if (button === leftBtn2) {
        current--;
        if (current < 0) {
          current = targetArr.length - 1;
        }
        bubbleroomSlideControl(targetArr);
      }
      if (button === rightBtn2) {
        current++;
        if (current >= targetArr.length) {
          current = 0;
        }
        bubbleroomSlideControl(targetArr);
      }
    });
  };
  //슬라이더 작동(버블룸용)

  function toyprojectSlideControl(arr) {
    arr.forEach((value) => {
      //forEach를 그냥 넘어가지 마라
      let getDatasetValue = Number(value.dataset.slideToyproject);
      if (getDatasetValue === current) {
        value.style.display = "flex";
      } else {
        value.style.display = "none";
      }
    });
  }
  //슬라이더 작동을 위한 데이터셋 컨트롤(토이프로젝트용)

  function toyprojectSlide(button,targetArr) {
    button.addEventListener('click', function () {
      if (button === leftBtn3) {
        current--;
        if (current < 0) {
          current = targetArr.length - 1;
        }
        toyprojectSlideControl(targetArr);
      }
      if (button === rightBtn3) {
        current++;
        if (current >= targetArr.length) {
          current = 0;
        }
        toyprojectSlideControl(targetArr);
      }
    });
  };
  //슬라이더 작동(토이프로젝트용)

  function dragNdrop (target) {
    target.addEventListener("dragstart", (event) => {
      console.log("drag start");
    });

    target.addEventListener("drag", (event) => {
      console.log("dragging");
    });

    target.addEventListener("dragend", (event) => {
      let top = event.clientY;
      let left = event.clientX;
      target.style.top = top + "px";
      target.style.left = left + "px";

      console.log("drag finished");
    });
  };
  //스티커 붙이기

//   function mouseMove(target) {
//   target.addEventListener('mousemove', (event) => {
//   let left = event.clientX;
//   let top = event.clientY;
//   target.style.left = left + 'px';
//   target.style.top = top + 'px';
// });
//   };
//마우스 무브..안따라오고 피해다님;

//마우스무브나 드래그앤드롭이 다 안되는 이유는 어떤 이벤트가 다 안끝나있기 때문일 수도 있고, 특정 화면에서만 안되는거라면 그 화면의 어떤 특징 때문일 것 - console찍으면서 원인을 찾아보기
//#board의 문제는 아님
//#work-img-slide도 문제가 아님
//removeEventListener, true/false가 필요할 수 있음

//좌표를 이해하셔야겠네