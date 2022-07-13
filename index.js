"use strict";


// creating a 48 min countdown timer for the basketball scoreboard
const scoreboardTimerDisplay = document.querySelector('.timer');
 
// Wes Box video on creating a timer
let countdown; 
let currentCountdown;
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
        currentCountdown = secondsLeft; // Stores original value prior to being stopped by clearInterval
        console.log(currentCountdown)
       
        // Check to stop to prevent counting negative numbers 
        if(secondsLeft < 0) {
            clearInterval(countdown); // cancels a times repeating action that was established by setinterval
            if(currentCountdown < 0 ) { // For some reason the timer doesn't stop till -1 Not sure why ?
                clearInterval(currentCountdown) 
                return;
            } return;
        } else {
            //Display minutes and seconds
            // currentCountdown = countdown;
            displayTimeLeft(secondsLeft);
        }
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
    Not enough to for long term memory.
Followed along a video to create a timer w/ Wes Bos
    However, not sure if I should remember how to do it or create a situation
    to make it easier to find it again.

What I'm having problems with 
I haven't dealt with timers or time in general with progarmming. 
    How do I save the timer when its paused ?
    How do I continue the countdown when its paused ?

What is left to do: 
24 second shot clock timer 
Styling for the middle section 
Add a click feature on the bonus sign to light up the red circle 
    Do I need to turn it into a button or make it clickable ?
*/
let isGameTimerOn = false;
function startTimer(){
    clearInterval(countdown,currentCountdown)
    const timeLength = 2880; //2880
    
    if (isGameTimerOn === true) {
        timer(0);
        currentCountdown = 0;
        clearInterval(countdown,currentCountdown)
        isGameTimerOn = false;
    } else if (isGameTimerOn === false) {
        timer(timeLength);
        isGameTimerOn = true;
    }

};

function pauseTimer(){
    clearInterval(countdown);    
};

function resumeTimer() {
    clearInterval(countdown,currentCountdown)  
    timer(currentCountdown);
}

/*
7/5/2022
What I've Learned 
I Figured out how to pause and resume timer 
    For the pause, I needed to use the method to cancel the repeated action set by setInterval.
    I think this also means that I can't use the original value from the countdown variable.

    To resume, 
    I initally had a another variable that stores the original value inside the countdown interval variable/method.
    From there the resumeTimer funciton calls the timer function but with an update value from where 
    the original value stopped when clear Interval was called after hiiting the pause button.

What I'm having problems with 
I haven't dealt with timers or time in general with progarmming. 
    How do I save the timer when its paused ?
    How do I continue the countdown when its paused ?

What is left to do: 
Pause and resume timer functionality
24 second shot clock timer 
Styling for the middle section 
How to align a colon ? 
Add a click feature on the bonus sign to light up the red circle 
    Do I need to turn it into a button or make it clickable ?
*/

/* Change color when the circle next to the bonuses are clicked*/
// This feels like a "DRY" situation not sure.

function switchColorHome() {
    document.querySelector(".circle").classList.toggle("lit-red");
}
function switchColorGuest() {
    document.getElementById("guest").classList.toggle("lit-red");
}

/* Change color when the circles flanking the Poss are clicked*/
function possColorHome() {
    document.querySelector(".poss-home").classList.toggle("lit-green");
}
function possColorGuest() {
    document.querySelector(".poss-guest").classList.toggle("lit-green");
}

/*
7/5/2022
What I've accomplished
Adding feature to light up the color indicators when they're clicked i.e bonus/ possession 

What I've Learned 
If I wanted to switch between two colors I can use what's called a class list.toggle

Should research on potential ways to reduce DRY situations espceially in the CSS portion of the code.

What is left to do: 
Shot clock timer. 
Increments for the points, fouls and period.
Font changes for text, & for numbers 
*/

// Create shot clock timer
let isShotClockOn = false; 
let shotTimerCountdown;
function shotClock(){    
    clearInterval(shotTimerCountdown);
    const shotTimer = 24; // 24 seconds 
    // A way to reset the shot clock timer to 0. By checking if the shot clock timer is on.
    if (isShotClockOn === true) {
        shotClockTimer(0);
        isShotClockOn = false;
    } else {
        shotClockTimer(shotTimer);
        isShotClockOn = true; 
    }
    

    // shotClockTimer(shotTimer);
    
}

const shotClockDisplay = document.querySelector(".shot-clck-timer p");
function shotClockTimer(seconds) {
    const now = Date.now(); // returns the number of milliseconds
    const then = now + seconds * 1000; // returns the number in seconds
    displayShotClock(seconds); 
    // For example if you put 5 seconds. setInterval needs a sceond to elapse to 
    // start showing the seconds. Which means it will skip number 5.
    // This function is there to display the second that the setInterval will skip to display.


    // console.log({now,then});
    shotTimerCountdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        console.log(secondsLeft);
       
        // Check to stop to prevent counting negative numbers 
        if(secondsLeft < 0) {
            clearInterval(shotTimerCountdown); // cancels a times repeating action that was established by setinterval
        } else {
            //Display minutes and seconds
            // currentCountdown = countdown;
            displayShotClock(secondsLeft);
        } 
    }, 1000);

}

function displayShotClock(seconds) {
    // const minutes = Math.floor(seconds / 60); // returns the largest integer <= the given number.
    const remainderSeconds = seconds % 60; // returns the the remainder left over from the division
    const display = `${remainderSeconds < 10 ? '0':''}${remainderSeconds}`; // Adds the first digit if the remaining seconds
                                                                                    // is < 10. Using Ternary operator
    shotClockDisplay.textContent = display;
}

// Adding increments for Home & Guest scoreboard 
const homePtCntEl=document.getElementById("home-pt-cnt");
const guestPtCntEl= document.getElementById("guest-pt-cnt");
let homeSum = 0;
let guestSum = 0;

function threePointer() {
    document.getElementById("guest-3pt").onclick = function()
    {
        guestSum += 3;
        guestPtCntEl.textContent = `${guestSum}`
    } 
    document.getElementById("home-3pt").onclick = function()
    {
        homeSum += 3;
        homePtCntEl.textContent = `${homeSum}`
    }        
}

function twoPointer() {
    document.getElementById("guest-2pt").onclick = function()
    {
        guestSum += 2;
        guestPtCntEl.textContent = `${guestSum}`
    }
    document.getElementById("home-2pt").onclick = function()
    {
        homeSum += 2;
        homePtCntEl.textContent = `${homeSum}`
    }
}

function onePointer() {
    document.getElementById("guest-1pt").onclick = function()
    {
        guestSum += 1;
        guestPtCntEl.textContent = `${guestSum}`
    }
    document.getElementById("home-1pt").onclick = function()
    {
        homeSum += 1;
        homePtCntEl.textContent = `${homeSum}`
    }
}

// Add increments for period
const periodCountEl = document.getElementById("period-el"); 
let periodNum = 0 ;
function periodCnt() {
    if(periodNum < 4 ) {
        periodNum += 1 ;
        periodCountEl.textContent = periodNum;
    } else {
        periodNum = 0;
        periodCountEl.textContent = 0;
    }

}


// Add increments for fouls
const homeFoulCntEl = document.getElementById("home-foul-cnt");
const guestFoulCntEl = document.getElementById("guest-foul-cnt");
let homecnt = 0;
let guestcnt = 0;
function foulIncr() {
    document.getElementById("home-foul").onclick = function()
    {         
        homecnt += 1 
        homeFoulCntEl.textContent = `${homecnt}`;
    }
    document.getElementById("guest-foul").onclick = function()
    {         
        guestcnt += 1 
        guestFoulCntEl.textContent = `${guestcnt}`;
    }

}

// New game function resets the foul, period, and points 
function newGame() {
    homecnt = 0;
    guestcnt = 0;
    homeFoulCntEl.textContent = `${homecnt}`;
    guestFoulCntEl.textContent = `${guestcnt}`;

    periodNum = 0 ;
    periodCountEl.textContent = 0;

    homeSum = 0;
    guestSum = 0;    
    homePtCntEl.textContent = `${homeSum}`
    guestPtCntEl.textContent = `${guestSum}`

}