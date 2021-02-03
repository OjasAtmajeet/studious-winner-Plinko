class particle {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.76
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(150, 255)), color(random(150, 255)), color(random(150, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        if (this.body.position.y < 600) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            noStroke();
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0, 0, this.r, this.r);
            pop();
        }
        else {
            World.remove(world, this.body);
            this.Visiblity += -5;
            
        }
        
    }
    score() {
        if (this.body.position.y > 500 && this.body.position.y < 525) {
            if (this.body.position.x < 250) {
                score += 100;
                
            }
            if (this.body.position.x < 500 && this.body.position.x > 250 ) {
                score += 200;
            }
            if (this.body.position.x < 750 && this.body.position.x > 500 ) {
                score += 400;
            }
            if (this.body.position.x > 750) {
                score += 800;
                gameState = 1;
            }
        }
        
    }
}