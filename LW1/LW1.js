 if (type1 === "leg" && type2 === "hypotenuse") {
        const a = value1;
        const c = value2;
        const b = Math.sqrt(c * c - a * a);
        const alpha = Math.asin(a / c) * (180 / Math.PI);
        const beta = 90 - alpha;
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
    return { status: "failed", message: "Unsupported type combination." 
};


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
