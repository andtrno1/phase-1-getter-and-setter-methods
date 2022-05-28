// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    set diameter(diameter){
        this.radius = diameter / 2;
    }

    set Circumference(circumference){
        this.radius = circumference / (2 * Math.PI);
    }

    set Area(area){
        this.radius = Math.sqrt(area / Math.PI);
    }

    get diameter(){
        return  this.radius * 2
    }

    get  Circumference(){
        return this.radius * 2 * Math.PI
    }

    get Area(){
        return Math.sqrt(this.radius) * Math.PI
    }
}