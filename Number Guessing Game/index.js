let Min ;
let Max ;
let randomNumber; 
const description = document.getElementById("discription");
const myGuess = document.getElementById("myGuess");
const check = document.getElementById("myCheck");
check.addEventListener("click", checkGuess);
const restart = document.getElementById("myRestart");
restart.addEventListener("click", restartGame);
const confirm = document.getElementById("myConfirm");
confirm.addEventListener("click", gameDifficulty);
const myResult = document.getElementById("myResult");
const myAttempts = document.getElementById("myAttempts");
let attempts = 0;

description.textContent = `Choose a difficulty level : `;

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

function gameDifficulty(){
    if(easy.checked){
        Min =    1;
        Max = 50;
    }else if(medium.checked){
        Min = 1;
        Max = 100;
    }else if(hard.checked){
        Min = 1;
        Max = 500;
    }else{
        description.textContent = "Choose a difficulty first"
        return;
    }

    startGame(Min,Max);
    description.textContent = `Enter a Number between ${Min} & ${Max} : `;
}

function startGame(min,max){
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;
}


function checkGuess(){
    if(Min === undefined || Max === undefined){
        myResult.textContent = "Choose a difficulty first!";
        return;
    }
    if(myGuess.value === ""){
         myResult.textContent = "Enter a number!"; 
         return; 
    }
    const guess = Number(myGuess.value);
    
    if(guess < Min || guess > Max){
        myResult.textContent = `Enter a Number between ${Min} & ${Max}`;
        myAttempts.textContent = "";
    }else if(guess < randomNumber){
        myResult.textContent = "Too Low!"
        attempts++;
        myAttempts.textContent = `Your attempts : ${attempts}`;
    }else if(guess > randomNumber){
        myResult.textContent = "Too High!"
        attempts++;
        myAttempts.textContent = `Your attempts : ${attempts}`;
    }else{
        attempts++;
        myResult.textContent = `Congratulations! You just find the Correct Number : ${randomNumber}, After ${attempts} attempts.`;
        myAttempts.textContent = "";
    }
}

function restartGame(){
    if(Min === undefined || Max === undefined){
        return;
    }
    startGame(Min,Max);
    myResult.textContent = "";
    myAttempts.textContent = "";
    description.textContent = `Choose a difficulty level : `;
    attempts = 0;
    myGuess.value = "";
    easy.checked = false;
    medium.checked = false;
    hard.checked = false;
}


