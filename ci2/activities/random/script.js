const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
var color = ["#f4dd00", "#ec553a", 
        "#1b3099", "#ff8eaf", "#408e88", "#5f975e"];

const leaf= document.querySelector('#leaf');
   leaf.style.left= getRandom(0, 300 - 200)+'px'; 
   leaf.style.top = getRandom(0, 300 - 200)+'px'; 
   leaf.style.fill = color[Math.floor(Math.random() * color.length)];

const circle1= document.querySelector('#circle1');
   circle1.style.left= getRandom(0, 300 - 200)+'px';
   circle1.style.top = getRandom(0, 300 - 200)+'px';
   circle1.style.background = color[Math.floor(Math.random() * color.length)];

const circle2= document.querySelector('#circle2');
   circle2.style.left= getRandom(0, 300 - 200)+'px';
   circle2.style.top = getRandom(0, 300 - 200)+'px';
   circle2.style.background = color[Math.floor(Math.random() * color.length)];