// открытие формы и закрытие
$('.popup__link').click(function (e) {
  e.preventDefault();
  $('.popup').fadeIn(800);
  $('body').addClass('lock');
});

$('.popup__close').click(function () {
  $('.popup').fadeOut(800);
  $('body').removeClass('lock');
});

// воспроизведение видео в секции about на главной странице

let videoAbout = document.querySelector('.banner__video');
let videoBtn = document.querySelector('.banner__video-btn');

videoBtn.addEventListener('click', function() {
  videoPlay();
});
videoAbout.addEventListener('click', function() {
  videoPlay();
});

function videoPlay() {
  videoAbout.classList.toggle('active');

  if (videoAbout.classList.contains('active')) {
    videoAbout.play();
    videoAbout.muted = false;
    // videoAbout.controls = true;
    videoBtn.style = 'display: none';
    // header.classList.add('hide');
  }
  else {
    videoAbout.pause();
    videoBtn.style = 'display: block';
    videoAbout.muted = true;
    videoAbout.controls = false;
  }
}



