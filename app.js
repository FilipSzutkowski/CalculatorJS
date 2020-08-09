const display = document.querySelector(`.display`);
const buttons = document.querySelector(`.buttons`);

buttons.onclick = e => {
    if (e.target.matches(`button`)) {
        let button = e.target;
        let action = button.dataset.action; 
        let buttonValue = button.textContent;
        let displayValue1;

        if (!action && display.textContent === `0`) {
            display.textContent = buttonValue;
        } else if (!action) {
            display.textContent += buttonValue;
        }
        
        else if (
            action === `plus` ||
            action === `minus` ||
            action === `equals` ||
            action === `multiply` ||
            action === `divide` ||
            action === `clear` ||
            action === `decimal`
        ){
            displayValue1 = display.textContent;
            console.log(displayValue1);
        }
    }
}