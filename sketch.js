
	let pacman = {
		x: 6,
		y: 4
	};

 let ghosts_arr = [];

const Play = 3; 
const Game_Over = 4;
let currentState = Play; 

let elements = document.getElementById('world');
	

  
  function setup() {
    frameRate(15); 
    ghosts_arr.push(new Ghost(1, 1));
    createCanvas(750,50); 
  }

  function draw(){
    background(0)
    switch(currentState) {
      case Play:
        drawWorld(); 
        break; 
          case Game_Over:
              gameOver(); 
              break; 
    }
  }