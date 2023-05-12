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
    print(a);
    print(b);
    display = document.getElementById("display");

    console.log("here");
    switch (operator)
    {
        
        case "+":
            firstNumber = add(firstNumber, secondNumber);
            break;
        case "-":
            firstNumber = subtract(firstNumber, secondNumber);
            break;
        case "*":
            firstNumber = multiplty(firstNumber, secondNumber);
            break;
        case "/":
            firstNumber = divide(firstNumber, secondNumber);
            break;
    }

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

function defineOperator(operator)
{
    operator = operator;
    print(operator);
}

function clear()
{
    operator = null;
    firstNumber = null;
    secondNumber = null;
}

