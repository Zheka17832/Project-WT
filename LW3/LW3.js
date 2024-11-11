// Завдання 1.2.3
// Створюємо об'єкт car1 за допомогою new Object() з вказаними властивостями
var car1 = new Object();
car1.color = "blue"; // довільний колір
car1.maxSpeed = 120; // довільне число
car1.driver = {
    name: "Ім'я Прізвище",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

// Завдання 1.2.4
// Створюємо об'єкт car2 за допомогою синтаксису літерала об'єкта
var car2 = {
    color: "red",
    maxSpeed: 150,
    driver: {
        name: "Ім'я Прізвище",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    "number of accidents": 2
};

// Завдання 1.2.5
// Додаємо метод drive до об'єкта car
car1.drive = function () {
    console.log("I am not driving at night");
};
car1.drive();

// Завдання 1.2.6
// Додаємо метод drive до об'єкта car2
car2.drive = function () {
    console.log("I can drive anytime");
};
car2.drive();

// Завдання 1.2.7
// Створюємо клас Truck за допомогою функції-конструктора
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;


    // Метод trip перевіряє, чи є водій, і виводить інформацію про нього
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

// Завдання 1.2.8
// Додаємо метод AssignDriver через prototype, який задає властивість driver
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// Завдання 1.2.10
// Створюємо два об'єкти класу Truck
var truck1 = new Truck("green", 3000, 60, "Volvo", "Model A");
var truck2 = new Truck("yellow", 4000, 55, "MAN", "Model B");

truck1.AssignDriver("Ім'я Прізвище", true, 5);
truck2.AssignDriver("Ім'я Прізвище", false, 3);

truck1.trip();
truck2.trip();

// Завдання 1.2.12-1.2.15
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

// Завдання 1.2.16-1.2.17
// Створюємо клас Rectangle, що наслідує Square (прямокутник)
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

// Завдання 1.2.18-1.2.19
// Створюємо клас Rhombus (ромб), що наслідує Square
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

// Завдання 1.2.21
// Створюємо клас Parallelogram, що наслідує Rectangle
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

// Виклик методів info та help для кожного класу
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// Створюємо об'єкти для кожного класу та викликаємо методи info
const square = new Square(4);
const rectangle = new Rectangle(5, 10);
const rhombus = new Rhombus(6, 120, 60);
const parallelogram = new Parallelogram(7, 9, 110, 70);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();