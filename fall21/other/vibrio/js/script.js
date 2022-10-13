function Cell(pos,r,c,g){

  if(pos){
    this.pos = pos.copy();
  }else{
    this.pos = pos || createVector(random(width),random(height));
  }

  this.r = r || 60;
  this.c = c || color(random(100,255),0,random(100,255),random(40,150));
  this.g = g || color(random(100,255),0,random(100,255),100);

  this.clicked = function(x,y){
    var d = dist(this.pos.x, this.pos.y, x,y);
    if(d<this.r){
      return true;
    }else{
      return false;
    }
  }

  this.mitosis = function(){
    this.pos.x += random(-this.r, this.r/1.5);
    var cell = new Cell(this.pos, this.r*0.8, this.c);
    return cell;
  }

  this. move = function(){
    var vel = p5.Vector.random2D();
    let r = random(0,1);
    if(r < 0.3){
      this.pos.x++;
      this.pos.add(this.x)
    }else if (r < 0.6){
      this.pos.x--;
      this.pos.add(this.x)
    }else if (r < 0.8){
      this.pos.y++;
      this.pos.add(this.y)
    }else{
      this.pos.y--;
      this.pos.add(this.y)
    }
    this.pos.add(vel);
  }

  this.show = function(){
  noStroke();
  fill(255,255,255,random(0.3,0.7));
  ellipse(this.pos.x, this.pos.y, random(10,28),random(10,28));

  fill(40,255,105,random(0.2,0.6));
  ellipse(this.pos.x, this.pos.y, random(50,60),random(50,60));
}
}


var cells = [];
function setup(){
  createCanvas(550, 550);
  background(0);
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());

}


function draw(){
  for(var i = 0; i<cells.length; i++){
    cells[i].move();
    cells[i].show();
  }
}


function mousePressed(){
  for(var i = cells.length-1; i>= 0; i--){
    if(cells[i].clicked(mouseX,mouseY)){
        cells.push(cells[i].mitosis());
        cells.push(cells[i].mitosis());
        cells.splice(i,1);
    }
  }
}
