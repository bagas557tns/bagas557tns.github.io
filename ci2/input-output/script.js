const backgroundArray = [
	"assets/background/fall.jpeg",
	"assets/background/flowers.jpeg",
	"assets/background/flowers2.jpeg",
	"assets/background/flowers3.webp",
	"assets/background/flowers4.webp",
	"assets/background/flowers5.webp",
	"assets/background/leaves.jpeg",
	"assets/background/light-blur.jpeg",
	"assets/background/orchid.jpeg",	
	"assets/background/purple.jpeg"	,
	"assets/background/sunset.jpeg", 
	"assets/background/sky.jpeg",
	"assets/background/hearts.jpeg", 
	"assets/background/leaves2.jpeg", 
	"assets/background/sparkle.jpeg",  
	"assets/background/sparkle2.jpeg", 
	"assets/background/purple2.webp",  
	"assets/background/green.png",  
	"assets/background/heaven.jpeg",  
	"assets/background/blue.jpeg",  
	"assets/background/orange.webp",  
	"assets/background/black.jpeg"  
	]



const background = document.getElementById("background1");
const button1 = document.getElementById("button1");
 
window.onload = () =>
generateRandomBackground(backgroundArray);

button1.addEventListener("click", () =>
generateRandomBackground(backgroundArray));

function generateRandomBackground(array){
	let randomBack = Math.floor(Math.random() *
array.length);
	background.setAttribute("src",
array[randomBack]);
}



const objectArray = [
	"assets/objects/bouquet.png",
	"assets/objects/bouquet2.png",
	"assets/objects/branch.png",
	"assets/objects/butterfly2.png",
	"assets/objects/cake.gif",
	"assets/objects/candle.png",
	"assets/objects/cupcake.png",
	"assets/objects/cat.png", 
	"assets/objects/butterfly3.webp",
	"assets/objects/lovebird.png",
	"assets/objects/truck.png",
	"assets/objects/tea.png",
	"assets/objects/woman3.png",
	"assets/objects/mom.png",
	"assets/objects/bears2.png",
	"assets/objects/tulips.gif",
	"assets/objects/lotus.png",
	"assets/objects/tea3.png", 
	"assets/objects/cofee.png",
	"assets/objects/candle4.png"
	]

const object = document.getElementById("object");
const button2 = document.querySelector("#button2");
 
window.onload = () =>
generateRandomObject(objectArray);

button2.addEventListener("click", () =>
generateRandomObject(objectArray));

function generateRandomObject(array){
	let randomObj = Math.floor(Math.random() *
array.length);
	object.setAttribute("src",
array[randomObj]);
}



window.onload = () =>
genText(text);

function genText() {
	let text = ["And what a blessed day it is!", "Stay healthy and happy always...", "Rise and shine, and be on your own way!", 
	"Welcome to another beautiful day!", "Today is a gift to you... like you are for me!", "Embrace today with joy and happiness", 
	"A smile is a greay way to start off the day!", "Beautiful things don't ask for attention", "Something wonderful is about to happen...", "Sending nothing but warm wishes and love!"
	, "This morning will bring new fragrance of life to you", "Start fresh, stay fabulous!", "Keep your face always towards the sunshine", "May your cup overflow with awesomeness", 
	"Each day brings new opportunities...so grab 'em!", "Wishing U a day full of joyful moments", "Let's smile and be grateful for another day!", "Wake up! The flowers are smiling for you", 
	"Today is the victory of hope over despair!", "Start the day with a smile and a positive thought", "Receive my simple gift of Good Morning", "I wish for your good health, and a great smile!"];

	let caption = document.getElementById("bottom-text");
	caption.innerHTML = text[Math.floor(Math.random()*text.length)];

}

function genFont() {
var fontType = [ "Charm", "Caveat", "Yeseva One", "Rancho", "Amita"];
var num;
num=Math.floor(Math.random()*fontType.length);
document.getElementById("bottom-text").style.fontFamily =fontType[num];
}

function genColor() {
var fontColor = [ "magenta", "white", "black", "orange"];
var col;
col=Math.floor(Math.random()*fontColor.length);
document.getElementById("bottom-text").style.color =fontColor[col];
}


function popUp() {
	alert("Please take a screenshot of the generated content within the window");
}

// html2canvas(document.querySelector("#window")).then(canvas => {
//     document.body.appendChild(canvas)
// });







