// ��������� ���� Square
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
            console.error("�����-��� �� ���� �� 0 �� 180 �������.");
        }
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        if (value > 0 && value < 180) {
            this._beta = value;
        } else {
            console.error("����-��� �� ���� �� 0 �� 180 �������.");
        }
    }

    static help() {
        console.log("���� � �� ������������, � ����� �� ������� ���, ��� ��������� ���� ���.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a * Math.sin(this._alpha * (Math.PI / 180));
    }

    info() {
        console.log(`���������� ��� ����:
    ������� �����: ${this.a}, ${this.a}, ${this.a}, ${this.a}
    �������� ����: ${this.alpha}�, ${this.beta}�, ${this.alpha}�, ${this.beta}�
    ���� ������ �����: ${4 * this.a}
    �����: ${this.a * this.a * Math.sin(this._alpha * (Math.PI / 180))});`);
    }
}

export default Rhombus;

