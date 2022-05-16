// const objectArray = [
// 	"assets/objects/angels.webp",
// 	"assets/objects/baby.png",
// 	"assets/objects/bouquet1.webp",
// 	"assets/objects/bouquet2.webp",
// 	"assets/objects/branch.png",
// 	"assets/objects/bride.png",
// 	"assets/objects/butterfly.png",
// 	"assets/objects/butterfly2.png",
// 	"assets/objects/cake.png",
// 	"assets/objects/candle.gif",
// 	"assets/objects/candle2.gif",
// 	"assets/objects/cat.webp",
// 	"assets/objects/cupcake.png",
// 	"assets/objects/fruits.png"
// 	]

// const object = document.getElementById("object");
// const button = document.querySelector("#button1");
 
// window.onload = () =>
// generateRandomObject(objectArray);

// button.addEventListener("click", () =>
// generateRandomObject(objectArray));

// function generateRandomObject(array){
// 	let randomNum = Math.floor(Math.random() *
// array.length);
// 	object.setAttribute("src",
// array[randomNum]);
// }




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
	"assets/background/sunset.jpeg"
	]

const background = document.getElementById("background1");
const button = document.getElementById("button1");
 
window.onload = () =>
generateRandomBackground(backgroundArray);

button.addEventListener("click", () =>
generateRandomBackground(backgroundArray));

function generateRandomBackground(array){
	let randomNum = Math.floor(Math.random() *
array.length);
	background.setAttribute("src",
array[randomNum]);
}





// html2canvas(document.querySelector("#window")).then(canvas => {
//     document.body.appendChild(canvas)
// });







