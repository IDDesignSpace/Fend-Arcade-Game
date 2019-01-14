
/* Ian's comment- This is the third project for Udacity's FEND course. 
 * The goal is utilized the prewritten files in order to create a frogger game.
 * Tasks in order of importance:
 *  1. Read over project files
 *  2. Make notes in order to understand pre-written files
 *  3. Figure out starting point
 *  4. Starting point was to instantiate new Player Class and to add update and render functionality to the prototype, create allEnemy array and instantiate new Player object within player.
 *  5. 
 *   
*/

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
    console.log(dt);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


//  Ian's comment- creates player object and assigns initial x,y coordinates and 
var Player = function(x,y,speed) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
}

//  Ian's comment- Update the player's information over and over again is called in the updateEntities function
Player.prototype.update = function(dt) {

    console.log(dt);

    
};

//  Ian's comment- Draw the player on the screen, required for game play

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keypress) {

    // Ian's comment- This switch statement handles the key press in order to move the figure across the screen
    switch (keypress) {
        case 'left': 
        this.x -=  50 + this.speed;
        break;
        case 'up': 
        this.y -= 30 + this.speed;
        break;
        case 'right': 
        this.x += 50 + this.speed;
        break;
        case 'down': 
        this.y += 30 + this.speed;
        break;
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var player = new Player(200,380,50);

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

// Ian's comment- This for loop creates 5 new Enemy Objects and adds them to the allEnemies array 
var numEnemies = 5;
for(var i = 0;i < numEnemies; i++) {
    allEnemies.push(new Enemy());
}