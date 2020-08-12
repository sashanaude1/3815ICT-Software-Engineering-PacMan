class Ghost {
    constructor(x, y){
        this.x = x; 
        this.y = y; 
    }

    move(){

        let nums = [1,2,3,4];
        let movement = random(nums); 
        if (movement == 1){ // GHOST MOVE LEFT
			if ( map[this.y][this.x-1] !== 1 && map[this.y][this.x-1] !== 5){
				map[this.y][this.x] = 2;
				this.x = this.x - 1;
				map[this.y][this.x] = 4;
            }
            else if( map[this.y][this.x-1] == 5){ //EAT PACMAN
                print("Game Over"); 
				this.x = this.x - 1;
                map[this.y][this.x] = 4;
                currentState = Game_Over;
            }
		}
		 else if (movement == 2){ //  MOVE RIGHT
		 	if ( map[this.y][this.x+1] !== 1 && map[this.y][this.x+1] !== 5){
		 		map[this.y][this.x] = 2;
		 		this.x = this.x + 1;
		 		map[this.y][this.x] = 4;
             }
             else if( map[this.y][this.x+1] == 5){ //EAT PACMAN
                print("Game Over");
                this.x = this.x + 1;
                map[this.y][this.x] = 4;
                currentState = Game_Over;
            }
		 }
		 else if (movement == 3 ){ //GHOST MOVE DOWN
		 	if ( map[this.y+1][this.x] !== 1 && map[this.y+1][this.x] !== 5){
		 		map[this.y][this.x] = 2;
		 		this.y = this.y + 1;
                map[this.y][this.x] = 4;
             }
             else if( map[this.y+1][this.x] == 5){ //EAT PACMAN
                print("Game Over"); 
                this.y = this.y + 1;
                map[this.y][this.x] = 4;
                currentState = Game_Over;
             }
		 }
     else if (movement == 4){ // GHOST MOVE UP
      if ( map[this.y-1][this.x] !== 1 && map[this.y-1][this.x] !== 5 ){
        map[this.y][this.x] = 2;
        this.y = this.y - 1;
        map[this.y][this.x] = 4;
            }
            else if( map[this.y-1][this.x] == 5){ //EAT PACMAN
                print("Game Over"); 
                this.y = this.y - 1;
                map[this.y][this.x] = 4;
                currentState = Game_Over;
             }
        }
    }
}