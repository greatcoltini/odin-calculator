var firstNumber, secondNumber, operator;

const operatorSet = ['+', '-', '/', '*'];

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
    // check if equal pressed without operator
    if (args == '=')
    {
        if (!operator)
        {
            return;
        }
    }
    

    var display = document.getElementById("display");
    
    secondNumber = display.value;

    // check if double operator press happens
    if (!secondNumber)
    {
        return;
    }
    
    var new_firstNumber;

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

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

    // remove selected operator class
    const selectedOps = document.getElementsByClassName("calculator-button");
    for (let i = 0; i < selectedOps.length; i++)
    {
        selectedOps[i].classList.remove('selected-operator');
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
    handleClick(number);

    var display = document.getElementById("display");

    if (recalculating)
    {
        display.value = number;
        recalculating = false;
    }
    else {
        // only display one decimal
        if (display.value.includes(".") && number == ".")
        {
            return;
        }
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
        // run method to apply hover
        applyHoverOperator(op);

        operate(op);

        operator = current_op;
    }
    else {
        var display = document.getElementById("display");
        // when operator is pressed, store first number in display
        firstNumber = display.value;
        // add operator pressed indication
        operator = op;

        applyHoverOperator(op)

        
        display.value = "";
    }

}

// method to apply hover, first checks if there is currently a selected op
function applyHoverOperator(op)
{
    const operatorSelected = document.getElementsByClassName("calculator-button");
    if (operatorSelected.length > 0)
    {
        for (let i = 0; i < operatorSelected.length; i += 1)
        {
            operatorSelected[i].classList.remove("selected-operator");
        }
    }

    var operatorEle = document.getElementById(op)
    operatorEle.classList.add('selected-operator');

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
    if (!firstNumber)
    {
        return;
    }
    else 
    {
        var display = document.getElementById("display");
        display.value = firstNumber;
        firstNumber = null;
    }
}

// add key input for various keys
document.addEventListener('keydown', function(event) {
    if (event.key == "Enter")
    {
        operate('=');
        updateDisplay();
    }
    else if (event.key == "Backspace")
    {
        var display = document.getElementById("display");
        display.value = display.value.slice(0, display.value.length - 1);
    }
    else if (event.key == "Delete")
    {
        resetCalculation();
    }
    // if keys are numkeys
    else if (isFinite(event.key))
    {
        insertNumbers(event.key);
    }
    else if (operatorSet.includes(event.key))
    {
        defineOperator(event.key);
    }
});

function handleClick(elementID) {
    var element = document.getElementById(elementID);
    element.classList.add("clicked");
  
    setTimeout(function() {
      element.classList.remove("clicked");
    }, 300);
  }