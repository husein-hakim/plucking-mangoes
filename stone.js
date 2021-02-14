class stone{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x, y, r, options)

        this.image = loadImage("stone.png")

        World.add(world, this.body)
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y)

        rotate(this.body.angle)

        scale(0.1)

        image(this.image, 0, 0)

        pop()
    }
}