// document.querySelector("button").classList.add("drum-kit-button")
// document.querySelector(".drum-kit-button").addEventListener("click", handleClick);




for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  })
}
