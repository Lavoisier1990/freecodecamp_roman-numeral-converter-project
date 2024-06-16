let inputNumber = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
let outputDiv = document.getElementById("output");
let commentParagraph = document.getElementById("comment");

function romanConverter(){
    if(inputNumber.value === ""){
        outputDiv.classList.remove("hidden");
        outputDiv.innerText = "Please enter a valid number";
    }else if(inputNumber.value === "0"){
        outputDiv.classList.remove("hidden");
        outputDiv.innerText = "NULLA";
        commentParagraph.classList.remove("hidden");
        commentParagraph.innerText = "The Roman numeral system does not have an equivalent for zero(0), however, the word NULLA (the Latin word meaning 'none' or 'nothing') was used to represent what we call the number zero.";
    }else if(inputNumber.value < 0){
        outputDiv.classList.remove("hidden");
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
        commentParagraph.classList.remove("hidden");
        commentParagraph.innerText = "The Roman numeral system does not have a representation for negative numbers.";
    }else if(inputNumber.value > 0) {
        outputDiv.classList.remove("hidden");
        outputDiv.innerText = convertToRoman(inputNumber.value);
    }
}

function convertToRoman(inputNumber){
 const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 let romanResult = "";

 for(let i = 0; i < arabicNumerals.length; i++){
    while(inputNumber >= arabicNumerals[i]){
        romanResult += romanNumerals[i];
        inputNumber -= arabicNumerals[i];
    }
 }
return romanResult;
};


//convertBtn.addEventListener("click", romanConverter());

console.log(convertToRoman(90));
