class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це чотирикутник, у якого всі сторони рівні, а всі кути дорівнюють 90 градусам.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log(`Інформація про квадрат:
    Довжини сторін: ${this.a}, ${this.a}, ${this.a}, ${this.a}
    Величини кутів: 90°
    Сума довжин сторін: ${4 * this.a}
    Площа: ${this.a * this.a});`);
    }
}

export default Square;
