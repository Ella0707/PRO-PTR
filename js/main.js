
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
