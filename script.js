var body = document.getElementsByTagName('body')[0];

var Shape = function () {
    this.p.createElement('p');
    var canvas = document.getElementsByClassName('canvas');
    canvas.appendChild(this.p);

};

var Square = function(height) {
    
    this.height = document.getElementById('square-side-box').value;
    this.p.style.backgroundColor = red;
    var squarebtn = document.getElementById('square-submit');
    squarebtn.addEventListener('click', this.drawSquare.bind(this));

};
Square.prototype=Object.create(Shape.prototype);
Square.prototype.constructor= Square;

function drawSquare(){
    var square = document.createElement('div');
    square.className = 'square';
    square.style.backgroundColor = red;
    square.style.height = this.height;
    square.style.width = this.height;
}