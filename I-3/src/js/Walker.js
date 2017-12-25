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
        const choice = sketch.random(1);
      
        if (choice < 0.4) {
            this.x++;
          } else if (choice < 0.6) {
            this.x--;
          } else if (choice < 0.8) {
            this.y++;
          } else {
            this.y--;
          }
    
        this.x = sketch.constrain(this.x, 0, sketch.width - 1);
        this.y = sketch.constrain(this.y, 0, sketch.height - 1);
    };
}

export default Walker;