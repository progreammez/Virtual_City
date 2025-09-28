class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    equals(point){
        return this.x === point.x && this.y === point.y;
    }

    draw(ctx, color = 'black', size = 18){
        ctx.beginPath();
        const rad = size / 2;
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
    }
}
