const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const convertToRoman = function(inputNumber){
 const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "1"];
 const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 let romanResult = "";

 for(let i = 0; i < arabicNumerals.length; i++){
    while(inputNumber.value >= arabicNumerals[i]){
        romanResult += romanNumerals[i];
        inputNumber.value -= arabicNumerals[i];
    }
 }
}
