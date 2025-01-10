import Square from './Square.js';

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("����������� � �� ������������, ��������� ������� ����� ���, � �� ���� ��������� 90 ��������.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log(`���������� ��� �����������:
    ������� �����: ${this.a}, ${this.b}, ${this.a}, ${this.b}
    �������� ����: 90�
    ���� ������ �����: ${2 * (this.a + this.b)}
    �����: ${this.a * this.b});`);
    }
}

export default Rectangle;

