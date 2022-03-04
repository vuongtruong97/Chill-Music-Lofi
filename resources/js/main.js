"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const element = document.documentElement;
const fullScreenBtn = $(".acction__item__fullscreen");
const listOptionItem = $$(".option__item");
const optionMenu = $(".option");
const optionMenuItem = $$(".option__item__menu ");
const switchBtn = $(".switch-btn");
const playBtn = $(".play__btn");
const pauseBtn = $(".pause__btn");
const song = $("audio");

// MAIN OBJECT
const lofiMusic = {
  // Flag Variables
  isPlay: false,
  isRain: false,
  isTraffic: false,
  isMute: false,
  chillMood: true,
  jazzyMood: false,
  sleepMood: false,
  //Render Web
  render: function () {
    console.log("render web");
  },
  //Handle Events
  handleEvents: function () {
    const _this = this;
    // FullScreen
    fullScreenBtn.onclick = function (e) {
      e.stopPropagation();
      if (!document.fullscreen)
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        } else {
          document.exitFullscreen();
        }
      if (document.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      }
    };
    // Click option icon
    optionMenu.onclick = function (e) {
      e.preventDefault();
      for (let item of listOptionItem) {
        if (item.classList.contains("active"))
          if (item === e.target.closest(".option__item")) {
            continue;
          }
        item.classList.remove("active");
      }
      e.target.closest(".option__item").classList.toggle("active");
    };
    // Switch background day-night
    switchBtn.onclick = function (e) {
      const dayVideo = $(".background_video_day");
      e.stopPropagation();
      if (switchBtn.checked) {
        dayVideo.style.opacity = "1";
      } else {
        dayVideo.style.opacity = "0";
      }
    };
    // stop event propagation on option menu item when click
    optionMenuItem.forEach((item) => {
      item.onclick = (e) => {
        e.stopPropagation();
      };
    });
    // Click Play btn
    playBtn.onclick = function (e) {
      e.stopPropagation();
      if (_this.isPlay === false) {
        _this.isPlay = true;
        playBtn.classList.remove("active");
        pauseBtn.classList.add("active");
        _this.playAudio();
      }
    };
    // Click Pause btn
    pauseBtn.onclick = (e) => {
      e.stopPropagation();
      if (_this.isPlay === true) {
        _this.isPlay = false;
        playBtn.classList.add("active");
        pauseBtn.classList.remove("active");
        _this.pauseAudio();
      }
    };
  },
  playAudio: function () {
    song.play();
    console.log("isPlay: ", this.isPlay);
  },
  pauseAudio: function () {
    song.pause();
    console.log("isPlay: ", this.isPlay);
  },
  nextSong: function () {
    console.log("Next song");
  },
  previousSong: function () {
    console.log("Previous song");
  },
  start: function () {
    this.render();
    this.handleEvents();
  },
};
window.onload = function () {
  lofiMusic.start();
};
