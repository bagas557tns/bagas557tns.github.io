//random
var randomColorA = "#" + Math.floor(Math.random()*16777215).toString(16);
var randomColorB = "#" + Math.floor(Math.random()*16777215).toString(16);




var square1 = ["❈", "❈", "&nbsp"], 
    square2 = ["+", "+", "&nbsp"], 
    square3 = ["✳", "✳︎", "&nbsp"]


var dot1 = ["◦", "◦", "&nbsp"], 
    dot2 = ["•", "•", "&nbsp"]


var star1 = ["▪︎", "▪︎", "&nbsp"], 
    star2 = ["✽", "✽", "&nbsp"],
    star3 = ["✤", "✤", "&nbsp"],
    star4 = ["❖", "❖", "&nbsp"]
var starPalletes = [star1, star2, star3, star4]
var starTypes = starPalletes[Math.floor(Math.random() * starPalletes.length)]



var sectionA1 = ["•", "❈", "▪︎", "&nbsp"],
    sectionA2 = ["•", "✳", "✽", "&nbsp"], 
    sectionA3 = ["◦", "+", "▪︎", "&nbsp"],
    sectionA4 = ["•", "✳︎", "✤", "&nbsp"],
    sectionA5 = ["◦", "+", "❖", "&nbsp"]
var sectionAPalletes = [sectionA1, sectionA2, sectionA3, sectionA4, sectionA5]
var sectionA = sectionAPalletes[Math.floor(Math.random() * sectionAPalletes.length)]


var sectionB1 = ["•", "❈", "▪︎", "&nbsp"],
    sectionB2 = ["•", "✳", "✽", "&nbsp"], 
    sectionB3 = ["◦", "+", "▪︎", "&nbsp"],
    sectionB4 = ["•", "✳︎", "✤", "&nbsp"],
    sectionB5 = ["◦", "+", "❖", "&nbsp"]
var sectionBPalletes = [sectionB1, sectionB2, sectionB3, sectionB4, sectionB5]
var sectionB = sectionBPalletes[Math.floor(Math.random() * sectionBPalletes.length)]


var sectionC1 = ["❈", "&nbsp"], 
    sectionC2 = ["+", "&nbsp"],
    sectionC3 = ["✳", "&nbsp"]
var sectionCPalletes = [sectionC1, sectionC2, sectionC3]
var sectionC = sectionCPalletes[Math.floor(Math.random() * sectionCPalletes.length)]


var sectionD1 = ["•", "&nbsp"], 
    sectionD2 = ["◦", "&nbsp"]
var sectionDPalletes = [sectionD1, sectionD2]
var sectionD = sectionDPalletes[Math.floor(Math.random() * sectionDPalletes.length)]


var sectionE1 = ["▪︎", "&nbsp"], 
    sectionE2 = ["✽", "&nbsp"],
    sectionE3 = ["✤", "&nbsp"],
    sectionE4 = ["❖", "&nbsp"]
var sectionEPalletes = [sectionE1, sectionE2, sectionE3, sectionE4]
var sectionE = sectionEPalletes[Math.floor(Math.random() * sectionEPalletes.length)]

var sectionF1 = ["•", "▪︎", "&nbsp"], 
    sectionF2 = ["◦", "✽", "&nbsp"],
    sectionF3 = ["•", "✤", "&nbsp"]
var sectionFPalletes = [sectionF1, sectionF2, sectionF3]
var sectionF = sectionFPalletes[Math.floor(Math.random() * sectionFPalletes.length)]







//pick a random pallete
var palleteA = ['hsl(239,100%,30%)', 'hsl(60,100%,42%)'],
    palleteB = ['hsl(58,100%,19%)', 'hsl(16,100%,50%)'],
    palleteC = ['hsl(120,100%,23%)', 'hsl(354,100%,66%)']




    var palletes = [palleteA, palleteB, palleteC]
    var chosenPallete = palletes[Math.floor(Math.random() * palletes.length)]
    
    var pColorA = chosenPallete[0]
    var pColorB = chosenPallete[1]
    












//pick 2 random colors
var earth = { namex: "earth", colorz: 'hsl(58,100%,19%)' },
    forest = { namex: "forest", colorz: 'hsl(120,100%,23%)' },
    ocean = { namex: "ocean", colorz: 'hsl(239,100%,30%)' },
    voidx = { namex: "void", colorz: 'hsl(38,11%,7%)' },
    nether = { namex: "nether", colorz: 'hsl(333,100%,17%)' },

    fire = { namex: "scorching", colorz: 'hsl(16,100%,50%)' },
    dune = { namex: "dune", colorz: 'hsl(60,100%,42%)' },
    metal = { namex: "metallic", colorz: 'hsl(216,7%,57%)' },
    grass = { namex: "green", colorz: 'hsl(123,100%,37%)' },
    flower = { namex: "floral", colorz: 'hsl(354,100%,66%)' }

var baseMats = [forest, ocean, earth, voidx, nether]
var accentMats = [fire, grass, flower, dune, metal]

var randomA = Math.floor(Math.random() * baseMats.length)
var randomB = Math.floor(Math.random() * accentMats.length)

var colorA = baseMats[randomA].colorz
var colorB = accentMats[randomB].colorz

var dataA = baseMats[randomA].namex
var dataB = accentMats[randomB].namex















//apply
function setup() {
    createCanvas(400, 400);
    background(colorA);
}

function draw() {
    noStroke();
    noLoop();
    var colorx = color(colorB);
    fill(colorx)
    circle(200, 200, 200);
    console.log(dataB)
    console.log(dataA)

}