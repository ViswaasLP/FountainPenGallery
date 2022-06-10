let video = document.getElementById("backgroundVideo");
let accordionTrigger = document.getElementsByClassName("penCareAccordionTrigger");
let pauseButton = document.querySelector(".pausebutton");
let iterator;


/**
 * Plays/Pauses the video when user clicks on the play/pause respectively. 
 * @author Viswaas
 * @return null 
 */
function controlMedia() {
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

/**
 * Displays/Hides the accordion when user clicks on the accordion trigger. 
 * @author Viswaas
 * @return null 
 */
for (iterator = 0; iterator < accordionTrigger.length; iterator++) {
  accordionTrigger[iterator].addEventListener("click", function () {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.visibility === "visible") {
      panel.style.visibility = "hidden";
    } else {
      panel.style.visibility = "visible";
    }
  });
}

