function checkInputs(num1, num2) {
    return num1 > 0 && num2 > 0;
}

function Sum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (checkInputs(num1, num2)) {
        let result = num1 + num2;
        document.getElementById("result").innerText = "Resultaat: " + result;
    } else {
        document.getElementById("result").innerText = "Het getal is te laag";
    }
}

function Minus() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (checkInputs(num1, num2)) {
        let result = num1 - num2;
        document.getElementById("result").innerText = "Resultaat: " + result;
    } else {
        document.getElementById("result").innerText = "Het getal is te laag";
    }
}

function Multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (checkInputs(num1, num2)) {
        let result = num1 * num2;
        document.getElementById("result").innerText = "Resultaat: " + result;
    } else {
        document.getElementById("result").innerText = "Het getal is te laag";
    }
}

function Divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (checkInputs(num1, num2)) {
        if (num2 === 0) {
            document.getElementById("result").innerText = "Resultaat: Kan niet delen door nul";
        } else {
            let result = num1 / num2;
            document.getElementById("result").innerText = "Resultaat: " + result;
        }
    } else {
        document.getElementById("result").innerText = "Het getal is te laag";
    }
}