function add(number1,number2) {
    return number1 + number2;
}

function subtract(number1,number2) {
    return number1 - number2;
}

function multiply(number1,number2) {
    return number1 * number2;
}

function divide(number1,number2) {
    if (number2 === 0) {
        return 'Not Allowed';
    }
    return number1 / number2;
}

let operatorElement = document.querySelector('.operator');
let operator = "+";

function calculate(){
    let number1 = parseInt(document.querySelector('#input1').value);
    let number2 = parseInt(document.querySelector('#input2').value);    
    let result = 0;

    switch(operator){
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
    }

    document.querySelector('.output').innerText = result;
}

document.querySelector('#add').addEventListener('click', function(){
    operator = "+";
    operatorElement.value = operator;
});

document.querySelector('#sub').addEventListener('click', function(){
    operator = "-";
    operatorElement.value = operator;
});

document.querySelector('#mul').addEventListener('click', function(){
    operator = "*";
    operatorElement.value = operator;
});

document.querySelector('#div').addEventListener('click', function(){
    operator = "/";
    operatorElement.value = operator;
});

document.querySelector('#eql').addEventListener('click', function(){
    calculate();
});