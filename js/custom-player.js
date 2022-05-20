//grab DOM elements
const video = document.querySelector('.video');
const playAction = document.querySelector('.play');
const playButtonIcon = document.querySelector('.iconPlay');
const pauseButtonIcon = document.querySelector('.iconPause');
const stopButton = document.querySelector('.stop');

//Listen for events
video.addEventListener('click', playPauseVideo);
playAction.addEventListener('click', playPauseVideo);
stopButton.addEventListener('click', stopVideo);

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
  playButtonToggleIcon();
}
