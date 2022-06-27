"use strict";

const homePtCntEl=document.getElementById("home-pt-cnt");
let homeSum = 0;

function test() {
    homeSum += 3;
   homePtCntEl.textContent = `${homeSum}` ;
}


// creating a 48 min countdown timer for the basketball scoreboard
 
let countdown; 
function timer(seconds) {
    const now = Date.now(); // returns the number of milliseconds
    const then = now + seconds * 1000; // returns the number in seconds
    displayTimeLeft(seconds); 
    // For example if you put 5 seconds. setInterval needs a sceond to elapse to 
    // start showing the seconds. Which means it will skip number 5.
    // This function is there to display the second that the setInterval will skip to display.


    // console.log({now,then});
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check to stop to prevent counting negative numbers 
        if(secondsLeft < 0) {
            clearInterval(countdown); // cancels a times repeating action that was established by setinterval
            return;
        }
        //Display minutes and seconds  
        displayTimeLeft(secondsLeft); 
    }, 1000); 
}

// Converting seconds to mintues 
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60); // returns the largest integer <= the given number.
    const remainderSeconds = seconds % 60; // returns the the remainder left over from the division

    console.log({minutes, remainderSeconds})
}