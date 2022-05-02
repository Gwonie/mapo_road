const detail = document.querySelector(".detail");
let slideImg = [];
let idx = 0;
const closeBtn = document.querySelector(".close-btn");

// 추천스팟 클릭이벤트 핸들러
function showDetail(hash) {
  let name = hash;
  let result = {};

  recomSpots.forEach((elm) => {
    if (name == elm.title) {
      result = elm;
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
  detailInfo.innerText = res.description;
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
}

// 슬라이드 쇼 넘기는 함수
function plusSlides(n) {
  showSlides((idx += n));
}

// 닫기 버튼 기능
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
});
