//height and width variables
var w = window.innerWidth
var h = window.innerHeight
w = view.bounds.width
h = view.bounds.height

//random int tool
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

//variables for grid
var gridGroup = new Group()
var gridW = 12
var gridH = 3
var gridSize = (w / gridW)
var gridSizeH = (h / gridH)

//for loop to create the grid
for (j = 0; j < gridH; j++) {
    for (i = 0; i < gridW; i++) {
        var x = gridSize * i
        var y = gridSizeH * j
        var circle = new Path.Circle(x + gridSize/2, y + gridSizeH/2, getRandomInt(5, gridSize/2))
        circle.fillColor = "black"

    }
}