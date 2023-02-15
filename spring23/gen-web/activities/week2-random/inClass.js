//log a string and integer
//string being logged
// console.log("Hello");
//integer being logged
// console.log(1);

//variables of window size
// declared variables do not need to redeclared with var
var w = window.innerWidth 
var h = window.innerHeight
    w = view.bounds.width 
    h = view.bounds.height

// console.log(w);
// console.log(h);


var random = Math.random() * 10 + 10
// console.log(random)


//getting a random integer between a set of min and max values
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

// data is being put in to the function and returning the defined parameters via console
//console.log(getRandomInt(1,10.3438430))

//compose random shapes with random colors 

//creating an array with spec values
//using 2 ways to generate random value of array
//var colors = ['red', 'yellow', 'black', 'grey']
//console.log(colors[Math.floor(Math.random()*colors.length)])
//console.log(colors[getRandomInt(0,colors.length)])

var colors = ['red', 'yellow', 'black', 'grey']
var rCircleColor = colors[Math.floor(Math.random()*colors.length)]
var rCircleSize = getRandomInt(30,200)
var rCircleX = getRandomInt(rCircleSize, w-rCircleSize)
var rCircleY = getRandomInt(rCircleSize, h-rCircleSize)

// () define x-value, y-value and radius 
//
var circle = new Path.Circle(rCircleX, rCircleY, rCircleSize)
circle.fillColor = rCircleColor










