var inputSquareSide = document.getElementById('square-side-box');
var inputRectHeight = document.getElementById('rect-height-box');
var inputRectWidth = document.getElementById('rect-width-box');
var inputTriHeight = document.getElementById('tir-height-box');
var inputCircleRadius = document.getElementById('cir-radius-box');

var shapeName = document.getElementById('shape-name-detail');
var widthDetail = document.getElementById('width-detail');
var heightDetail = document.getElementById('height-detail');
var radiusDetail = document.getElementById('radius-detail');
var areaDetail = document.getElementById('area-detail');
var perimeterDetail = document.getElementById('perimeter-detail');

document.getElementById('square-submit').addEventListener('click', drawCircle());
 
function drawCircle() {
    var inputRadius = inputCircleRadius.value;

new Circle(inputRadius);
}

function Shape(width, height) {
    this.width = width;
    this.height = height;

};

Shape.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape ' + this.cssClass;
    var x = Math.floor(Math.random()*600-this.width);
    var y = Math.floor(Math.random()*600-this.height);
    this.div.style.top = y +'px';
    this.div.style.left = x + 'px';
    this.div.style.width = this.width;
    this.div.style.height = this.height;
    this.div.addEventListener('click', this.describe.bind(this));
    this.div.addEventListener('dblclick', function() {
        this.div.remove();
    }.bind(this));
    canvas.appendChild(this.div);
};

Shape.prototype.describe = function() {
    shapeName = this.constructor.name;
    widthDetail = this.width;
    heightDetail = this.height;
    radiusDetail = this.radius;
    areaDetail = this.area();
    perimeterDetail = this.perimeter();
};

function Circle(radius) {
   Shape.call(this, 2*radius, 2*radius);
   this.radius = radius;
   this.cssClass = 'circle';
   this.draw();
   
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI*Math.pow(this.radius, 2);
}

Circle.prototype.area = function() {
    return 2*Math.PI*this.radius;
}