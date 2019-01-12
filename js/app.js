
/* Ian's comment- This is the third project for Udacity's FEND course. 
 * The goal is utilized the prewritten files in order to create a frogger game.
 * Tasks in order of importance:
 *  1. Read over project files
 *  2. Make notes in order to understand pre-written files
 *  3. Figure out starting point
 *   
*/

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//  Ian's comment- creates player
var Player = function() {
    this.sprite = 'images/char-boy.png'

}

//  Ian's comment- Update the player's
Player.prototype.update = function(dt) {

};

//  Ian's comment- Draw the player on the screen, required for game play

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



var 
    enemy1 = new Enemy(), 
    enemy2 = new Enemy();

var allEnemies = [enemy1,enemy2 ];

var player = new Player();



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

