var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 60;
// var minRadius = 2;

var colorArray = [
    'rgba(99, 84, 75, 0.61)',
    'rgba(65, 58, 55, 0.6)',
    'rgba(57, 51, 48, 0.6)',
    'rgba(79, 69, 63, 0.65)'
];

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);

});



// object: Objects use capital letter function names 
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();

    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;
        this.x += this.dx;

        // interactivity
        if (mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y - this.y < 70 && mouse.y - this.y > -70) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }


        this.draw();
    }
}



var circleArray = [];

for (var i = 0; i < 300; i++) {
    var radius = Math.random() * 4 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    };


    // c.beginPath();
    // c.arc(x, y , radius, 0, Math.PI * 2, false);
    // c.strokeStyle = "green";
    // c.stroke();

    // if (x + radius > innerWidth || x - radius < 0) {
    // 	dx = -dx;
    // }
    // x += dx;

    // if (y + radius > innerHeight || y - radius < 0) {
    // 	dy = -dy;
    // }
    // y += dy;
}

animate();