"use strict";

const homePtCntEl=document.getElementById("home-pt-cnt");
let homeSum = 0;

function test() {
    homeSum += 3;
   homePtCntEl.textContent = `${homeSum}` ;
}

function startTimer(){
    const timeLength = 2880;
    timer(timeLength);
};

function stopTimer(){
    // if timer is running pause 
    
    // else start
    clearInterval(countdown);
    
    // const saveTime = secondsLeft;

};

function contdTimer(){
    // const resumeTime = timeLength - saveTime; 
    // timer(resumeTime);

};



// creating a 48 min countdown timer for the basketball scoreboard
const scoreboardTimerDisplay = document.querySelector('.timer');;
 
// Wes Box video on creating a timer
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
    const display = `${minutes}:${remainderSeconds < 10 ? '0':''}${remainderSeconds}`; // Adds a in the first digit if the remaining seconds
                                                                                    // is < 10. Using Ternary operator
    scoreboardTimerDisplay.textContent = display;
}

/*
29/6/2022
What I've Learned 
Learning the difference betweeen document.getElementById and querySelector 
Learned alittle bit about ternary operators in a template literal string 
Followed along a video to create a timer w/ Wes Bos
    However, not sure if I should remember how to do it or create a situation
    to make it easier to find it again.

What I'm having problems with 
I haven't dealt with timers or time in general with progarmming. 
    How do I save the timer when its paused ?

What is left to do: 
24 second shot clock timer 
Styling for the middle section 
Add a click feature on the bonus sign to light up the red circle 
*/