var inputSquareSide = document.getElementById('square-side-box');
var inputRectHeight = document.getElementById('rect-height-box');
var inputRectWidth = document.getElementById('rect-length-box');
var inputTriHeight = document.getElementById('tri-height-box');
var inputCircleRadius = document.getElementById('cir-radius-box');

var shapeName = document.getElementById('shape-name-detail');
var widthDetail = document.getElementById('width-detail');
var heightDetail = document.getElementById('height-detail');
var radiusDetail = document.getElementById('radius-detail');
var areaDetail = document.getElementById('area-detail');
var perimeterDetail = document.getElementById('perimeter-detail');
var canvas = document.getElementById('canvas');

document.getElementById('cir-submit').addEventListener('click', drawCircle);
document.getElementById('square-submit').addEventListener('click', drawSquare);
document.getElementById('rect-submit').addEventListener('click', drawRectangle);
document.getElementById('tri-submit').addEventListener('click', drawTriangle);

function drawCircle() {
    var inputRadius = inputCircleRadius.value;

new Circle(inputRadius);
}

function drawSquare() {
    var inputSide = inputSquareSide.value;
    new Square(inputSide);
}

function drawRectangle() {
    var inputHeight = inputRectHeight.value;
    var inputWidth = inputRectWidth.value;
    new Rectangle(inputHeight, inputWidth);
}

function drawTriangle() {
    var inputHeight = inputTriHeight.value;
    new Triangle(inputHeight);
}

function Shape(width, height) {
    this.width = width;
    this.height = height;

}

Shape.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape ' + this.cssClass;
    var x = Math.floor(Math.random()*(600-this.width));
    var y = Math.floor(Math.random()*(600-this.height));
    this.div.style.top = y +'px';
    this.div.style.left = x + 'px';
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';

    this.div.addEventListener('click', this.describe.bind(this));
    this.div.addEventListener('dblclick', function() {
        this.div.remove();
    }.bind(this));
    canvas.appendChild(this.div);
}

Shape.prototype.describe = function() {
    shapeName.innerText = this.constructor.name;
    widthDetail.innerText = this.width;
    heightDetail.innerText = this.height;
    radiusDetail.innerText = this.radius;
    areaDetail.innerText = this.area();
    perimeterDetail.innerText = this.perimeter();
}

function Circle(radius) {
   Shape.call(this, 2 * radius, 2 * radius);
   this.radius = radius;
   this.cssClass = 'circle';
   this.draw();
   
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

Circle.prototype.perimeter = function() {
    return 2*Math.PI*this.radius;
}

function Square(side) {
    Shape.call(this, side, side);
    
    this.side = side;
    this.cssClass ='square';
    this.draw();

}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function() {
    return Math.pow(this.side, 2);
}

Square.prototype.perimeter = function() {
    return 4 * this.side;
}

function Rectangle(height, width) {
    Shape.call(this, height, width);
    this.height = height;
    this.width = width;
    this.cssClass = 'rectangle';
    this.draw();
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return (this.height * this.width);
}

Rectangle.prototype.perimeter = function() {
    return (2*this.height) + (2*this.width);
}

function Triangle(height) {
    this.height = height;
    this.draw();
}

Triangle.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape triangle';
    var x = Math.floor(Math.random()*(600-this.height));
    var y = Math.floor(Math.random()*(600-this.height));
    this.div.style.top = y +'px';
    this.div.style.left = x + 'px';
    this.div.style.width = '0px';
    this.div.style.height = '0px';
    this.div.style.borderBottom = this.height + 'px';
    this.div.style.borderRight = this.height + 'px';
    this.div.style.borderBottomColor = 'blue';
    this.div.style.borderRightColor = 'transparent';
    this.div.style.borderBottomStyle = 'solid';
    this.div.style.borderRightStyle = 'solid';
    this.div.addEventListener('click', this.describe.bind(this));
    this.div.addEventListener('dblclick', function() {
        this.div.remove();
    }.bind(this));
    canvas.appendChild(this.div);
}

Triangle.prototype.describe = function() {
    shapeName.innerText = this.constructor.name;
    widthDetail.innerText = this.height;
    heightDetail.innerText = this.height;
    radiusDetail.innerText = this.radius;
    areaDetail.innerText = this.area();
    perimeterDetail.innerText = this.perimeter();
}

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return 0.5 * this.height * this.height;
}

Triangle.prototype.perimeter = function() {
    return 2 * this.height + (Math.sqrt(2 * Math.pow(this.height, 2)));
}
