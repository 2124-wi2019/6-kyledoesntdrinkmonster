/*Kyle Stout
  stout_a06c
  INFO 2124WW
  Thoendel
  1-26-2020
*/


//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
let count = 0;
//initialize count for filling array
while (count < 5){
//start the while loop
lottoPicks.push(getLottoNumber());
//push random value of function getLottoNumber into array
count++;
//up the count so that I will end up with only 5 values
}
if lottoPicks[].includes(22) {
    console.log("Matched 22")
} else {
    console.log("")
}




    
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}