var typed = new Typed("#element", {
  strings: [
    "Web developer",
    "Web designer",
    "Graphic designer",
    "Python programmer",
  ],
  typeSpeed: 120,
});
function toggleShow() {
  document.getElementById("show-nav").style.display = "none";
  document.getElementById("logo").style.display = "none";
  document.getElementById("hide-nav").style.display = "block";
  document.getElementById("hide-on-sm").style.display = "flex";
  document.querySelector("nav").style.flexDirection = "column";
}
function toggleHide() {
  document.getElementById("show-nav").style.display = "block";
  document.getElementById("logo").style.display = "block";
  document.getElementById("hide-nav").style.display = "none";
  document.getElementById("hide-on-sm").style.display = "none";
  document.querySelector("nav").style.flexDirection = "row";
}
