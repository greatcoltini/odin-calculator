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
    display = document.getElementById("display");
    console.log(a);
    console.log(operator);
    console.log(b);

    switch (operator)
    {
        case "+":
            firstNumber = add(a, b);
            break;
        case "-":
            firstNumber = subtract(a, b);
            break;
        case "*":
            firstNumber = multiply(a, b);
            break;
        case "/":
            firstNumber = divide(a, b);
            break;
    }

    operator = null;
    secondNumber = null;
    display.value=firstNumber;
}

function insertNumbers(number)
{
    if (firstNumber == null)
    {
        firstNumber = parseInt(number);
    }
    else if (secondNumber == null)
    {
        if (operator == null)
        {
            firstNumber = parseInt(number);
        }
        else
        {
            secondNumber = parseInt(number);
            operate(operator, firstNumber, secondNumber);
        }

    }
    else
    {
    }

    display = document.getElementById("display");
    display.value=firstNumber;
}

function defineOperator(op)
{
    operator = op;
}

function clear()
{
    operator = null;
    firstNumber = null;
    secondNumber = null;
}

