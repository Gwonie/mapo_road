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

// header 애니메이션
// const shoePrintLeft = document.getElementById("shoe-print-left");
// const shoePrintLeft2 = document.getElementById("shoe-print-left2");
// const shoePrintRight = document.getElementById("shoe-print-right");
// const shoePrintRight2 = document.getElementById("shoe-print-right2");

// // setInterval(() => {
// setTimeout(() => {
//   shoePrintLeft.style.display = "block";
// }, 1000);
// setTimeout(() => {
//   shoePrintRight.style.display = "block";
// }, 2000);
// setTimeout(() => {
//   shoePrintLeft2.style.display = "block";
// }, 3000);
// setTimeout(() => {
//   shoePrintRight2.style.display = "block";
// }, 4000);
// shoePrintLeft.style.display = "none";
// shoePrintLeft2.style.display = "none";
// shoePrintRight.style.display = "none";
// shoePrintRight2.style.display = "none";
// }, 5000);

// setTimeout(() => {
//   shoeLeft.style.left = "140px";
// }, 1000);
// setTimeout(() => {
//   shoeRight.style.left = "210px";
// }, 2000);

// function shoeMovingEffect() {
//   const shoeLeft = document.getElementById("shoe-left");
//   const shoeRight = document.getElementById("shoe-right");

//   shoeLeft.style.left = `0px`;
//   setTimeout(() => {
//     shoeRight.style.left = `70px`;
//   }, 500);

//   for (let i = 1; i < 15; i++) {
//     setTimeout(() => {
//       shoeLeft.style.left = `${140 * i}px`;
//       shoeLeft.classList.add("shoe-effect");
//       shoeLeft.addEventListener("webkitAnimationEnd", () => {
//         shoeLeft.classList.remove("shoe-effect");
//       });
//       shoeLeft.addEventListener("animationend", () => {
//         shoeLeft.classList.remove("shoe-effect");
//       });
//     }, 500 + 1000 * i);
//     setTimeout(() => {
//       shoeRight.style.left = `${70 + 140 * i}px`;
//       shoeRight.classList.add("shoe-effect");
//       shoeRight.addEventListener("webkitAnimationEnd", () => {
//         shoeRight.classList.remove("shoe-effect");
//       });
//       shoeRight.addEventListener("animationend", () => {
//         shoeRight.classList.remove("shoe-effect");
//       });
//       console.log(1000 + 1000 * i);
//     }, 1000 + 1000 * i);
//   }
// }

// function shoeMovingEffect2() {
//   const shoeLeft = document.getElementById("shoe-left2");
//   const shoeRight = document.getElementById("shoe-right2");

//   shoeLeft.style.left = `0px`;
//   setTimeout(() => {
//     shoeRight.style.left = `70px`;
//   }, 500);

//   for (let i = 1; i < 15; i++) {
//     setTimeout(() => {
//       shoeLeft.style.left = `${140 * i}px`;
//       shoeLeft.classList.add("shoe-effect");
//       shoeLeft.addEventListener("webkitAnimationEnd", () => {
//         shoeLeft.classList.remove("shoe-effect");
//       });
//       shoeLeft.addEventListener("animationend", () => {
//         shoeLeft.classList.remove("shoe-effect");
//       });
//     }, 500 + 1000 * i);
//     setTimeout(() => {
//       shoeRight.style.left = `${70 + 140 * i}px`;
//       shoeRight.classList.add("shoe-effect");
//       shoeRight.addEventListener("webkitAnimationEnd", () => {
//         shoeRight.classList.remove("shoe-effect");
//       });
//       shoeRight.addEventListener("animationend", () => {
//         shoeRight.classList.remove("shoe-effect");
//       });
//       console.log(1000 + 1000 * i);
//     }, 1000 + 1000 * i);
//   }
// }

// function shoeMovingEffect3() {
//   const shoeLeft = document.getElementById("shoe-left3");
//   const shoeRight = document.getElementById("shoe-right3");

//   shoeLeft.style.left = `0px`;
//   setTimeout(() => {
//     shoeRight.style.left = `70px`;
//   }, 500);

//   for (let i = 1; i < 15; i++) {
//     setTimeout(() => {
//       shoeLeft.style.left = `${140 * i}px`;
//       shoeLeft.classList.add("shoe-effect");
//       shoeLeft.addEventListener("webkitAnimationEnd", () => {
//         shoeLeft.classList.remove("shoe-effect");
//       });
//       shoeLeft.addEventListener("animationend", () => {
//         shoeLeft.classList.remove("shoe-effect");
//       });
//     }, 500 + 1000 * i);
//     setTimeout(() => {
//       shoeRight.style.left = `${70 + 140 * i}px`;
//       shoeRight.classList.add("shoe-effect");
//       shoeRight.addEventListener("webkitAnimationEnd", () => {
//         shoeRight.classList.remove("shoe-effect");
//       });
//       shoeRight.addEventListener("animationend", () => {
//         shoeRight.classList.remove("shoe-effect");
//       });
//       console.log(1000 + 1000 * i);
//     }, 1000 + 1000 * i);
//   }
// }

shoeMovingEffect();
// setTimeout(shoeMovingEffect2, 5000);
// setTimeout(shoeMovingEffect3, 10000);
// setInterval(shoeMovingEffect, 15000);
// setInterval(shoeMovingEffect2, 20000);
// setInterval(shoeMovingEffect3, 25000);

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
