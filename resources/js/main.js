"use strict";
import { modalManual, modalContact, modalShareEvent } from "./modal.js";
import { createStorage } from "./globalFunction.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const STORAGE_KEY = "USER";
// const config = createStorage(STORAGE_KEY);

const element = document.documentElement;
const audio = $("#audio");
const fullScreenBtn = $(".acction__item__fullscreen");
const listOptionItem = $$(".option__item");
const optionMenu = $(".option");
const optionMenuItem = $$(".option__item__menu ");
const switchBtn = $(".switch-btn");
const playBtn = $(".play__btn");
const pauseBtn = $(".pause__btn");
const nextBtn = $(".next__btn");
const previousBtn = $(".previous__btn");
const volumeSlider = $(".slider--range__audio");
const mainSong = $(".main-audio");
const mixVol = $$(".menu__noise__item");
const mixSound = $$(".mix-sound");
const menuMood = $(".menu__mood__style");
const cityTraffic = $(".city-traffic");
const cityRain = $(".city-rain");
const firePlace = $(".fire-place");
const keyBoard = $(".keyboard");
const dayVideo = $(".background_video_day");
const nightVideo = $(".background_video_night");
const webFront = $(".background_video--front");

// MAIN OBJECT
const lofiMusic = {
  // Flag Variables
  isPlay: false,
  currentIndex: 0,
  currentTime: "day",
  currentWeather: "sun",
  currentMood: "chill", // mood default
  createStorage(key) {
    // create object to save In localStorage default > {}
    const storeObj = JSON.parse(localStorage.getItem(key)) ?? {};
    // create function save above object to localstorage with JSON format
    const save = () => {
      localStorage.setItem(key, JSON.stringify(storeObj));
    };
    const storage = {
      get(key) {
        return storeObj[key];
      },
      set(key, value) {
        storeObj[key] = value;
        save();
      },
      remove(key) {
        delete storeObj[key];
        save();
      },
    };
    return storage;
  },
  // Song(fake API)
  songs: {
    jazz: [
      {
        name: "jazz 1",
        singer: "null",
        path: "./resources/music/jazz1.mp3",
        image: "null",
      },
      {
        name: "jazz 2",
        singer: "null",
        path: "./resources/music/jazz2.mp3",
        image: "null",
      },
      {
        name: "jazz 3",
        singer: "null",
        path: "./resources/music/jazz3.mp3",
        image: "null",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/oqkmwiybl32jfa7/Enoki%20-%20Matcha.mp3?dl=0",
      },
      {
        path: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_7.mp3",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/n9p4mosvmwye002/let%27s%20chill%20-%20sad.exe.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/in24imooe9rsu1g/Dimmed%20%28Droemsk%2C%20User67%2C%20Sftspkn%2C%20Jokujekku%29.mp3?dl=0",
      },
      {
        path: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_12.mp3",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/xbnswhsv5d5rsdp/Jazzy%20project%202%20%281%29.mp3?dl=0",
      },
    ],
    sleepy: [
      {
        name: "sleepy 1",
        singer: "null",
        path: "./resources/music/sleepy1.mp3",
        image: "null",
      },
      {
        name: "sleepy 2",
        singer: "null",
        path: "./resources/music/sleepy2.mp3",
        image: "null",
      },
      {
        name: "sleepy 3",
        singer: "null",
        path: "./resources/music/sleepy3.mp3",
        image: "null",
      },
      {
        name: "sleepy 4",
        singer: "null",
        path: "./resources/music/sleepy4.mp3",
        image: "null",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/dzwd6p0i4xpyltz/Gerardo%20Mill%C3%A1n%20-%20a%20long%20trip%20LLR.mp3?dl=0",
      },
      {
        path: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_2.mp3",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/j3q762jkr6yjttv/Steve%20Nguyen%2C%20Mildred%20-%20Nocturnal%20%28Audio%29.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/4uh0n2b5qncxi3n/Peace%20-%20Nosmo%2C%20Kioshi%20%28Purity%20Label%29.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/ro87pkxpgphy9cy/TheAsianOnes%20-%20Lost.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/3bykoob8z86dn0m/among%20the%20stars-%20arya.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/monw1ona0cwrrfy/yt1s.com%20-%20Staring%20at%20the%20Sea.mp3?dl=0",
      },
      {
        path: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_16.mp3",
      },
      {
        path: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_17.mp3",
      },
    ],
    chill: [
      {
        name: "chill 1",
        singer: "null",
        path: "./resources/music/chill1.mp3",
        image: "null",
      },
      {
        name: "chill 2",
        singer: "null",
        path: "./resources/music/chill2.mp3",
        image: "null",
      },
      {
        name: "chill 3",
        singer: "null",
        path: "./resources/music/chill3.mp3",
        image: "null",
      },
      {
        path: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_20.mp3",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/tekpv6wv73i33cg/%285%29%20This%20Cant%20Be%20The%20End.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/6b10td2wrs7m3be/Approaching%20Fall.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/qbe3woags717kwo/Sxul%20-%20Closer%20To%20You%20%281%29.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/hpsfndkl4bga40f/a-new-sunset%20%281%29.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/raqav1o1175qscu/Linearwave%20-%20Calm.mp3?dl=0",
      },
      {
        path: "https://dl.dropboxusercontent.com/s/h7ptgueu6q19w8r/Chilliax%20-%20Beyond.mp3?dl=0",
      },
    ],
  },
  videoBackgrounds: {
    rain: [
      {
        name: "Rain-Day",
        path: "./resources/video/BDR RAINY DAY - Christmas ver.mp4",
      },
      {
        name: "Rain-Night",
        path: "./resources/video/BDR RAINY NIGHT - Christmas ver.mp4",
      },
    ],
    clear: [
      {
        name: "Clear-Day",
        path: "./resources/video/BDR Day-Christmas ver.mp4",
      },
      {
        name: "Clear-Night",
        path: "./resources/video/BDR STARRY NIGHT - Christmas ver.mp4",
      },
    ],
  },
  // DefineProperties
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        if (this.currentMood === "chill") {
          return this.songs.chill[this.currentIndex];
        }
        if (this.currentMood === "jazz") {
          return this.songs.jazz[this.currentIndex];
        }
        if (this.currentMood === "sleep") {
          return this.songs.sleepy[this.currentIndex];
        }
      },
    });
    Object.defineProperty(this, "currentLength", {
      get: function () {
        if (this.currentMood === "chill") {
          return this.songs.chill.length;
        }
        if (this.currentMood === "jazz") {
          return this.songs.jazz.length;
        }
        if (this.currentMood === "sleep") {
          return this.songs.sleepy.length;
        }
      },
    });
    Object.defineProperty(this, "weatherMode", {
      get: function () {
        if (this.currentWeather == "sun") {
          return this.videoBackgrounds.clear;
        } else {
          return this.videoBackgrounds.rain;
        }
      },
    });
  },
  //Render Web
  renderSong: function () {
    this.loadCurrentSong();
  },
  renderBg: function () {
    this.loadCurrentBg();
  },
  //Handle Events
  handleEvents: function () {
    const _this = this;
    // When click webFront
    webFront.onclick = function (e) {
      e.stopPropagation();
      listOptionItem.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
    };
    // When change music mood
    menuMood.onclick = function (e) {
      _this.pauseAudio();
      if (e.target.closest(".menu__mood__style__item")) {
        const listMoodBtn = $$(".style__item__icon");
        listMoodBtn.forEach((btn) => {
          btn.classList.remove("active");
        });
        if (e.target.closest(".jazz-mood")) {
          _this.currentMood = "jazz";
          e.target.closest(".jazz-mood").classList.add("active");
          // config.set("currentMood", _this.currentMood);
        }
        if (e.target.closest(".sleep-mood")) {
          _this.currentMood = "sleep";
          e.target.closest(".sleep-mood").classList.add("active");
          // config.set("currentMood", _this.currentMood);
        }
        if (e.target.closest(".chill-mood")) {
          _this.currentMood = "chill";
          e.target.closest(".chill-mood").classList.add("active");
          // config.set("currentMood", _this.currentMood);
        }
        _this.currentIndex = 0;
        _this.renderSong();
        setTimeout(() => {
          _this.playAudio();
        }, 700);
      }
    };
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
      _this.playAudio();
    };
    // Click Pause btn
    pauseBtn.onclick = (e) => {
      e.stopPropagation();
      _this.pauseAudio();
    };
    // Click next Btn
    nextBtn.onclick = function () {
      _this.nextSong();
    };
    // Click previous Btn
    previousBtn.onclick = function () {
      _this.previousSong();
    };
    // When Audio end
    audio.onended = function () {
      _this.nextSong();
    };
    // Volume adjustment
    volumeSlider.oninput = function (e) {
      mainSong.volume = volumeSlider.value / 100;
    };
    // Sound Effect adjustment
    mixSound.forEach((sound) => {
      sound.loop = true;
    });
    mixVol.forEach((vol) => {
      vol.oninput = function (e) {
        if (e.target.value > 0) {
          e.target.classList.add("active");
          if (e.target.closest(".traffic-vol")) {
            if (cityTraffic.paused) {
              cityTraffic.play();
            }
            cityTraffic.volume = this.value / 100;
          }
          if (e.target.closest(".city-rain-vol")) {
            if (_this.currentWeather == "sun") {
              _this.currentWeather = "rain";
              _this.loadCurrentBg();
            }
            if (cityRain.paused) {
              cityRain.play();
            }
            cityRain.volume = this.value / 100;
          }
          if (e.target.closest(".fire-place-vol")) {
            if (firePlace.paused) {
              firePlace.play();
            }
            firePlace.volume = this.value / 100;
          }
          if (e.target.closest(".keyboard-vol")) {
            if (keyBoard.paused) {
              keyBoard.play();
            }
            keyBoard.volume = this.value / 100;
          }
        } else {
          e.target.classList.remove("active");
          if (e.target.closest(".traffic-vol")) {
            cityTraffic.pause();
          }
          if (e.target.closest(".city-rain-vol")) {
            cityRain.pause();
            if (_this.currentWeather == "rain") {
              _this.currentWeather = "sun";
              _this.loadCurrentBg();
            }
          }
          if (e.target.closest(".fire-place-vol")) {
            firePlace.pause();
          }
          if (e.target.closest(".keyboard-vol")) {
            keyBoard.pause();
          }
        }
      };
    });
  },
  // Define Function
  // loadConfig() {
  //   this.currentMood = config.get("currentMood");
  //   this.currentIndex = 0;
  //   const listMoodBtn = $$(".style__item__icon");
  //   listMoodBtn.forEach((btn) => {
  //     btn.classList.remove("active");
  //     if (btn.dataset.mood === this.currentMood) {
  //       btn.classList.add("active");
  //     }
  //   });
  // },
  loadCurrentSong: function () {
    if (lofiMusic.currentSong.path) {
      audio.src = lofiMusic.currentSong.path;
    }
  },
  loadCurrentBg: function () {
    dayVideo.src = this.weatherMode[0].path;
    nightVideo.src = this.weatherMode[1].path;
  },
  playAudio: function () {
    if (this.isPlay === false) {
      this.isPlay = true;
      playBtn.classList.remove("active");
      pauseBtn.classList.add("active");
    }
    audio.play();
  },
  pauseAudio: function () {
    if (this.isPlay === true) {
      this.isPlay = false;
      playBtn.classList.add("active");
      pauseBtn.classList.remove("active");
    }
    audio.pause();
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.currentLength) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
    setTimeout(() => {
      this.playAudio();
    }, 700);
  },
  previousSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.currentLength - 1;
    }
    this.loadCurrentSong();
    setTimeout(() => {
      this.playAudio();
    }, 700);
  },
  start: function () {
    this.defineProperties();
    // this.loadConfig();
    this.renderBg();
    this.renderSong();
    this.handleEvents();
  },
};
window.onload = function () {
  lofiMusic.start();
  modalManual.start();
  modalContact.start();
  modalShareEvent.call(this);
};
