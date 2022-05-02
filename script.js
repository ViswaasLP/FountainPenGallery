var video = document.getElementById("backgroundVideo");

var acc = document.getElementsByClassName("penCareAccordionTrigger");
var i;

var pauseButton = document.querySelector(".pausebutton");

function myFunction() {
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = "⏸️";
    pauseButton.ariaLabel = "Pause the video";
  } else {
    video.pause();
    pauseButton.innerHTML = "▶️";
    pauseButton.ariaLabel = "Play the video";
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.visibility === "visible") {
      panel.style.visibility = "hidden";
    } else {
      panel.style.visibility = "visible";
    }
  });
}
