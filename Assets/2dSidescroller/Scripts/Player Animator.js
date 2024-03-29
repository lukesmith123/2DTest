#pragma strict

//This is a simplified script to change the textures of the player based on what direction the player is going.
//In this script we use velocity to determine that.

//This defines how fast the textures during walking animations switch.
var frameSpeed:int = 6;

//These are all of the character's textures we want to use to animate him.
var idleLeft:Texture;
var idleRight:Texture;
var left1:Texture;
var left2:Texture;
var right1:Texture;
var right2:Texture;
var jumpUpLeft:Texture;
var jumpDownLeft:Texture;
var jumpUpRight:Texture;
var jumpDownRight:Texture;

private var counter:float = 0.0;
//To determine if the player is going left or right, we just use a true/false variable to set the direction.
//This is important for animating the character to go left or right.
private var direction = true;

function Update () {
//Base the frame speed based on time. We only use this for the walking animation. Jumping and idle don't use it.
counter += Time.deltaTime*frameSpeed;

//if the player is moving right, then we'll set direction to true. We defined true as going right. We only use it to set proper idle.
if(rigidbody.velocity.x > 0.25 && direction == false){
direction = true;
}
//if the player is moving left, then we'll set the direction to false. We defined false as going left. We only use it to set proper idle.
if(rigidbody.velocity.x < -0.25 && direction == true){
direction = false;
}

//set animation for player being idle
if(rigidbody.velocity.x < 0.25 && rigidbody.velocity.x > -0.25 && rigidbody.velocity.y < 0.25 && rigidbody.velocity.y > -0.25){
	if(renderer.material.mainTexture != idleRight && direction == true){
		renderer.material.mainTexture = idleRight;
	}
	if(renderer.material.mainTexture != idleLeft && direction == false){
		renderer.material.mainTexture = idleLeft;
	}
}

//set animation for player jumping up
if(rigidbody.velocity.y > 2){
	if(direction == true && renderer.material.mainTexture != jumpUpRight){
	renderer.material.mainTexture = jumpUpRight;
	}
	if(direction == false && renderer.material.mainTexture != jumpUpLeft){
	renderer.material.mainTexture = jumpUpLeft;
	}
}

//set animation for player falling down
if(rigidbody.velocity.y < -2){
	if(direction == true && renderer.material.mainTexture != jumpDownRight){
	renderer.material.mainTexture = jumpDownRight;
	}
	if(direction == false && renderer.material.mainTexture != jumpDownLeft){
	renderer.material.mainTexture = jumpDownLeft;
	}
}

//animation to walk right
if(rigidbody.velocity.x > 0.25 && rigidbody.velocity.y > -2 && rigidbody.velocity.y < 2){
	if(counter > 0 && renderer.material.mainTexture != right1){
		renderer.material.mainTexture = right1;
	}
	if(counter > 1 && renderer.material.mainTexture != right2){
		renderer.material.mainTexture = right2;
	}
	if(counter > 2){
	counter = 0.0;
	}
}

//animation to walk left
if(rigidbody.velocity.x < -0.25 && rigidbody.velocity.y > -2 && rigidbody.velocity.y < 2){
	if(counter > 0 && renderer.material.mainTexture != left1){
		renderer.material.mainTexture = left1;
	}
	if(counter > 1 && renderer.material.mainTexture != left2){
		renderer.material.mainTexture = left2;
	}
	if(counter > 2){
	counter = 0.0;
	}
}



}