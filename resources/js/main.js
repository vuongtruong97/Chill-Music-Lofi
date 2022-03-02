"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listOptionItem = $$(".option__item");
const optionMenu = $(".option");
window.onload = function () {
  // Animate Icon Option Menu
  optionMenu.onclick = function (e) {
    e.preventDefault();
    for (let item of listOptionItem) {
      if (item.classList.contains("active"))
        if (item === e.target.closest(".option__item")) {
          //   continue;
        }
      item.classList.remove("active");
    }
    e.target.closest(".option__item").classList.toggle("active");
  };
  // Input handle progress
  {
    const trafficInput = $("#city__traffic");
    trafficInput.oninput = function () {
      console.log(this.value);
    };
    const xxxx = $(".option__item__menu--set");
    xxxx.onscroll = function (e) {
      e.stopPropagation();
      console.log(e);
    };
  }
};
