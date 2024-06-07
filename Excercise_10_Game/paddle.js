class Paddle {
	// Properties of paddle
	constructor(paddleX,paddleY) {
		this.paddleX = paddleX;
		this.paddleY = paddleY;
		this.paddleWidth = 150;
		this.paddleHeight = 20;
		this.speed = 15;
		this.xchange = 0;
		this.color = 100;
	}

	// checks if ball collides with paddle
	collided(ball) {
        return ball.xPos + ball.radius >= this.paddleX - this.paddleWidth / 2 &&
            ball.xPos - ball.radius <= this.paddleX + this.paddleWidth / 2 &&
            ball.yPos + ball.radius >= this.paddleY - this.paddleHeight / 2 &&
            ball.yPos - ball.radius <= this.paddleY + this.paddleHeight / 2;
    }

	draw() {
		fill(this.color);
		rect(this.paddleX, this.paddleY,this.paddleWidth,this.paddleHeight,20);
	}

	// update the paddle position
	update(){
		this.paddleX += this.xchange
		this.paddleX = constrain(this.paddleX, this.paddleWidth/2, width-this.paddleWidth/2)
	}

	// paddles movement depending on the arrow key input
	move() {
		if (keyIsDown(LEFT_ARROW)){
			this.xchange = -this.speed
		} else if (keyIsDown(RIGHT_ARROW)){
			this.xchange = this.speed;
		} else {
			this.xchange = 0
		}
	}
	
	// reset paddle position
	reset() {
		this.paddleX = (width/2)-75;
		this.paddleY = (height/1.1);
	}
}
