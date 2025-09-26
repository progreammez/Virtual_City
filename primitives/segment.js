class Segment{
    constructor(p1,p2){
        this.p1=p1;
        this.p2=p2;
    }

    equals(seg){
        return this.p1.includes(seg.p1) && this.p2.includes(seg.p2)
    }

    includes(point){
        return this.p1.equals(point) || this.p2.equals(point);
    }

    draw(ctx, color = 'black', width = 2){
        ctx.beginPath();
        ctx.StrokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }
}
