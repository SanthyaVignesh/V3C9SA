var number1, number2,input1,input2;
var b1,b2;

function add(){
    console.log(number1 + number2);
}

function multiply(){
  console.log(number1 * number2);
}

function setup() {
  createCanvas(400, 400);

  input1 = createInput();
  input1.position(5,60);

  input2 = createInput();
  input2.position(200,60);

  b1 = createButton("ADD");
  b1.position(10,200);
  b1.mousePressed(add);

  b2 = createButton("MUTLIPLY");
  b2.position(100,200);
  b2.mousePressed(multiply);
}

function draw() {
  background(200,16,200);

  text("Number 1",70,50);
  text("Number 2", 250,50);

  //console.log(input1.value());
  //parseInt() ===> converts string type data inside text box into a interger number(means whole number)

  number1 = parseInt(input1.value());
  
}