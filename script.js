const value = document.getElementById('value');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const resetButton = document.getElementById('reset');

let count = 0;
let intervalId = 0;

const updateValue = () => {
    value.innerHTML = count;
}

plusButton.addEventListener('mousedown', () => {

    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);

})

minusButton.addEventListener('mousedown', () => {

    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);

})

resetButton.addEventListener('click', () => {

    count = 0;
    updateValue();

})

document.addEventListener('mouseup', () => clearInterval(intervalId));