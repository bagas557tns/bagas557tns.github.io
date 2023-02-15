//log a string and int
console.log('hey')
console.log(1)

//variables to get size of window, js
var w = window.innerWidth;
var h = window.innerHeight;
//get size of window, paper.js
    w = view.bounds.width;
    h = view.bounds.height;

//random decimal from 0 to 1
var random = Math.random()

//base integer function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(1,10))

//composition code
var randomHeight = Math.random() * h
var randomWidth = Math.random() * w

//random composition varibles for circle 
var colors = ['orangered', 'green', 'blue', 'grey']
var rCircleColor = colors[Math.floor(Math.random()*colors.length)]
var rCircleSize = getRandomInt(10,w/2)
var circle = new Path.Circle(new Point(getRandomInt(rCircleSize,w-rCircleSize), getRandomInt(rCircleSize,h-rCircleSize)), rCircleSize);
circle.fillColor = rCircleColor;

//random composition varibles for rectangle 
var rRectX = getRandomInt(10,w/2)
var rRectY = getRandomInt(10,w/2)
var rRectSize = getRandomInt(10,w/2)
var rRectColor = colors[Math.floor(Math.random()*colors.length)]
var rectangle = new Rectangle(new Point(rRectX, rRectY), new Point(rRectX+rRectSize, rRectY+rRectSize));
var path = new Path.Rectangle(rectangle);
path.fillColor = rRectColor;

//random composition varibles for polygon 
var rPolySize = getRandomInt(10,w/2)
var rPolyColor = colors[Math.floor(Math.random()*colors.length)]
var rPolyStroke = getRandomInt(2,20)
var rPolySides = getRandomInt(3,10)
var poly = new Path.RegularPolygon(new Point(w/2, h/2), rPolySides, rPolySides);
poly.strokeColor = rPolyColor;
poly.strokeWidth = rPolyStroke;

//composing text with some variable color metadata
var text = new PointText(new Point(10, 15));
text.fillColor = 'black';
text.fontFamily = 'monospace'
text.content = rCircleColor + ', ' + rRectColor + ', ' + rPolyColor;