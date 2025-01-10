class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("������� - �� ������������, � ����� �� ������� ���, � �� ���� ��������� 90 ��������.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log(`���������� ��� �������:
    ������� �����: ${this.a}, ${this.a}, ${this.a}, ${this.a}
    �������� ����: 90�
    ���� ������ �����: ${4 * this.a}
    �����: ${this.a * this.a});`);
    }
}

export default Square;
