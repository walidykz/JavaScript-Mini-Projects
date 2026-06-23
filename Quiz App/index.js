const confirm = document.getElementById("myConfirm");
confirm.addEventListener("click", checkAnswer);
const next = document.getElementById("myNext");
next.addEventListener("click", nextCard)
const answer1 = document.getElementById("Answer1");
const answer2 = document.getElementById("Answer2");
const answer3 = document.getElementById("Answer3");
const answer1L = document.getElementById("Answer1L");
const answer2L = document.getElementById("Answer2L");
const answer3L = document.getElementById("Answer3L");
const description = document.getElementById("description");
const question = document.getElementById("Question");
const maxCard = 8;
let currentCard = 0; 
description.textContent = "Choose an answer";


class Card{
    constructor(question, answer1, answer2, answer3, correctAnswer){
        this.question = question,
        this.answer1 = answer1,
        this.answer2 = answer2,
        this.answer3 = answer3,
        this.correctAnswer = correctAnswer
    }

    checkMyAnswer(chosenAnswer){
        return this.correctAnswer === chosenAnswer ? description.textContent = ("Correct Answer") : description.textContent = ("Wrong Answer");
    }
}

const cards = [new Card("What is the biggest County in Africa ?", "Algeria", "Egypt", "South Africa", "Algeria"),
               new Card("What is the largest continent in the world by area?", "Africa", "Asia", "Europe", "Asia"),
               new Card("Which country has the largest population in the world?", "India", "China", "United States", "India"),
               new Card("What is the longest river in the world?", "Amazon River", "Nile River", "Yangtze River", "Nile River"),
               new Card("Which ocean is the largest?", "Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Pacific Ocean"),
               new Card("What is the capital city of Australia?", "Sydney", "Melbourne", "Canberra", "Canberra"),
               new Card("Which desert is the largest hot desert in the world?", "Gobi Desert", "Sahara Desert", "Arabian Desert", "Sahara Desert"),
               new Card("Mount Everest is located in which mountain range?", "Andes", "Alps", "Himalayas", "Himalayas")];

function selectCard(){
    const cardIndex = Math.floor(Math.random() * maxCard);
    return cardIndex;
}
function startGame(){
    currentCard = selectCard();

    question.textContent = cards[currentCard].question;
    answer1L.textContent = cards[currentCard].answer1;
    answer2L.textContent = cards[currentCard].answer2;
    answer3L.textContent = cards[currentCard].answer3;
    answer1.value = cards[currentCard].answer1;
    answer2.value = cards[currentCard].answer2;
    answer3.value = cards[currentCard].answer3;

    console.log(answer1.value)
    console.log(answer2.value)
    console.log(answer3.value)
}
function checkAnswer(){
    if(answer1.checked){
        cards[currentCard].checkMyAnswer(answer1.value);
        confirm.disabled = true;
    }else if(answer2.checked){
        cards[currentCard].checkMyAnswer(answer2.value);
        confirm.disabled = true;
    }else if(answer3.checked){
        cards[currentCard].checkMyAnswer(answer3.value);
        confirm.disabled = true;
    }else{
        description.textContent ="Please choose an answer!";
    }
}

function nextCard(){
    confirm.disabled = false;
    startGame();
    description.textContent = "Choose an answer";
    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;
}

startGame();
