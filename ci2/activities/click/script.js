
// // EXAMPLE 1 Get Info on mouse move

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
// });

// EXAMPLE 2 Change position of cursor

// let myCursor = document.querySelector(".customCursor");

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
//   console.log(myCursor);
//   myCursor.style.top = event.pageY + "px";
//   myCursor.style.left = event.pageX + "px";
// });


// EXAMPLE 3 Change position of cursor and adjust alignment of cursor
// let myCursor = document.querySelector(".customCursor");

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
//   console.log(myCursor);
 
//   myCursor.style.top = event.pageY + "px";
//   myCursor.style.left = event.pageX + "px";
// });

// window.addEventListener("mouseout", function()

var color = ["#3C9EE7", "#E7993C", 
        "#E73C99", "#3CE746", "#E7993C"];

document.querySelector("div").addEventListener (
        "click", function() {
          document.querySelector("div").style.background
          = color[Math.floor(Math.random() * color.length).toString(16)];
          var value = document.getElementById("value");
          value.innerHTML = color;
        }
  )



let myCursor = document.querySelector(".circle");

window.addEventListener("mousemove", function(event){
  console.log(event);
  console.log("X:" , event.pageX);
  console.log("Y:" , event.pageY);
  console.log(myCursor);
  //subtract half the heigth and width from each
  myCursor.style.top = event.pageY - 50 + "px";
  myCursor.style.left = event.pageX - 50 + "px";
});





