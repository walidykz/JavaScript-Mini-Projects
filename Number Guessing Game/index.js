const Min = 1;
const Max = 100;
const randomNumber = Math.floor(Math.random() * (Max - Min + 1)) + Min;
const discription = document.getElementById("discription");
const myResult = document.getElementById("myResult");
const myAttempts = document.getElementById("myAttempts");
let attempts = 0;

discription.textContent = `Enter a Number between ${Min} & ${Max} : `;
function checkGuess(){
    const myGuess = Number(document.getElementById("myGuess").value);
    
    if(myGuess < Min || myGuess > Max){
        myResult.textContent = `Enter a Number between ${Min} & ${Max}`
    }else if(myGuess < randomNumber){
        myResult.textContent = "to Low!"
        attempts++;
        myAttempts.textContent = `Your attempts : ${attempts}`;
    }else if(myGuess > randomNumber){
        myResult.textContent = "to High!"
        attempts++;
        myAttempts.textContent = `Your attempts : ${attempts}`;
    }else{
        attempts++;
        myResult.textContent = `Congradulation! You just find the Correct Number : ${randomNumber}, After ${attempts} attempts.`;
        myAttempts.textContent = "";
    }
}