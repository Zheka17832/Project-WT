function triangle(value1, type1, value2, type2) {

    console.log("����������:");
    console.log("�������������� triangle(value1, type1, value2, type2), �� value1 � value2 � �� �������� �������� ���������� (�����, ���, ���������), � type1 � type2 � ��� ����:");
    console.log("- \"leg\" ��� ������");
    console.log("- \"hypotenuse\" ��� ���������");
    console.log("- \"adjacent angle\" ��� ���������� ����");
    console.log("- \"opposite angle\" ��� ������������ ����");
    console.log("- \"angle\" ��� �������� ����\n");


    if (value1 <= 0 || value2 <= 0) {
        console.log("�������: �������� �������� ���������� ������ ���� ���������.");
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
            console.log("�������: ����� �� ���� ���� ������ ��� ����� ��������.");
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
        console.log("�������: ������ ������ ���� ���������. ����������� ���������� �� ��������� �����.");
        return "failed";
    }

    console.log("���������� ���������:");
    console.log(`����� a = ${a.toFixed(2)}`);
    console.log(`����� b = ${b.toFixed(2)}`);
    console.log(`ó�������� c = ${c.toFixed(2)}`);
    console.log(`��� alpha = ${alpha.toFixed(2)}�`);
    console.log(`��� beta = ${beta.toFixed(2)}�`);

    return "success";
}
