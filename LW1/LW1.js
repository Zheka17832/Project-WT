function triangle(value1, type1, value2, type2) {

    console.log("Інструкція:");
    console.log("Використовуйте triangle(value1, type1, value2, type2), де value1 і value2 – це значення елементів трикутника (катет, кут, гіпотенуза), а type1 і type2 – їхні типи:");
    console.log("- \"leg\" для катета");
    console.log("- \"hypotenuse\" для гіпотенузи");
    console.log("- \"adjacent angle\" для прилеглого кута");
    console.log("- \"opposite angle\" для протилежного кута");
    console.log("- \"angle\" для гострого кута\n");


    if (value1 <= 0 || value2 <= 0) {
        console.log("Помилка: значення елементів трикутника повинні бути додатними.");
        return "failed";
    }

    const toRadians = (degrees) => (degrees * Math.PI) / 180;
    const toDegrees = (radians) => (radians * 180) / Math.PI;

    let a, b, c, alpha, beta;

    if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        alpha = type1 === "opposite angle" ? value1 : value2;
        beta = 90 - alpha;
        a = leg;
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
    } else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        beta = type1 === "adjacent angle" ? value1 : value2;
        alpha = 90 - beta;
        b = leg;
        c = b / Math.cos(toRadians(beta));
        a = Math.sqrt(c ** 2 - b ** 2);
    } else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;

        if (leg >= hypotenuse) {
            console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
            return "failed";
        }

        a = leg;
        c = hypotenuse;
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    } else if ((type1 === "adjacent angle" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "adjacent angle")) {
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
        const adjacentAngle = type1 === "adjacent angle" ? value1 : value2;

        c = hypotenuse;
        beta = adjacentAngle;
        alpha = 90 - beta;
        b = c * Math.cos(toRadians(beta));
        a = Math.sqrt(c ** 2 - b ** 2);
    } else if ((type1 === "opposite angle" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "opposite angle")) {
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
        const oppositeAngle = type1 === "opposite angle" ? value1 : value2;

        c = hypotenuse;
        alpha = oppositeAngle;
        beta = 90 - alpha;
        a = c * Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
    } else {
        console.log("Помилка: невірно вказані типи аргументів. Перечитайте інструкцію та спробуйте знову.");
        return "failed";
    }

    console.log("Результати обчислень:");
    console.log(`Катет a = ${a.toFixed(2)}`);
    console.log(`Катет b = ${b.toFixed(2)}`);
    console.log(`Гіпотенуза c = ${c.toFixed(2)}`);
    console.log(`Кут alpha = ${alpha.toFixed(2)}°`);
    console.log(`Кут beta = ${beta.toFixed(2)}°`);

    return "success";
}
