//My first game made when I learned about Objects and JQuery
/*
//Create a car constructor - this creates a template for all cars
//name of constructors are variables
let Car = function(x,y) {
    this.x = x, //each property needs the "this" keyword so it can act like a template referencing whichever object
    this.y = y, //x and y are just place holders and refer to the input that is put into the car 
    this.speed = 10;
}

//draw a car method
let drawCar = function(car){
    let carPic = '<img src ="car1.png">'; //image of a car tage saved in the variable (using single quotes outside of double quotes)
    let carElem = $(carPic) //puts the html element in a variable (converts carPic into a jQuery element) which allows us to modify its css
    
    carElem.css({ //acesses the css method of that jQuery element (We use css method instead of offset from jQuery because it is much harder)
        position: "absolute", //to use offset with mutliple elements so we modify th eposition directly accessing the css content
        left: car.x, //horizontal motion
        top: car.y, //vertical motion
        width: 200 //size because default is too big
    })
    
    //This puts the car element in the body at the end
    $('body').append(carElem);
}

//create the object
let playerOne = new Car(200, 200);
//construct the object on the page using the constructor
drawCar(playerOne);

//Player two car
let playerTwo = new Car(300, 300)
drawCar(playerTwo);

*/

//The code above uses the draw car method as a global method. If we only want to use it with the car object we include it in the car object

//Car object
let Car = function(x,y) {
    this.x = x, //each property needs the "this" keyword so it can act like a template referencing whichever object
    this.y = y, //x and y are just place holders and refer to the input that is put into the car 
    this.speed = 10;
}
//Car object constructor using prototype keyword to link object and contructor
Car.prototype.draw = function(){ 
    let carPic = '<img src ="car1.png">'; //image of a car tag saved in the variable (using single quotes outside of double quotes)
    //the "this" key word links the constructor to the object
    this.carElem = $(carPic) //puts the html element in a variable (converts carPic into a jQuery element) which allows us to modify its css
    
    this.carElem.css({ //acesses the css method of that jQuery element (We use css method instead of offset from jQuery because it is much harder)
        position: "absolute", //to use offset with mutliple elements so we modify th eposition directly accessing the css content
        left: this.x, //horizontal motion
        top: this.y, //vertical motion
        width: 200 //size because default is too big
    })
    
    //This puts the car element in the body at the end
    $('body').append(this.carElem);
}

//Now your object has a method inside of it called draw. When use with protopye keyword it is used when constructing an object
//This compares to the last code because instead of having the function that draws the car a general function, this one is a part of the object
/*
//create reference for object
let p1 = new Car(200, 200);
//draw the object call constructor
p1.draw();

let p2 = new Car(200, 400)
p2.draw();
*/

//Create a method for moving our object 
//By using prototype we share information with the constructor
Car.prototype.moveRight = function (){
    
    this.x += this.speed;
    //since we used carElem in the constructor function we can use it here too
    this.carElem.css ({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveLeft = function (){
    
    this.x -= this.speed;
    //since we used carElem in the constructor function we can use it here too
    this.carElem.css ({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveUp = function (){
    
    this.y -= this.speed;
    //since we used carElem in the constructor function we can use it here too
    this.carElem.css ({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveDown = function (){
    
    this.y += this.speed;
    //since we used carElem in the constructor function we can use it here too
    this.carElem.css ({
        left: this.x,
        top: this.y
    })
}


//To test this you can write p1.moveRight(); p1.moveUp(); p1.moveDown(); p1.moveLeft(); in console window 
//create reference for object
let p1 = new Car(200, 200);
//draw the object call constructor
p1.draw();

//check for the keys being pressed on the keyboard, if the key is down run the getKeyAndMove function 
window.addEventListener("keydown", getKeyAndMove, false)

//function of key being pressed
function getKeyAndMove(e){	//event e		
		switch(e.keyCode){
			case 37: //left arrow key
				p1.moveLeft();
				break;
			case 38: //Up arrow key
				p1.moveUp();
				break;
			case 39: //right arrow key
				p1.moveRight();
				break;
			case 40: //down arrow key
				p1.moveDown();
				break;						
		}
	}
	