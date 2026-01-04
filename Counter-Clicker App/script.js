// DOM elements
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');



// initial counts
let counter1 = 0;
let counter2 = 0;



// update display function

function increaseCounter(Counter, Display){
    Counter++;
    Display.textContent = Counter;
    return Counter;
}

function decreaseCounter(counter, display){
    counter--;
    display.textContent = counter;
    return counter;
}

function resetCounter(){
    counter1 = 0;
    counter2 = 0;
    count1.textContent = counter1;
    count2.textContent = counter2;
}

// event listeners
document.getElementById('incrementBtn').addEventListener('click', () => {
    counter1 = increaseCounter(counter1, count1);
});

document.getElementById('decrementBtn').addEventListener('click', () => {
    counter2 = decreaseCounter(counter2, count2);
});

document.getElementById('resetBtn').addEventListener('click', resetCounter);