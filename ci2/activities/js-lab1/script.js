let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





function play() {
var audio = new Audio('assets/chirps.mp3');
audio.play();
}

function playAudio() { 
  audio.play(); 
} 

function pauseAudio() { 
  audio.pause(); 
}




mybutton = document.getElementById("button2");
window.onscroll = function() {scrollFunction()};
function topFunction() {
  document.documentElement.scrollTop = 0;
}




var anythingIWant = document.body;
// Setting variable (let x =...)

var isDark = false;

// If button is clicked:
var darkModeButton = document.getElementById("button3");
darkModeButton.addEventListener("click", changeToDarkMode);

// Changing color and background
function changeToDarkMode() {
  if (isDark === true) {
    
    darkModeButton.textContent = "Dark Mode";
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off")
    
  } else if (isDark === false) {
    
    darkModeButton.textContent = "Light Mode";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on!")
  }
}


var textButton = document.getElementById("button4");
textButton.addEventListener("click", changeToSans);
var text = document.getElementById("info");

function changeToSans() {
  text.style.fontSize = "3.5em"
}

// var isSerif = false

  // if (isSerif === true) {
      // text.style.fontFamily = "sans-serif"

// }  else (isSerif === false) {
  // text.style.fontFamily = "serif"
// }
// }










