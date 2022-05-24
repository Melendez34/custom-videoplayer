//grab DOM elements
const video = document.querySelector('.video');
const playAction = document.querySelector('.play');
const playButtonIcon = document.querySelector('.iconPlay');
const pauseButtonIcon = document.querySelector('.iconPause');
const stopButton = document.querySelector('.stop');
const progressBar = document.querySelector('.progressBar');

//Listen for events
video.addEventListener('click', playPauseVideo);
progressBar.addEventListener('change', setVideoProgress);
playAction.addEventListener('click', playPauseVideo);
stopButton.addEventListener('click', stopVideo);
video.addEventListener('timeupdate', updateBarProgress);

//Utility functions
function playPauseVideo() {
  video.paused ? video.play() : video.pause();
  playButtonToggleIcon();
}

function playButtonToggleIcon() {
  if (video.paused) {
    playAction.removeChild(pauseButtonIcon);
    playAction.appendChild(playButtonIcon);
  } else {
    playAction.removeChild(playButtonIcon);
    playAction.prepend(pauseButtonIcon);
  }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  progressBar.value = 0;
  playButtonToggleIcon();
}

function setVideoProgress() {
  video.currentTime = Number((progressBar.value * video.duration) / 100);
}

function updateBarProgress() {
  progressBar.value = Number((video.currentTime * 100) / video.duration);
  let minutes = Math.floor(video.currentTime / 60);
  console.log(minutes);
}
