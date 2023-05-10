var firstNumber, secondNumber, operator, displayValue;


function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(operator, a, b)
{
    switch (operator)
    {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiplty(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;

    }
}
