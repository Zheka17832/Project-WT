import Rectangle from './Rectangle.js';

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("������������ � �� ������������, ��������� ������� ����� ���, � ��������� ���� � ���.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
    }

    info() {
        console.log(`���������� ��� ������������:
    ������� �����: ${this.a}, ${this.b}, ${this.a}, ${this.b}
    �������� ����: ${this.alpha}�,  ${this.beta}�, ${this.alpha}�,  ${this.beta}�
    ���� ������ �����: ${2 * (this.a + this.b)}
    �����: ${this.a * this.b * Math.sin(this.alpha * (Math.PI / 180))});`);
    }
}

export default Parallelogram;
