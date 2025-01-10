// Імпортуємо клас Square
import Square from './Square.js';

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        if (value > 0 && value < 180) {
            this._alpha = value;
        } else {
            console.error("Альфа-кут має бути від 0 до 180 градусів.");
        }
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        if (value > 0 && value < 180) {
            this._beta = value;
        } else {
            console.error("Бета-кут має бути від 0 до 180 градусів.");
        }
    }

    static help() {
        console.log("Ромб — це чотирикутник, у якого всі сторони рівні, але протилежні кути рівні.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a * Math.sin(this._alpha * (Math.PI / 180));
    }

    info() {
        console.log(`Інформація про ромб:
    Довжини сторін: ${this.a}, ${this.a}, ${this.a}, ${this.a}
    Величини кутів: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
    Сума довжин сторін: ${4 * this.a}
    Площа: ${this.a * this.a * Math.sin(this._alpha * (Math.PI / 180))});`);
    }
}

export default Rhombus;

