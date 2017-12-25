class Walker {
    constructor() {
        this.x = sketch.width / 2;
        this.y = sketch.height / 2;
    }
  
    render() {
        sketch.stroke(0);
        sketch.point(this.x, this.y);
    }
  
    step() {
        const choice = sketch.floor(sketch.random(4));
      
        switch(choice) {
            case 0:
                this.x++;
                break;
            case 1:
                this.x--;
                break;
            case 2:
                this.y++;
                break;
            default:
                this.y--;
        }
    
        this.x = sketch.constrain(this.x, 0, sketch.width - 1);
        this.y = sketch.constrain(this.y, 0, sketch.height - 1);
    };
}

export default Walker;