/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerday = 0.0;
let dayCounter = 0;
let totalCost = 0.0;
const fullDayCost = 35.00;
const halfDayCost = 20.00;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayButtons = document.querySelectorAll('.day-selector li');

function handleDayButtonClick(click) {
    if (click.target.classList.contains('clicked')) {
        click.target.classList.remove('clicked');
        dayCounter--;
    }
    else{
        click.target.classList.toggle('clicked');
        dayCounter++;
    }

    calculateAndDisplayTotalCost();
}

dayButtons.forEach(button => {
    button.addEventListener('click', handleDayButtonClick);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Select the clear button
const clearButton = document.getElementById('clear-button');

function clearSelectedDays() {
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });

    dayCounter = 0;
    totalCost = 0.0;

    let calculatedCost = document.getElementById('calculated-cost');
    calculatedCost.innerHTML = totalCost.toFixed(2);
}

clearButton.addEventListener('click', clearSelectedDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');

function handleFullDayButtonClick() {
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    costPerday = fullDayCost;
    totalCost = dayCounter * costPerday;

    document.getElementById('calculated-cost').innerHTML = totalCost.toFixed(2);
}

function handleHalfDayButtonClick() {
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    costPerday = halfDayCost;
    totalCost = dayCounter * costPerday;

    document.getElementById('calculated-cost').innerHTML = totalCost.toFixed(2);
}

halfDayButton.addEventListener('click', handleHalfDayButtonClick);
fullDayButton.addEventListener('click', handleFullDayButtonClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateAndDisplayTotalCost() {
    totalCost = dayCounter * (document.getElementById('half').classList.contains('clicked') ? halfDayCost : fullDayCost);
    document.getElementById('calculated-cost').innerHTML = totalCost.toFixed(2);
}



