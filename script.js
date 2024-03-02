let close = document.querySelector(".close__svg");
let nav = document.querySelector(".nav__mobile");
let burger = document.querySelector(".nav__2");

close.addEventListener("click", function () {
  nav.classList.add("d-none");
});

burger.addEventListener("click", function () {
  nav.classList.remove("d-none");
});
