"use strict"; 
let count; 
let lengthEl= document.getElementById("length-el");
let volumeEl= document.getElementById("volume-el");
let massEl= document.getElementById("mass-el");
let speedEl= document.getElementById("speed-el");
let tempEl= document.getElementById("temp-el");

const countEl = document.getElementById("count-el");

// Add event listener to get value via getNumber if the "Enter" button was pressed.
// countEl.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         getNumber();
//     }
// });

function getNumber() {
    count = Number(countEl.value);
    // if (count < 0) {
    //     alert("Please type in positive values.")
    //     count = 0;
    //     console.log(`reset count to ${count}.`);
    //     countEl.textContent = 0;
    // } else {
    //     count = Number(countEl.value);
    //     console.log(`Postive value: ${count}`);
    //     console.log(typeof(count));
    // }    
    console.log(`After function call: ${count}`);
    console.log(typeof(count));
    unitConversions();    
}  
console.log("Hello" + countEl.value);


// create function to call calculate unitconversions. 
function unitConversions() {
    // Unit Conversion for Length m/ft
    // const meterFormula=;

    // Convert meter to feet & vice versa
    let meterToFeet = (count * 3.281).toFixed(3);
    let feetToMeter = (count * .3048).toFixed(3)
    lengthEl.textContent = `${count} meters = ${meterToFeet} feet | ${count} feet = ${feetToMeter} meters.`;

    // Convert liters to gallons and vice versa
    let literToGallon = (count / 3.785).toFixed(3);
    let gallonToLiter = (count * 3.785).toFixed(3);    
    volumeEl.textContent = `${count} liters = ${literToGallon} gallon | ${count} gallons = ${gallonToLiter} liters.`;

    // Convert kilograms to pounds and vice versa 
    let kilogramToPound = (count * 2.205).toFixed(3);
    let poundToKilogram = (count * .4535).toFixed(3);
    massEl.textContent = `${count} kilograms = ${kilogramToPound} pounds | ${count} pounds = ${poundToKilogram} kilograms.`;

    // Convert kilometer to miles and vice versa 
    let kilometerToMiles = (count * .6214).toFixed(3);
    let milesToKilometer = (count * 1.609).toFixed(3);
    speedEl.textContent = `${count} kilometers = ${kilometerToMiles} miles | ${count} miles = ${milesToKilometer} kilometers.`;

    // convert farenheit to celsius  and vice versa 
    let farenheitToCelsius = ((count - 32) * .5556).toFixed(3);
    let celsiusToFarenheit = ((count * 1.8) + 32).toFixed(3);
    tempEl.textContent = `${count} farenheit = ${farenheitToCelsius} celsius | ${count} celsius = ${celsiusToFarenheit} farenheit.`;
}

// Formula for converting meter to feet. 
// Meter to feet 
// 1m = 3.28ft 
// Mulitply the number of meter by 3.28
// 
// Feet to meter
// 1f= 1m/3.28 = .304m
// xft * .304m 

// Task to do: 
// Get the value from the input
//  - **new** Add eventlistener to get value from input w/out the need for enter button.
// Check whether the value is actually an integer 
// Do calculations

// 28/4/2022
// What I've accomplished: 
// - Created button with onclick attr. w/ a function to get the number from
// the user when its clicked after they've typed the number in the input field.
// - Created function to collect and convert value from input to number.
// 

// 28/4/2022
// Task's left to do:
// Provide conversions formula 
// Reflect conversion result on the page through the id's i.e volume-el
// Is it possible to hide the values and then reveal it when clicked by the user ??
// 


// 5/2/2022
// What I've accomplished :
// - Added an eventlistener to the input field to get the values from the user
//   when the "Enter" button is clicked. Replacing the need for a button.
// 
// Task's left to do:
// Provide conversions formula 
// Reflect conversion result on the page through the id's i.e volume-el
// *Optional* Is it possible to hide the values and then reveal it when clicked by the user ??
// 
// 


// 5/5/2022
// What I've accomplished :
// - Providing calulation for the unit conversions. 
// - Reflect the conversion result on the page the id's i.e volume-el
// 
// Task's left to do:
// Since the user has to hit the enter button to get the calculations done. 
// I need to figure out how to get caluclation done automatically w/out hitting the enter button.
//  https://www.youtube.com/watch?v=1UAORTlaqLg <-- This may help.
//
// // *Optional* Is it possible to hide the values and then reveal it when clicked by the user ??
//          I found/learned taht by using the <details> element with the <summary> element it can reduce the clutter 
//          and allow the user to click on which conversion result they want to see.
// 