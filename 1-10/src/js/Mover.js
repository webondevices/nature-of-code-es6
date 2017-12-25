class Mover {
    constructor() {
        this.location = sketch.createVector(sketch.width / 2, sketch.height / 2);
        this.velocity = sketch.createVector(0, 0);
        this.acceleration = sketch.createVector(-0.001, 0.01);
        this.topspeed = 10;
    }

    update () {
        const mouse = sketch.createVector(sketch.pmouseX, sketch.pmouseY);
        const direction = p5.Vector.sub(mouse, this.location);
         
        direction.normalize();
        
        direction.mult(0.5);
        
        this.acceleration = direction;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
    }

    display() {
        sketch.stroke(0);
        sketch.fill(175);
        sketch.ellipse(this.location.x, this.location.y, 16, 16);
    }

    checkEdges() {
        if (this.location.x > sketch.width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = sketch.width;
        }

        if (this.location.y > sketch.height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = sketch.height;
        }
    }
}

export default Mover;