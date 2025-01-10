import Square from './Square.js';

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник — це чотирикутник, протилежні сторони якого рівні, а всі кути дорівнюють 90 градусам.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log(`Інформація про прямокутник:
    Довжини сторін: ${this.a}, ${this.b}, ${this.a}, ${this.b}
    Величини кутів: 90°
    Сума довжин сторін: ${2 * (this.a + this.b)}
    Площа: ${this.a * this.b});`);
    }
}

export default Rectangle;

