
/* Ian's comment- This is the third project for Udacity's FEND course. 
 * The goal is utilized the prewritten files in order to create a frogger game.
 * Tasks in order of importance:
 *  1. Read over project files
 *  2. Make notes in order to understand pre-written files
 *  3. Figure out starting point
 *  4. Starting point was to instantiate new Player Class and to add update and render functionality to the prototype, create allEnemy array and instantiate new Player object within player.
 * 
 *   
*/



// Ian's comment- This begins the functionality for the enemy 
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Ian's comment- This creates the movement of the ladybugs.
    this.x += this.speed * dt;
    // allEnemies[1] = 120

    // Ian's comments- Create a row of three enemies.
    allEnemies[0].y = enemyCoordinates[0];
    allEnemies[1].y = enemyCoordinates[1];
    allEnemies[2].y = enemyCoordinates[2];


    // Ian's comment- if enemy x coordinate reaches the end of the board x (505), x should be reset to 0;
    for (enemy of allEnemies) {
        if (enemy.x > 505) {
            this.x = -60;
            enemy.randomSpeed();
            console.log("reset ladybug");
        }
    }

    // console.log(`Enemys time is ${dt}`);

    // Ian's comment - This sets up collision detection for the enemy LadyBugs and the player
    for (enemy of allEnemies) {
    if (player.x < enemy.x + 60 &&
        player.x + 30 > enemy.x &&
        player.y < enemy.y + 25 &&
        player.y + 30 > enemy.y) {
            player.endRound();
          
        }
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Ian's comment- 
Enemy.prototype.randomSpeed = function() {
    var randomNum = Math.floor(Math.random() * (10 - 5) + 1);
    this.speed = 75 * randomNum;  
}





























// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Ian's comment- This begins the functionality for the player


//  Ian's comment- creates player object and assigns initial x,y coordinates and 
var Player = function(x,y,speed) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
}

//  Ian's comment- Update the player's information over and over again is called in the updateEntities function
Player.prototype.update = function(dt) {

    // console.log(dt);

    // Ian's comment- Three rows of ladybug enemies generated


    
};

//  Ian's comment- Draw the player on the screen, required for game play

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Ian's comment - This method handles the movement of the player based on which of the arrow keys is placed
Player.prototype.handleInput = function(keypress) {

    // Ian's comment- This switch statement handles the key press in order to move the figure across the screen, it also sets the limits of the player. If a player reaches the end of the board the players coordinate will no longer be incremented in that direction. If the player reaches the water a function is called and the player has completed the round.
    switch (keypress) {
        case 'left': 
        if (this.x === 0 ) { 
            this.x = 0 
        } else { 
        this.x -=  50 + this.speed;
        }
        break;
        case 'up': 
        if (this.y === -20) {
            player.endRound();
        } else {
        this.y -= 30 + this.speed;
        } 
        break;
        case 'right': 
        if (this.x === 400) {
            this.x = 400;
        } else {
        this.x += 50 + this.speed;
        }
        break;
        case 'down': 
            if (this.y === 380) {
                this.y = 380;
            } else {
        this.y += 30 + this.speed;
            }
        break;
    }

}

// Ian's comment- This method handles what happens if the player  succesfully makes it to the water, without colligin and the round has ended.
Player.prototype.endRound = function () {
    
        player.x = 200;
        player.y = 380;
} 


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var enemyCoordinates = [60, 145, 225];

var player = new Player(200, 380, 50);



// Ian's comment- This for loop creates 3 new Enemy Objects and adds them to the allEnemies array 
var numEnemies = 3;

for(var i = 0;i < numEnemies; i++) {
    enemy = new Enemy(-60,60,120);
    allEnemies.push(enemy);
    enemy.randomSpeed();
}

// Ian's comment- I need to create a random number generator