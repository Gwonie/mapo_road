let slideImg = ["sungsan_park.jpg", "sungsan_park2.jpg"];
let detailImg = document.querySelector(".detail-img");
let bgImg = document.querySelector(".bg-img");
let imgPath = "../images/";

let idx = 0;

function plusSlides(n) {
  showSlides((idx += n));
}

function showSlides(n) {
  if (n < 0) {
    idx = slideImg.length - 1;
  }

  if (n >= slideImg.length) {
    idx = 0;
  }

  detailImg.src = `${imgPath}${slideImg[idx]}`;
  bgImg.style.backgroundImage = `url(${imgPath}${slideImg[idx]})`;
}

showSlides(idx);
