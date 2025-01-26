import Rectangle from './Rectangle.js';

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides parallel. It has opposite angles equal.");
    }

    length() {
        console.log(`The perimeter of the parallelogram is ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`The area of the parallelogram is ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
    }

    info() {
        console.log(`Sides of the parallelogram are ${this.a} and ${this.b}`);
        console.log(`Angles of the parallelogram are ${this.alpha} degrees and ${this.beta} degrees`);
        this.length();
        this.square();
    }
}

export default Parallelogram;
