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
        return { status: "failed", message: "Значення елементів трикутника повинні бути додатними." };
    }

    const toRadians = (degrees) => (degrees * Math.PI) / 180;
    const toDegrees = (radians) => (radians * 180) / Math.PI;

    let a, b, c, alpha, beta;

    // Your existing conditions and calculations here...

    if (a >= c) {
        console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
        return { status: "failed", message: "Катет не може бути більшим або рівним гіпотенузі." };
    }

    // Other conditions...

    console.log("Результати обчислень:");
    console.log(`Катет a = ${a.toFixed(2)}`);
    console.log(`Катет b = ${b.toFixed(2)}`);
    console.log(`Гіпотенуза c = ${c.toFixed(2)}`);
    console.log(`Кут alpha = ${alpha.toFixed(2)}°`);
    console.log(`Кут beta = ${beta.toFixed(2)}°`);

    return {
        status: "success",
        results: {
            a: a.toFixed(2),
            b: b.toFixed(2),
            c: c.toFixed(2),
            alpha: alpha.toFixed(2),
            beta: beta.toFixed(2)
        }
    };
}

function calculateTriangle() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const type1 = document.getElementById('type1').value;
    const value2 = parseFloat(document.getElementById('value2').value);
    const type2 = document.getElementById('type2').value;

    const result = triangle(value1, type1, value2, type2);
    let displayText = '';
    if (result.status === "failed") {
        displayText = result.message;
    } else {
        displayText = `Results:<br>
                       Катет a = ${result.results.a}<br>
                       Катет b = ${result.results.b}<br>
                       Гіпотенуза c = ${result.results.c}<br>
                       Кут alpha = ${result.results.alpha}°<br>
                       Кут beta = ${result.results.beta}°`;
    }
    document.getElementById('result').innerHTML = displayText;
}
