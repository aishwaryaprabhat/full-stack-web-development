// document.querySelector("button").classList.add("drum-kit-button")
// document.querySelector(".drum-kit-button").addEventListener("click", handleClick);




for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var drumElement = this.innerHTML;
    playSound(drumElement);
    animateButton(drumElement)
    }
  )
}

document.addEventListener("keydown", function(event){
  playSound(event.key);
  animateButton(event.key)
}
)

function playSound(drumElement) {

  switch (drumElement) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio =  new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      var audio =  new Audio("sounds/tom-4.mp3");
      audio.play();
  }
}

function animateButton(drumElement) {
  var activeButton = document.querySelector("."+drumElement)
  activeButton.classList.toggle("pressed")
  setTimeout(function(){
    activeButton.classList.toggle("pressed")
  }, 100)

}
