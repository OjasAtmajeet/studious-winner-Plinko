class dVision {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        push();
        noStroke();
        fill("white");
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}