var color = ["#8B0000","#006400","#191970","#8B008B","#2F4F4F","#A0522D","#000000"];
var i = 0;
document.querySelector("button").addEventListener("click",function(){
  i = 1 < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})