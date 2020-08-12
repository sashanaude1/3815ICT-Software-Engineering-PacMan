let Score = 0; 

function drawWorld(){
    fill(255); 
    textSize(30);
    text('Score: ' + Score, 325,35);
    elements.innerHTML = '';

    // For each item in each row of the maps array, display relevant HTML div type
    for(y = 0; y < map.length ; y++) {
        for( x = 0; x < map[y].length ; x++) {		
            if (map[y][x] === 1) {
                elements.innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                elements.innerHTML += "<div class='coin'></div>";
            }
            else if (map[y][x] === 3) {
                elements.innerHTML += "<div class='empty'></div>";
            }
            else if (map[y][x] === 4) {
                elements.innerHTML += "<div class='ghost'></div>";
            }
            else if (map[y][x] === 5) {
                 elements.innerHTML += "<div class='pacman'></div>";
            }
        }
        elements.innerHTML += "<br>";
}


    if (keyIsDown(LEFT_ARROW)){ // PACMAN MOVE LEFT
        if ( map[pacman.y][pacman.x-1] !== 1 && map[pacman.y][pacman.x-1] !== 4){
            if(map[pacman.y][pacman.x-1] == 2){ //Collect coins
                Score = Score + 1;  
                map[pacman.y][pacman.x] = 3;
                pacman.x = pacman.x - 1;
                map[pacman.y][pacman.x] = 5; 
            }else{
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 5; 
            }
        } else if ( map[pacman.y][pacman.x-1] == 4){ //Die
            currentState = Game_Over;
        }
    }
     else if (keyIsDown(RIGHT_ARROW)){ // PACMAN MOVE RIGHT
         if ( map[pacman.y][pacman.x+1] !== 1 && map[pacman.y][pacman.x+1] !== 4){
            if ( map[pacman.y][pacman.x+1] ==2 ){ //Collect coins
             Score = Score + 1;
             map[pacman.y][pacman.x] = 3;
             pacman.x = pacman.x + 1;
             map[pacman.y][pacman.x] = 5;
            }
            else{
             map[pacman.y][pacman.x] = 3;
             pacman.x = pacman.x + 1;
             map[pacman.y][pacman.x] = 5;
            }
         }
         else if ( map[pacman.y][pacman.x+1] == 4) { //Die
            currentState = Game_Over; 
            }
         }
     else if (keyIsDown(DOWN_ARROW)){ // PACMAN MOVE DOWN
         if ( map[pacman.y+1][pacman.x] !== 1 && map[pacman.y+1][pacman.x] !== 4){
            if ( map[pacman.y+1][pacman.x] == 2){ //Collect coins
             Score = Score + 1;
             map[pacman.y][pacman.x] = 3;
             pacman.y = pacman.y + 1;
             map[pacman.y][pacman.x] = 5;               
            }
            else {
             map[pacman.y][pacman.x] = 3;
             pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;
            }
         }else if (map[pacman.y+1][pacman.x] == 4){ //Die
             currentState = Game_Over; 
         }
     }
 else if (keyIsDown(UP_ARROW)){ // PACMAN MOVE UP
  if ( map[pacman.y-1][pacman.x] !== 1 && map[pacman.y+1][pacman.x] !== 4){ 
    if ( map[pacman.y-1][pacman.x] == 2){ //Collect coins
             Score = Score + 1;
             map[pacman.y][pacman.x] = 3;
             pacman.y = pacman.y - 1;
             map[pacman.y][pacman.x] = 5;
            }
            else{
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5;
    }
  } else if ( map[pacman.y-1][pacman.x] == 4){ //Die
      currentState = Game_Over;
    }
}

for (i = 0; i < ghosts_arr.length; i++){
    ghosts_arr[i].move(); 
} 


}