var firstNumber, secondNumber, operator;


// function to parse addition
function add(a, b)
{
    return a + b;
}

// function to parse subtraction
function subtract(a, b)
{
    return a - b;
}

// function to parse multiplication
function multiply(a, b)
{
    return a * b;
}

// function to parse division
function divide(a, b)
{
    return a / b;
}

// When the equals button is pressed, we operate on the numbers
function operate()
{
    var display = document.getElementById("display");
    secondNumber = display.value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    console.log(firstNumber + " " + operator + " " + secondNumber);

    switch (operator)
    {
        case "+":
            firstNumber = add(firstNumber, secondNumber);
            break;
        case "-":
            firstNumber = subtract(firstNumber, secondNumber);
            break;
        case "*":
            firstNumber = multiply(firstNumber, secondNumber);
            break;
        case "/":
            firstNumber = divide(firstNumber, secondNumber);
            break;
    }

    operator = null;
    secondNumber = null;
    display.value=firstNumber;
}

// When pressing buttons in display, we start generating the number
function insertNumbers(number)
{
    var display = document.getElementById("display");
    display.value = display.value + number;
}

// Function to define operator when an operator button is clicked
function defineOperator(op)
{
    if (secondNumber == null)
    {
        var display = document.getElementById("display");
        // when operator is pressed, store first number in display
        firstNumber = display.value;
        operator = op;
        display.value = "";
    }
    else
    {
        current_op = op;
        operate();
        defineOperator(current_op);
    }

}

function resetCalculation()
{
    var display = document.getElementById("display");
    display.value = "";
    operator = "";
    firstNumber = null;
    secondNumber = null;
    console.log("finished");
}

