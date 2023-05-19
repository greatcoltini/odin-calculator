var firstNumber, secondNumber, operator;

let recalculating = false;


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
function operate(...args)
{
    var display = document.getElementById("display");
    
    secondNumber = display.value;
    var new_firstNumber;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    console.log(firstNumber + " " + operator + " " + secondNumber);

    switch (operator)
    {
        case "+":
            new_firstNumber = add(firstNumber, secondNumber);
            break;
        case "-":
            new_firstNumber = subtract(firstNumber, secondNumber);
            break;
        case "*":
            new_firstNumber = multiply(firstNumber, secondNumber);
            break;
        case "/":
            new_firstNumber = divide(firstNumber, secondNumber);
            break;
    }

    // if we are operating with finality, run function to generate display of previous output
    if (args == '=')
    {
        previousDisplay(new_firstNumber);
    }

    operator = null;
    secondNumber = null;
    // display.value=firstNumber;
    display.value = new_firstNumber;
    firstNumber = new_firstNumber;
    recalculating = true;
    // display.value="";
    console.log(firstNumber);
}

function previousDisplay(n_f_n)
{
    
    const container = document.getElementById("calc");
    const current_display = document.getElementById("display");

    const prev_outputs = document.createElement("input");
    prev_outputs.className = "prev";
    prev_outputs.type = "text";
    prev_outputs.value = firstNumber + " " + operator + " " + secondNumber + ' = ' + n_f_n;
    prev_outputs.ariaReadOnly = true;

    container.insertBefore(prev_outputs, current_display);
}

// When pressing buttons in display, we start generating the number
function insertNumbers(number)
{
    var display = document.getElementById("display");
    if (recalculating)
    {
        display.value = number;
        recalculating = false;
    }
    else {
        display.value = display.value + number;
    }
}
    

// Function to define operator when an operator button is clicked
function defineOperator(op)
{

    if (firstNumber != null)
    {
        // operate off the first expression
        current_op = op;
        operate();

        operator = current_op;
    }
    else {
        var display = document.getElementById("display");
        // when operator is pressed, store first number in display
        firstNumber = display.value;
        operator = op;
        display.value = "";
    }

}

// reset the calculation and clear previous output screens
function resetCalculation()
{
    var display = document.getElementById("display");
    display.value = "";
    operator = "";
    firstNumber = null;
    secondNumber = null;

    Array.prototype.slice.call(document.getElementsByClassName('prev')).forEach(
        function(item) {
          item.remove();
          // or item.parentNode.removeChild(item); for older browsers (Edge-)
      });
}

// updates display on equal press
function updateDisplay()
{
    var display = document.getElementById("display");
    display.value = firstNumber;
    firstNumber = null;
}

