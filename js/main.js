const headerScrollHeight = document.querySelector("header").scrollHeight;
const nav = document.querySelector("nav");

document.addEventListener("scroll", function () {
  let currentScrollValue = document.documentElement.scrollTop;

  nav.style.backgroundColor = "rgb(33, 33, 33, 0.5)";

  if (currentScrollValue < headerScrollHeight) {
    nav.style.backgroundColor = "#019267";
  }
});

const shoePrintLeft = document.getElementById("shoe-print-left");
const shoePrintLeft2 = document.getElementById("shoe-print-left2");
const shoePrintRight = document.getElementById("shoe-print-right");
const shoePrintRight2 = document.getElementById("shoe-print-right2");

// setInterval(() => {
setTimeout(() => {
  shoePrintLeft.style.display = "block";
}, 1000);
setTimeout(() => {
  shoePrintRight.style.display = "block";
}, 2000);
setTimeout(() => {
  shoePrintLeft2.style.display = "block";
}, 3000);
setTimeout(() => {
  shoePrintRight2.style.display = "block";
}, 4000);
shoePrintLeft.style.display = "none";
shoePrintLeft2.style.display = "none";
shoePrintRight.style.display = "none";
shoePrintRight2.style.display = "none";
// }, 5000);
