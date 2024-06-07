class Ball{
    // Properties of the ball
    constructor(){
        this.radius = 20;
        this.xPos=width/2
        this.yPos=height/1.5
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.resetCurrentSpeed = 5
        this.currentSpeed = this.resetCurrentSpeed;
        this.terminalSpeed = 15

    }
    //reset ball properties
    reset() {
        this.xPos = width / 2;
        this.yPos = height / 2;
        let angle = random(-PI / 2, PI / 4);
        this.currentSpeed=this.resetCurrentSpeed
        this.xSpeed = this.currentSpeed * Math.sin(angle);
        this.ySpeed = this.currentSpeed * Math.cos(angle);

    }
    // update the ball
    update() {
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;

        // sets angle of bounce depending on where the ball hit on the paddle
        if (paddle.collided(this)) {
            ballCollisionSFX.play();
            let diff = this.xPos - (paddle.paddleX-paddle.paddleWidth/2);
            let angle = map(diff, -paddle.paddleWidth/2,paddle.paddleWidth/2, radians(225), radians(315)); // Adjust the bounce angle as needed
            this.xSpeed = this.currentSpeed * cos(angle);
            this.ySpeed = this.currentSpeed * sin(angle); // Reverse the y-speed for consistent bounce direction
            this.yPos = paddle.paddleY - paddle.paddleHeight / 2 - this.radius;
        }

        // Check collision with walls
        if (this.xPos + this.radius / 2 > width || this.xPos - this.radius / 2 < 0) {
            ballCollisionSFX.play();
            this.xSpeed *= -1;
        }
        if ( (this.yPos - this.radius / 2) - 60 < 0) {
            ballCollisionSFX.play();
            this.ySpeed *= -1;
        }
        if(this.yPos + this.radius/2>height){
            if (gameManager.currentState== gameManager.GameState.Gameplay_Screen){
                gameManager.currentState.handleBallOutOfBounds()
            }
        }
        // Check collision with enemies
        for (let i = enemyManager.entitiesList.length - 1; i >= 0; i--) {
            let enemy = enemyManager.entitiesList[i];
            if (this.collided(enemy)) {
                if (gameManager.currentState== gameManager.GameState.Gameplay_Screen){
                    gameManager.currentState.score()
                }
                // Remove the collided enemy
                enemyManager.entitiesList.splice(i, 1);
                console.log(enemyManager.entitiesList)
                // Bounce off the enemy
                let dx = this.xPos - enemy.xPos;
                let dy = this.yPos - enemy.yPos;
                let angle = atan2(dy, dx);
                this.xSpeed = this.currentSpeed * cos(angle);
                this.ySpeed = this.currentSpeed * sin(angle);
            }
        }

    }
    // check collision with enemies
    collided(obj) {
        let closestX = constrain(this.xPos, obj.xPos - obj.width / 2, obj.xPos + obj.width / 2);
        let closestY = constrain(this.yPos, obj.yPos - obj.height / 2, obj.yPos + obj.height / 2);
        let distanceX = this.xPos - closestX;
        let distanceY = this.yPos - closestY;
        let distanceSquared = distanceX * distanceX + distanceY * distanceY;
        return distanceSquared < this.radius * this.radius;
    }
    // increase speed upto a apoint
    increaseSpeed(){
        this.currentSpeed++
        this.currentSpeed=constrain(this.currentSpeed,this.resetCurrentSpeed,this.terminalSpeed)
    }
    show(){
        fill(255)
        ellipseMode(CENTER)
        ellipse(this.xPos,this.yPos,this.radius,this.radius)
    }
}