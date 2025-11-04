class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }

    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
}