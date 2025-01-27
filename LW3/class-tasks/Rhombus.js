import Square from './Square.js';

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A rhombus is a type of polygon that is a quadrilateral with all sides having equal length.");
    }

    length() {
        console.log(`The perimeter of the rhombus is ${4 * this.a}`);
    }

    square() {
        console.log(`The area of the rhombus is ${this.a * this.a * Math.sin(this.alpha * Math.PI / 180)}`);
    }

    info() {
        console.log(`Each side of the rhombus is ${this.a}`);
        console.log(`Angles of the rhombus are ${this.alpha} degrees and ${this.beta} degrees`);
        this.length();
        this.square();
    }
}

export default Rhombus;
