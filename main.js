var video = document.getElementById("myVideo");
var audio = document.getElementById("myaudio");
const playPauseBtn = document.querySelector('.play');
const timeDisplay = document.querySelector('.time-display');
let updateTimeInterval; // Variable to store the interval for updating time display



myVideo.addEventListener("click", function playPause(){
    alert("Putar Video Set Fire To The Rain")
})

audio.addEventListener('play', function() {
    alert('Audio di Putar.');
});

function playPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        // Start updating time display when play is pressed
        updateTimeInterval = setInterval(updateTimeDisplay, 1000);
        
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
        // Stop updating time display when paused
        clearInterval(updateTimeInterval);
    }
}

function updateTimeDisplay() {
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

video.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
    const progress = (video.currentTime / video.duration) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`;
}


function playPauseAudio() {
    var audio = document.getElementById('myaudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}



