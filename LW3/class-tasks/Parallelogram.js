import Rectangle from './Rectangle.js';

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм — це чотирикутник, протилежні сторони якого рівні, а протилежні кути — рівні.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
    }

    info() {
        console.log(`Інформація про паралелограм:
    Довжини сторін: ${this.a}, ${this.b}, ${this.a}, ${this.b}
    Величини кутів: ${this.alpha}°,  ${this.beta}°, ${this.alpha}°,  ${this.beta}°
    Сума довжин сторін: ${2 * (this.a + this.b)}
    Площа: ${this.a * this.b * Math.sin(this.alpha * (Math.PI / 180))});`);
    }
}

export default Parallelogram;
