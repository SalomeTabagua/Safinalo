var burger = document.getElementById("burger");
var navEl = document.getElementById("navEl");
var button = document.getElementById("first");

burger.addEventListener("click", () => {
  navEl.classList.toggle("show");
});
