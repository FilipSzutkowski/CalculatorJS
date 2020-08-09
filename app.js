const display = document.querySelector(`.display`);
const buttons = document.querySelector(`.buttons`);
const calculator = document.querySelector(`.calculator-wrapper`)

buttons.onclick = e => {
    if (e.target.matches(`button`)) {
        let button = e.target;
        let action = button.dataset.action; 
        let buttonValue = button.textContent;
        let displayValue = display.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;

        if (!action && displayValue === `0` || previousKeyType === `operator`) {
            display.textContent = buttonValue;
            calculator.dataset.previousKeyType = `number`;

            Array.from(button.parentNode.children)
            .forEach(b => b.classList.remove(`is-depressed`))

        } else if (!action) {
            display.textContent += buttonValue;
        } 

        if (action === `decimal`) {
            if (!displayValue.includes(`.`)) {
                display.textContent += `.`;
            }
        }

        if (action === `equals`) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayValue;
            const result = calculate(firstValue, operator, secondValue);

            if (!result) {
                return;
            } else {
                display.textContent = result; 
            }
        }

        if (action === `clear`) {
            clearAllValues();
        }
        
        if (
            action === `plus` ||
            action === `minus` ||
            action === `multiply` ||
            action === `divide`
        ){
            button.classList.add(`is-depressed`);
            calculator.dataset.previousKeyType = `operator`;

            calculator.dataset.firstValue = displayValue;
            calculator.dataset.operator = action;
        }
    }
}

const calculate = (n1, operator, n2) => {
    let result = ``;

    if (operator === `plus`) {
        result = parseFloat(n1) + parseFloat(n2); 
    } else if (operator === `minus`) {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === `multiply`) {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === `divide` && n1 === `0` || n2 === `0`) {
        alert(`Don't divide with 0 duude`);
        return; 
    } else if (operator === `divide`) {
        result = parseFloat(n1) / parseFloat(n2);
    } else {
        alert(`That's not how calculators work, and you know it`);
        return;
    }

    return result; 
}

const clearAllValues = () => {
    display.textContent = `0`;
    calculator.dataset.operator = ``;
    calculator.dataset.firstValue = ``;
}