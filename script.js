
var video = document.getElementById("backgroundVideo");


var pauseButton = document.querySelector(".pausebutton");

function myFunction() {
    if (video.paused) {
        video.play();
        pauseButton.innerHTML = "⏸️"
        pauseButton.ariaLabel="Pause the video"
    } else {
        video.pause();
        pauseButton.innerHTML = "▶️"
        pauseButton.ariaLabel="Play the video"
    }
}