"use strict";
export { modalManual, modalContact };
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// MODAL MANUAL
const modal = $(".modal");
const modalControlBtn = $(".slider__btn--control");
const sliderList = $(".slider_list");
const sliderIndexList = $(".slider-index");
const closeModalBtn = $(".modal__btn--close");
const leaveBtn = $(".slider__btn--leave");
const headerManualBtn = $(".navigation__item a:first-child");
const sliderTitle = $(".slider_title");
const sliderDetail = $(".slider_detail");
const sliderSize = $(".modal__show-slider");
const listIndexItem = sliderIndexList.childNodes;
const modalManual = {
  currentSlider: 0,
  sliderInfor: [
    {
      element: '<img src="./resources/image/logo.0cbf9e63.gif" alt="" />',
      title: "Lofi.co: Focus Music You Can Vibe With",
      detail: "Welcome to lofi.co. Let us show you around!",
    },
    {
      element: '<video src="./resources/video/Video 1 - Mixer.mp4"></video>',
      title: "The Perfect Playlist With One Click",
      detail:
        "Hit play and get into the zone instantly. No ads. No distracting lyrics. 3 Stations to suit your mood: chill, jazzy or sleepy.",
    },
    {
      element: '<video src="./resources/video/Video 2 - Scenes.mp4"></video>',
      title: "Craft Your Focus Environment",
      detail:
        "Would you rather get it done in the cafe, or escape to the beach? Lofi.co gives you both with interactive artworks. Basic users can access 2 artworks, while premium users have exclusive access to a growing library of 13+ illustrations.",
    },
    {
      element:
        '<video src="./resources/video/Video 4 - Mixer Environment.mp4"></video>',
      title: "Cut Out Distractions With Peaceful Sounds",
      detail:
        "Drown out even the noisiest neighbour with soothing background sounds. Each artwork comes with adjustable sounds like rain, waves or birds. Some sounds change the scene’s visuals. Basic users get 3 sound effects. Premium users can mix and match 12+ sounds.",
    },
    {
      element:
        '<video src="./resources/video/Video 3 - Focus _ History (1).mp4"></video>',

      title: "The Focus Zone (Premium)",
      detail:
        "Deadline coming up? The Focus Zone lets you stay on track by gathering the best focus tools in one place - away from your distracting smartphone. - Pomodoro timer: get more done in less time (without burning out) - Notepad: never let a thought disappear - Time logger: track your progress - To-do list: always know what to do next",
    },
  ],
  render() {
    const sliderItemHtml = this.sliderInfor.map((slideItem, index) => {
      return ` <div class="slider_item">
          ${slideItem.element}
        </div>`;
    });
    const indexItemHtml = this.sliderInfor
      .map((slideItem, index) => {
        return `<div data-index="${index}" class="index__item"></div>`;
      })
      .join("");
    sliderIndexList.innerHTML = indexItemHtml;
    sliderIndexList.firstElementChild.classList.add("active");
    sliderTitle.innerHTML = this.sliderInfor[this.currentSlider].title;
    sliderDetail.innerHTML = this.sliderInfor[this.currentSlider].detail;
    sliderList.innerHTML = sliderItemHtml.join("");
  },
  handleEvents: function () {
    const _this = this;
    // click control btn
    modalControlBtn.onclick = function () {
      _this.nextSlider();
      _this.changeSliderContent(_this.currentSlider);
    };
    // click close btn
    closeModalBtn.onclick = function () {
      _this.closeModal();
    };
    // click leave Btn
    leaveBtn.onclick = () => {
      _this.closeModal();
    };
    // click how btn header
    headerManualBtn.onclick = () => _this.showModal();
    // click slider Index
    sliderIndexList.onclick = (e) => {
      const elementTarget = e.target.closest(".index__item");
      if (elementTarget) {
        const sliderIndex = elementTarget.getAttribute("data-index");
        _this.currentSlider = sliderIndex;
        _this.changeSliderPosition(sliderIndex);
        _this.changeActiveItem(listIndexItem, _this.currentSlider);
        _this.changeSliderContent(_this.currentSlider);
      }
    };
  },
  nextSlider() {
    const sliderVideos = $$(".slider_item video");
    this.currentSlider++;
    if (this.currentSlider >= modalManual.sliderInfor.length) {
      return;
    }
    if (sliderVideos[this.currentSlider - 1]) {
      sliderVideos[this.currentSlider - 1].play();
    }
    this.changeSliderPosition(this.currentSlider);
    this.changeActiveItem(listIndexItem, this.currentSlider);
  },
  changeSliderPosition(index) {
    sliderList.style.transform = `translateX(-${
      sliderSize.clientWidth * index
    }px)`;
  },
  changeActiveItem(elements, index) {
    elements.forEach((e) => {
      e.classList.remove("active");
    });
    elements[index].classList.add("active");
  },
  closeModal: function () {
    sliderList.style.transform = `translateX(0)`;
    this.currentSlider = 0;
    this.changeActiveItem(listIndexItem, this.currentSlider);
    this.changeSliderContent(this.currentSlider);
    modal.style.display = "none";
  },
  changeSliderContent(index) {
    if (this.currentSlider >= modalManual.sliderInfor.length) {
      return;
    }
    sliderTitle.innerHTML = this.sliderInfor[index].title;
    sliderDetail.innerHTML = this.sliderInfor[index].detail;
  },
  showModal() {
    modal.style.display = "flex";
    modal.style.animation = `fadeIn linear .5s`;
  },
  start() {
    this.render();
    this.handleEvents();
  },
};

// MODAL CONTACT
const closeBtnContact = $(".modal__contact .modal__btn--close");
const contactContainer = $(".modal__contact__container");
const contactBtn = $(".navigation__item:nth-child(2) a");
const modalContact = {
  events() {
    closeBtnContact.onclick = function () {
      contactContainer.style.display = "none";
    };
    contactBtn.onclick = () => {
      contactContainer.style.animation = `fadeIn linear .5s`;
      contactContainer.style.display = "flex";
    };
  },
  start() {
    this.events();
  },
};
// MODAL SHARE
const closeBtnShare = $(".modal__share .modal__btn--close");
const shareContainer = $(".modal__share");
const copyBtn = $(".modal__share--btn");
const showShareModalBtn = $(".action__item__share");
const shareLinkInput = $(".share__link");
const modalShareLink = window.location.href;
export const modalShareEvent = function () {
  closeBtnShare.onclick = () => {
    shareContainer.style.display = "none";
  };
  showShareModalBtn.onclick = () => {
    copyBtn.innerHTML = "Copy";

    shareContainer.style.animation = `fadeIn linear .5s`;
    shareContainer.style.display = "block";
    shareLinkInput.value = modalShareLink;
  };
  copyBtn.onclick = function () {
    shareLinkInput.value = modalShareLink;
    shareLinkInput.select();
    shareLinkInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(shareLinkInput.value);
    copyBtn.innerHTML = "Copied";
  };
};
