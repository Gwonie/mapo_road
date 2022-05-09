const headerScrollHeight = document.querySelector("header").scrollHeight;
const nav = document.querySelector("nav");

document.addEventListener("scroll", function () {
  let currentScrollValue = document.documentElement.scrollTop;

  nav.style.backgroundColor = "rgb(33, 33, 33, 0.5)";

  if (currentScrollValue < headerScrollHeight) {
    nav.style.backgroundColor = "#019267";
  }
});
