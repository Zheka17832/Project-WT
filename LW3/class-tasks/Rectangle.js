import { Square } from "./Square.js";

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a quadrilateral with four right angles. It has opposite sides that are equal in length.");
    }

    length() {
        console.log(`The perimeter of the rectangle is ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`The area of the rectangle is ${this.a * this.b}`);
    }

    info() {
        console.log(`Length of the rectangle is ${this.a} and width is ${this.b}`);
        console.log(`Each angle of the rectangle is 90 degrees`);
        this.length();
        this.square();
    }
}

export default Rectangle;

