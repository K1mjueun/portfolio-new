
let displayAppear = [
  {opacity: .7},
  {opacity: 1},
];

  let displayChangeTime = {
    duration: 1000,
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
  
  // const init = {
  //   root: document.getElementById("root"),
  //   slide: {
  //     leftButton: document.getElementById("slide-button-left"),
  //     imgWrapper: document.getElementById("slide-img-wrapper"),
  //     imgItems: Array.from(document.querySelectorAll("#slide-img-wrapper > div")).reverse(),
  //     rightButton: document.getElementById("slide-button-left"),
  //   }
  // };
  //하나하나 const하지 않고 정리하기






  //bubble room
  const firstP = document.getElementById("first-page");
  const logo = firstP.children[0];
  const loginP = document.getElementById("login-page");
  displayChange(logo,firstP,loginP);
  const loginBtn = document.querySelector("#login-page > button")
  const homeP = document.getElementById("home-page");
  displayChange(loginBtn,loginP,homeP);


  const colorPicker = document.getElementById("color-picker");
  const greenPick = colorPicker.children[0];
  const bluepurplePick = colorPicker.children[1];

  const mvP = document.getElementById("mv-page");
  const mvP2 = document.getElementById("mv-page-2");
  const mvP3 = document.getElementById("mv-page-3");
  const mvP4 = document.getElementById("mv-page-4");
  displayChange(bluepurplePick,homeP,mvP);
  displayChange(greenPick,homeP,mvP3);


  const mvPminiColorPicker = document.querySelector("#mv-page > .mini-color-picker");
  const mvP3miniColorPicker = document.querySelector("#mv-page-3 > .mini-color-picker");
  displayChange(mvPminiColorPicker,mvP,mvP2);
  displayChange(mvP3miniColorPicker,mvP3,mvP4);


  const mvPbackBtn = document.querySelector("#mv-page > header");
  const mvP2backBtn = document.querySelector("#mv-page-2 > header");
  const mvP3backBtn = document.querySelector("#mv-page-3 > header");
  const mvP4backBtn = document.querySelector("#mv-page-4 > header");
  displayChange(mvPbackBtn,mvP,homeP);
  displayChange(mvP2backBtn,mvP2,mvP);
  displayChange(mvP3backBtn,mvP3,homeP);
  displayChange(mvP4backBtn,mvP4,mvP3);

  const menuBtn = homeP.children[0];
  const menuP = document.getElementById("menu-page");
  displayChange(menuBtn,homeP,menuP);

  const miniLogotoHome = menuP.children[0];
  displayChange(miniLogotoHome,menuP,homeP);

  const menuList = document.querySelector("#menu-page > #menu");
  const searchP = document.getElementById("search-page");
  displayChange(menuList.children[2],menuP,searchP);

  const searchBubbles = searchP.children[2];
  const searchIcon = searchP.children[1].children[0];

  let bubblesTime = {
    duration: 1000,
    iterations: 1
  };

  searchIcon.addEventListener('click', function() {
    searchBubbles.animate(displayAppear,bubblesTime);
    searchBubbles.style.opacity = 1;
  });

  const searchPbackBtn = searchP.children[0];
  displayChange(searchPbackBtn,searchP,menuP);

  const bubbles = searchBubbles.children;
  const directorP = document.getElementById("director-page");
  const moodP = document.getElementById("mood-page");
  const colorP = document.getElementById("color-page");

  displayChange(bubbles[0],searchP,directorP);
  displayChange(bubbles[1],searchP,moodP);
  displayChange(bubbles[5],searchP,colorP);

  const searchNcategoryP = document.getElementById("search-and-category-page");
  const directorPbackBtn = document.querySelector("#director-page > header");
  const moodPbackBtn = document.querySelector("#mood-page > header");
  const colorPbackBtn = document.querySelector("#color-page > header");
  displayChange(directorPbackBtn,directorP,searchNcategoryP);
  displayChange(moodPbackBtn,moodP,searchNcategoryP);
  displayChange(colorPbackBtn,colorP,searchNcategoryP);


  const sNcPbackBtn = searchNcategoryP.children[0];
  displayChange(sNcPbackBtn,searchNcategoryP,menuP);
