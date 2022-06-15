"use strict";

const homePtCntEl=document.getElementById("home-pt-cnt");
let homeSum = 0;

function test() {
    homeSum += 3;
   homePtCntEl.textContent = `${homeSum}` ;
}