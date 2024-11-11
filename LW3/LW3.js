// �������� 1.2.3
// ��������� ��'��� car1 �� ��������� new Object() � ��������� �������������
var car1 = new Object();
car1.color = "blue"; // �������� ����
car1.maxSpeed = 120; // ������� �����
car1.driver = {
    name: "��'� �������",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

// �������� 1.2.4
// ��������� ��'��� car2 �� ��������� ���������� ������� ��'����
var car2 = {
    color: "red",
    maxSpeed: 150,
    driver: {
        name: "��'� �������",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    "number of accidents": 2
};

// �������� 1.2.5
// ������ ����� drive �� ��'���� car
car1.drive = function () {
    console.log("I am not driving at night");
};
car1.drive();

// �������� 1.2.6
// ������ ����� drive �� ��'���� car2
car2.drive = function () {
    console.log("I can drive anytime");
};
car2.drive();

// �������� 1.2.7
// ��������� ���� Truck �� ��������� �������-������������
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;


    // ����� trip ��������, �� � ����, � �������� ���������� ��� �����
    this.trip = function () {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = Driver ${ this.driver.name };
            message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
            message += and has ${ this.driver.experience } years of experience;
            console.log(message);
        }
    };
}

// �������� 1.2.8
// ������ ����� AssignDriver ����� prototype, ���� ���� ���������� driver
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// �������� 1.2.10
// ��������� ��� ��'���� ����� Truck
var truck1 = new Truck("green", 3000, 60, "Volvo", "Model A");
var truck2 = new Truck("yellow", 4000, 55, "MAN", "Model B");

truck1.AssignDriver("��'� �������", true, 5);
truck2.AssignDriver("��'� �������", false, 3);

truck1.trip();
truck2.trip();

// �������� 1.2.12-1.2.15
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a quadrilateral with all sides equal and all angles 90 degrees.");
    }

    length() {
        console.log(`Length of sides: ${this.a * 4}`);
    }

    square() {
        console.log(`Area: ${this.a * this.a}`);
    }

    info() {
        console.log(`Square - Sides: ${this.a}, Angles: 90 degrees, Perimeter: ${this.a * 4}, Area: ${this.a * this.a}`);
    }
}

// �������� 1.2.16-1.2.17
// ��������� ���� Rectangle, �� ������ Square (�����������)
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle has opposite sides equal and all angles 90 degrees.");
    }

    length() {
        console.log(`Perimeter: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Area: ${this.a * this.b}`);
    }

    info() {
        console.log(`Rectangle - Sides: ${this.a} and ${this.b}, Angles: 90 degrees, Perimeter: ${2 * (this.a + this.b)}, Area: ${this.a * this.b}`);
    }
}

// �������� 1.2.18-1.2.19
// ��������� ���� Rhombus (����), �� ������ Square
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A rhombus has all sides equal and opposite angles equal.");
    }

    length() {
        console.log(`Perimeter: ${this.a * 4}`);
    }

    square() {
        console.log(`Area: ${this.a * this.a * Math.sin((this.alpha * Math.PI) / 180)}`);
    }

    info() {
        console.log(`Rhombus - Sides: ${this.a}, Angles: ${this.alpha} and ${this.beta}, Perimeter: ${this.a * 4}, Area: ${this.a * this.a * Math.sin((this.alpha * Math.PI) / 180)}`);
    }
}

// �������� 1.2.21
// ��������� ���� Parallelogram, �� ������ Rectangle
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram has opposite sides equal and opposite angles equal.");
    }

    info() {
        console.log(`Parallelogram - Sides: ${this.a} and ${this.b}, Angles: ${this.alpha} and ${this.beta}, Perimeter: ${2 * (this.a + this.b)}, Area: ${this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)}`);
    }
}

// ������ ������ info �� help ��� ������� �����
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// ��������� ��'���� ��� ������� ����� �� ��������� ������ info
const square = new Square(4);
const rectangle = new Rectangle(5, 10);
const rhombus = new Rhombus(6, 120, 60);
const parallelogram = new Parallelogram(7, 9, 110, 70);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();