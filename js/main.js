// открытие формы и закрытие
$(".popup__link").click(function (e) {
  e.preventDefault();
  $(".popup").fadeIn(800);
  $("body").addClass("lock");
});

$(".popup__close").click(function () {
  $(".popup").fadeOut(800);
  $("body").removeClass("lock");
});

// воспроизведение видео в секции about на главной странице

let videoAbout = document.querySelector(".banner__video");
let videoBtn = document.querySelector(".banner__video-btn");

videoBtn.addEventListener("click", function () {
  videoPlay();
});
videoAbout.addEventListener("click", function () {
  videoPlay();
});

function videoPlay() {
  videoAbout.classList.toggle("active");

  if (videoAbout.classList.contains("active")) {
    videoAbout.play();
    videoAbout.muted = false;
    // videoAbout.controls = true;
    videoBtn.style = "display: none";
    // header.classList.add('hide');
  } else {
    videoAbout.pause();
    videoBtn.style = "display: block";
    videoAbout.muted = true;
    videoAbout.controls = false;
  }
}

//sliders

const casesSwiper = new Swiper(".cases__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  loop: true,

  navigation: {
    prevEl: ".cases__slide-prev",
    nextEl: ".cases__slide-next",
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

const trustSwiper = new Swiper(".trust__slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 800,
  loop: true,

  navigation: {
    prevEl: ".trust__slide-prev",
    nextEl: ".trust__slide-next",
  },

  breakpoints: {
    481: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    1001: {
      slidesPerView: 3,
    },
  },
});



// spoller 
$(document).ready(function () {
  $('.faq__spoller-item').click(function (event) {
    $(this).toggleClass('active');
});
  $('.faq__spoller-title-wrap').click(function (event) {
      $(this).toggleClass('active').next().slideToggle(300);
  });
});


//footer

const btnMenedger = $(".btn-menedger"),
contentMenedger = $(".menedger");

btnMenedger.on("click", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    contentMenedger.slideUp();
  } else {
    $(this).addClass("open");
    contentMenedger.slideDown();
  }
});

$(document).click(function (e) {
  if (
    !btnMenedger.is(e.target) &&
    !contentMenedger.is(e.target) &&
    contentMenedger.has(e.target).length === 0
  ) {
    contentMenedger.slideUp();
    btnMenedger.removeClass("open");
  }
});

const btnSpec = $(".btn-spec");
const contentSpec = $(".spec-content");

btnSpec.on("click", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    contentSpec.slideUp();
  } else {
    $(this).addClass("open");
    contentSpec.slideDown();
  }
});

$(document).click(function (e) {
  if (
    !btnSpec.is(e.target) &&
    !contentSpec.is(e.target) &&
    contentSpec.has(e.target).length === 0
  ) {
    contentSpec.slideUp();
    btnSpec.removeClass("open");
  }
});
