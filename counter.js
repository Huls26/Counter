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
        count.style.color = "black";
    })

    // increment
    let incrementBtn = document.querySelector(".increment");

    incrementBtn.addEventListener("click", event => {
        let elementValue = event.target.value;
        counter = incrementDecrement(counter, elementValue);
        count.innerText = counter;
        count.style.color = "green";
    })
   
    // decrement
    let decrementBtn = document.querySelector(".decrement");
    
    decrementBtn.addEventListener("click", event => {
        let elementValue = event.target.value;
        counter = incrementDecrement(counter, elementValue);
        count.innerText = counter;
        count.style.color = "red";
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
// body.style.alignItems = "center"
body.style.backgroundColor = "rgb(180, 200, 220)"

let mainCounter = document.querySelector(".main");
mainCounter.style.marginTop = "13em"
mainCounter.style.textAlign = "center"

// h2
let h2 = document.getElementsByTagName("h2");
let h2Array = Array.from(h2);

for (let element of h2Array) {
    element.style.fontSize = "2.5em"
}

let title = h2Array[0];
title.style.fontSize = "3em";
title.style.fontFamily = "Arial";
title.style.color = "rgb(100, 80, 180)";
title.style.textShadow = "1px 1px lightblue";
title.style.letterSpacing = "10px"

let count = h2Array[1];
count.style.color = "rgb(30, 30, 10)";
count.style.textShadow = "1px 1px lightblue";

// button
let btn = document.querySelectorAll("button");
let arrayBtn = Array.from(btn);

for (let btn of arrayBtn) {
    btn.style.padding = "5px 1em"
    btn.style.fontSize = "1.6em";
    btn.style.fontWeight = "bold";
    btn.style.borderWidth = "4px";
    btn.style.borderColor = "gray";
    btn.style.borderRadius = "7px";
    btn.style.boxShadow = "0px 6px 10px white"
}

// increment button
let increment = document.querySelector(".increment");
increment.style.color = "green";

// decrement button
let decrement = document.querySelector(".decrement");
decrement.style.color = "red";

// reset button
let reset = document.querySelector(".reset");
reset.style.margin = "0 .7em"

