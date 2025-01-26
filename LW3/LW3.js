import Square from './class-tasks/Square.js';
import Rectangle from './class-tasks/Rectangle.js';
import Rhombus from './class-tasks/Rhombus.js';
import Parallelogram from './class-tasks/Parallelogram.js';
import Triangular from './class-tasks/Triangular.js';
import PiMultiplier from "./function-tasks/PiMultiplier.js";
import Painter from "./function-tasks/Painter";

var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 120;
car1.driver = {
    name: "John Doe",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

// 1.2.4
var car2 = {
    color: "blue",
    maxSpeed: 150,
    driver: {
        name: "John Doe",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

// 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};

// 1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};

car1.drive();
car2.drive();

// 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

// 1.2.8
Truck.prototype.assignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.9
Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var message = "Driver " + this.driver.name;
        if (this.driver.nightDriving) {
            message += " drives at night";
        } else {
            message += " does not drive at night";
        }
        message += " and has " + this.driver.experience + " years of experience";
        console.log(message);
    }
};

// 1.2.10
var truck1 = new Truck("green", 5000, 80, "Volvo", "VNL");
var truck2 = new Truck("white", 4500, 85, "Scania", "R450");

truck1.assignDriver("John Doe", true, 5);
truck2.assignDriver("John Doe", false, 3);

truck1.trip();
truck2.trip();


// 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24
const square = new Square(5);
const rectangle = new Rectangle(4, 6);
const rhombus = new Rhombus(5, 120, 60);
const parallelogram = new Parallelogram(6, 8, 120, 60);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();

// 1.2.26
const defaultTriangle = Triangular();
const customTriangle1 = Triangular(5, 12, 13);
const customTriangle2 = Triangular(6, 8, 10);

// 1.2.28
const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiBy3Div2 = PiMultiplier(3/2);
const dividePiBy2 = PiMultiplier(1/2);

console.log("π multiplied by 2:", multiplyPiBy2());
console.log("π multiplied by 3/2:", multiplyPiBy3Div2());
console.log("π divided by 2:", dividePiBy2());


const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { maxSpeed: 180, type: "Truck", loadCapacity: 2400 };
const object3 = { avgSpeed: 90, color: "purple", isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
