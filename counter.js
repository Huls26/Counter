"use strict"

// counter
let main = function() {
    let counter = 0
    let count = document.querySelector(".count");
    count.innerText = counter;

    // reset 
    let resetBtn = document.querySelector(".reset");

    resetBtn.addEventListener("click", event => {
        counter = 0
        count.innerText = counter;
    })

    // increment
    let incrementBtn = document.querySelector(".increment");

    incrementBtn.addEventListener("click", event => {
        let elementValue = event.target.value;
        counter = incrementDecrement(counter, elementValue);
        count.innerText = counter;
    })
   
    // decrement
    let decrementBtn = document.querySelector(".decrement");
    
    decrementBtn.addEventListener("click", event => {
        let elementValue = event.target.value;
        counter = incrementDecrement(counter, elementValue);
        count.innerText = counter;
    })
}()


// increment/decrement
function incrementDecrement(count, value) {
    value = parseInt(value);

    return count += value;
}

// style
let body = document.body;
body.style.height = `${window.innerHeight}px`;
body.style.display = "flex";
body.style.justifyContent = "center"
body.style.alignItems = "center"

let mainCounter = document.querySelector(".main");
mainCounter.style.textAlign = "center"
