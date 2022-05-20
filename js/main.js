// 주요코스 요소 절대좌표
let startCenter = 0;
let numberCenters = [];
let heightBetween = [];
let endCenter = 0;
let endTop = 0;
let startBottom = 0;

// 주요코스 요소 절대좌표 구하는 함수 호출
getCoordinates();

// 스크롤 이벤트
document.addEventListener("scroll", function () {
  changeNavBgColor();
  changeLinkColor();
  changeLine();
});

// navbar 배경색 변화 기능
function changeNavBgColor() {
  const headerBottom = document
    .querySelector("header")
    .getBoundingClientRect().bottom;
  const nav = document.querySelector("nav");

  let currentScrollValue = window.pageYOffset;

  nav.style.backgroundColor = "rgb(33, 33, 33, 0.5)";

  if (currentScrollValue < headerBottom) {
    nav.style.backgroundColor = "#019267";
  }
}

// navbar link 색깔 변화 기능
function changeLinkColor() {
  let currentScrollValue = window.pageYOffset;

  const introTop = Math.floor(
    window.pageYOffset +
      document.getElementById("intro").getBoundingClientRect().top
  );
  const mainCourseTop = Math.floor(
    window.pageYOffset +
      document.getElementById("main-course").getBoundingClientRect().top
  );
  const recomTop = Math.floor(
    window.pageYOffset +
      document.getElementById("recom").getBoundingClientRect().top
  );

  const navLink = document.querySelectorAll("nav ul li a");

  navLink[0].style.color = "#ffffff";
  navLink[1].style.color = "#ffffff";
  navLink[2].style.color = "#ffffff";

  if (currentScrollValue >= introTop && currentScrollValue < mainCourseTop) {
    console.log("도착");
    navLink[0].style.color = "#ffd365";
  }

  if (currentScrollValue >= mainCourseTop && currentScrollValue < recomTop) {
    console.log("도착");
    navLink[1].style.color = "#ffd365";
  }

  if (currentScrollValue >= recomTop) {
    console.log("도착");
    navLink[2].style.color = "#ffd365";
  }
}

// 주요코스 요소 절대좌표 구하는 함수
function getCoordinates() {
  const numbers = document.querySelectorAll(".number");
  let numbersSorted = [];
  numbers.forEach((number) => numbersSorted.push(number));

  let numberBottoms = [];

  numbers.forEach((number) => {
    numberBottoms.push(
      window.pageYOffset + number.getBoundingClientRect().bottom
    );
    numberCenters.push(
      window.pageYOffset +
        number.getBoundingClientRect().top +
        number.scrollHeight / 2
    );
  });

  numberBottoms = numberBottoms.sort();
  numberCenters = numberCenters.sort();

  const start = document.querySelector(".start");
  startBottom = window.pageYOffset + start.getBoundingClientRect().bottom;
  startCenter =
    window.pageYOffset +
    start.getBoundingClientRect().top +
    start.scrollHeight / 2;

  const end = document.querySelector(".end");
  endCenter =
    window.pageYOffset + end.getBoundingClientRect().top + end.scrollHeight / 2;
  endTop = window.pageYOffset + end.getBoundingClientRect().top;

  for (let i = 0; i < numberBottoms.length; i++) {
    heightBetween.push(numberBottoms[i] - startBottom);
  }
}

// 주요코스 수직선 변화 기능
function changeLine() {
  let windowCenter = window.pageYOffset + window.innerHeight / 2;
  const line = document.querySelector(".vertical-line");

  line.style.height = 0;

  if (windowCenter > startCenter) {
    line.style.height = `${heightBetween[0]}px`;
  }
  if (windowCenter > numberCenters[1]) {
    line.style.height = `${heightBetween[1]}px`;
  }
  if (windowCenter > numberCenters[2]) {
    line.style.height = `${heightBetween[2]}px`;
  }
  if (windowCenter > numberCenters[3]) {
    line.style.height = `${heightBetween[3]}px`;
  }
  if (windowCenter > numberCenters[4]) {
    line.style.height = `${heightBetween[4]}px`;
  }
  if (windowCenter > numberCenters[5]) {
    line.style.height = `${heightBetween[5]}px`;
  }
  if (windowCenter > numberCenters[6]) {
    line.style.height = `${heightBetween[6]}px`;
  }
  if (windowCenter > numberCenters[7]) {
    line.style.height = `${heightBetween[7]}px`;
  }
  if (windowCenter > endCenter) {
    line.style.height = `${endTop - startBottom}px`;
  }
}

function shoeMoving() {
  const shoeLeft = document.getElementById("shoe-left");
  const shoeRight = document.getElementById("shoe-right");
  const shoeLeft2 = document.getElementById("shoe-left2");
  const shoeRight2 = document.getElementById("shoe-right2");

  for (let i = 0; i <= 6; i++) {
    setTimeout(() => {
      shoeLeft.classList.add("shoeMoving1");
      shoeLeft.style.left = `${0 + 280 * i}px`;
      shoeLeft.addEventListener("animationend", () => {
        shoeLeft.classList.remove("shoeMoving1");
      });
    }, 0 + 2000 * i);
    setTimeout(() => {
      shoeRight.classList.add("shoeMoving2");
      shoeRight.style.left = `${70 + 280 * i}px`;
      shoeRight.addEventListener("animationend", () => {
        shoeRight.classList.remove("shoeMoving2");
      });
    }, 500 + 2000 * i);
    setTimeout(() => {
      shoeLeft2.classList.add("shoeMoving3");
      shoeLeft2.style.left = `${140 + 280 * i}px`;
      shoeLeft2.addEventListener("animationend", () => {
        shoeLeft2.classList.remove("shoeMoving3");
      });
    }, 1000 + 2000 * i);
    setTimeout(() => {
      shoeRight2.classList.add("shoeMoving4");
      shoeRight2.style.left = `${210 + 280 * i}px`;
      shoeRight2.addEventListener("animationend", () => {
        shoeRight2.classList.remove("shoeMoving4");
      });
    }, 1500 + 2000 * i);
  }
}

shoeMoving();
setInterval(shoeMoving, 14000);

function pawMoving() {
  const pawFirst = document.getElementById("paw-first");
  const pawSecond = document.getElementById("paw-second");
  const pawThird = document.getElementById("paw-third");
  const pawFourth = document.getElementById("paw-fourth");

  for (let i = 0; i <= 11; i++) {
    setTimeout(() => {
      pawFirst.classList.add("shoeMoving1");
      pawFirst.style.left = `${0 + 160 * i}px`;
      pawFirst.addEventListener("animationend", () => {
        pawFirst.classList.remove("shoeMoving1");
      });
    }, 0 + 1200 * i);
    setTimeout(() => {
      pawSecond.classList.add("shoeMoving2");
      pawSecond.style.left = `${40 + 160 * i}px`;
      pawSecond.addEventListener("animationend", () => {
        pawSecond.classList.remove("shoeMoving2");
      });
    }, 300 + 1200 * i);
    setTimeout(() => {
      pawThird.classList.add("shoeMoving3");
      pawThird.style.left = `${80 + 160 * i}px`;
      pawThird.addEventListener("animationend", () => {
        pawThird.classList.remove("shoeMoving3");
      });
    }, 600 + 1200 * i);
    setTimeout(() => {
      pawFourth.classList.add("shoeMoving4");
      pawFourth.style.left = `${120 + 160 * i}px`;
      pawFourth.addEventListener("animationend", () => {
        pawFourth.classList.remove("shoeMoving4");
      });
    }, 900 + 1200 * i);
  }
}

setTimeout(pawMoving);
setInterval(pawMoving, 14000);

const detail = document.querySelector(".detail");
let slideImg = [];
let idx = 0;
const closeBtn = document.querySelector(".close-btn");

// 추천스팟 클릭이벤트 핸들러
function showDetail(hash) {
  let name = hash;
  let result = {};

  recomSpots.forEach((recomSpot) => {
    if (name == recomSpot.title) {
      result = recomSpot;
    }
  });

  showModal(result);
}

// 모달창 띄우는 함수
function showModal(res) {
  detail.style.display = "block";

  const title1 = document.querySelector("#title1");
  title1.innerText = res.title_des;

  const title2 = document.querySelector("#title2");
  title2.innerText = res.title;

  slideImg = res.slide_img;
  showSlides(idx);

  const detailInfo = document.querySelector("#detail-info");
  detailInfo.innerHTML = res.description;
}

// 슬라이드 쇼 띄우는 함수
function showSlides(n) {
  const bgImg = document.querySelector(".bg-img");
  const imgPath = "../images/";
  const detailImg = document.querySelector(".detail-img");

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  prev.style.display = "none";
  next.style.display = "none";

  if (slideImg.length > 1) {
    prev.style.display = "block";
    next.style.display = "block";
  }

  if (n < 0) {
    idx = slideImg.length - 1;
  }

  if (n >= slideImg.length) {
    idx = 0;
  }

  detailImg.src = `${imgPath}${slideImg[idx]}`;
  bgImg.style.backgroundImage = `url(${imgPath}${slideImg[idx]})`;

  detailImg.classList.add("fade");

  detailImg.addEventListener("webkitAnimationEnd", () => {
    detailImg.classList.remove("fade");
  });
  detailImg.addEventListener("animationend", () => {
    detailImg.classList.remove("fade");
  });
}

// 슬라이드 쇼 넘기는 함수
function plusSlides(n) {
  showSlides((idx += n));
}

// 닫기 버튼 기능
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
});

// 모달 창 밖 요소 클릭시 닫히는 기능
window.onclick = function (event) {
  if (event.target == detail) {
    detail.style.display = "none";
  }
};
