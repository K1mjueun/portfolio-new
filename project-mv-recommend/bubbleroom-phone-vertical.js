
let displayAppear2 = [
  {opacity: .7},
  {opacity: 1},
];

  let displayChangeTime2 = {
    duration: 1000,
    iterations: 1
  };
  //화면 전환 애니메이션

  function displayChange2(element, disappearTarget, appearTarget) {
    element.addEventListener('click', function() {
      disappearTarget.style.display = "none";
      appearTarget.style.display = "flex";
      appearTarget.animate(displayAppear2,displayChangeTime2);
      appearTarget.style.opacity = 1;
    });
  };
  //화면 전환 함수





  //bubble room
  const firstP = document.getElementById("first-page");

  const firstPage = {
    logo : firstP.children[0],
    loginP : document.getElementById("login-page"),
    loginBtn : document.querySelector("#login-page > button"),
    homeP : document.getElementById("home-page")
  }
  displayChange2(firstPage.logo,firstP,firstPage.loginP);
  displayChange2(firstPage.loginBtn,firstPage.loginP,firstPage.homeP);

  const colorPicker = document.getElementById("color-picker");
  const colorPickers = {
    greenPick : colorPicker.children[0],
    bluepurplePick : colorPicker.children[1]
  }
  

  const mvPages = {
    mvP : document.getElementById("mv-page"),
    mvP2 : document.getElementById("mv-page-2"),
    mvP3 : document.getElementById("mv-page-3"),
    mvP4 : document.getElementById("mv-page-4")
  }
  displayChange2(colorPickers.bluepurplePick,firstPage.homeP,mvPages.mvP);
  displayChange2(colorPickers.greenPick,firstPage.homeP,mvPages.mvP3);

  const miniColorPickers = {
    mvPminiColorPicker : document.querySelector("#mv-page > .mini-color-picker"),
    mvP3miniColorPicker : document.querySelector("#mv-page-3 > .mini-color-picker")
  }
  displayChange2(miniColorPickers.mvPminiColorPicker,mvPages.mvP,mvPages.mvP2);
  displayChange2(miniColorPickers.mvP3miniColorPicker,mvPages.mvP3,mvPages.mvP4);

  const mvPageBackBtns = {
    mvPbackBtn : document.querySelector("#mv-page > aside"),
    mvP2backBtn : document.querySelector("#mv-page-2 > aside"),
    mvP3backBtn : document.querySelector("#mv-page-3 > aside"),
    mvP4backBtn : document.querySelector("#mv-page-4 > aside")
  }
  displayChange2(mvPageBackBtns.mvPbackBtn,mvPages.mvP,firstPage.homeP);
  displayChange2(mvPageBackBtns.mvP2backBtn,mvPages.mvP2,mvPages.mvP);
  displayChange2(mvPageBackBtns.mvP3backBtn,mvPages.mvP3,firstPage.homeP);
  displayChange2(mvPageBackBtns.mvP4backBtn,mvPages.mvP4,mvPages.mvP3);


  const menuBtn = firstPage.homeP.children[0];
  const menuP = document.getElementById("menu-page");
  displayChange2(menuBtn,firstPage.homeP,menuP);

  const miniLogotoHome = menuP.children[0];
  displayChange2(miniLogotoHome,menuP,firstPage.homeP);

  const menuList = document.querySelector("#menu-page > #menu");
  const searchP = document.getElementById("search-page");
  displayChange2(menuList.children[2],menuP,searchP);

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
  displayChange2(searchPbackBtn,searchP,menuP);

  const searchThings1 = {
    bubbles : searchBubbles.children,
    directorP : document.getElementById("director-page"),
    moodP : document.getElementById("mood-page"),
    colorP : document.getElementById("color-page")
  }
  displayChange2(searchThings1.bubbles[0],searchP,searchThings1.directorP);
  displayChange2(searchThings1.bubbles[1],searchP,searchThings1.moodP);
  displayChange2(searchThings1.bubbles[5],searchP,searchThings1.colorP);


  const searchThings2 = {
    searchNcategoryP : document.getElementById("search-and-category-page"),
    directorPbackBtn : document.querySelector("#director-page > aside"),
    moodPbackBtn : document.querySelector("#mood-page > aside"),
    colorPbackBtn : document.querySelector("#color-page > aside")
  }
  displayChange2(searchThings2.directorPbackBtn,searchThings1.directorP,searchThings2.searchNcategoryP);
  displayChange2(searchThings2.moodPbackBtn,searchThings1.moodP,searchThings2.searchNcategoryP);
  displayChange2(searchThings2.colorPbackBtn,searchThings1.colorP,searchThings2.searchNcategoryP);


  const sNcPbackBtn = searchThings2.searchNcategoryP.children[0];
  displayChange2(sNcPbackBtn,searchThings2.searchNcategoryP,menuP);
