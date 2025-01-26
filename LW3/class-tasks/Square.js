class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles).");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log(`Each side of the square is ${this.a}`);
        console.log(`Each angle of the square is 90 degrees`);
        this.length();
        this.square();
    }
}

export default Square;
