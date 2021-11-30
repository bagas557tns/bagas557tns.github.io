let buttonone = document.querySelector(".c1");
let textone = document.querySelector(".terms");

function showText() {
	textone.classList.toggle("hide");
}


buttonone.addEventListener("click", showText)

