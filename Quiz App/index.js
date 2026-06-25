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
const displayScore = document.getElementById("myScore");
const qTitle = document.getElementById("qTitle");
let questionCounter = 1;
let currentCard = 0;
let score = 0;
let cardDec = []; 


description.textContent = "Choose an answer";
displayScore.textContent = `Your Score : ${score}`;



class Card{
    constructor(id, question, answer1, answer2, answer3, correctAnswer){
        this.id = id;
        this.question = question,
        this.answer1 = answer1,
        this.answer2 = answer2,
        this.answer3 = answer3,
        this.correctAnswer = correctAnswer
    }

    checkMyAnswer(chosenAnswer){
        return this.correctAnswer === chosenAnswer;
    }
}

const cards = [new Card(0, "What is the biggest County in Africa ?", "Algeria", "Egypt", "South Africa", "Algeria"),
               new Card(1, "What is the largest continent in the world by area?", "Africa", "Asia", "Europe", "Asia"),
               new Card(2, "Which country has the largest population in the world?", "India", "China", "United States", "India"),
               new Card(3, "What is the longest river in the world?", "Amazon River", "Nile River", "Yangtze River", "Nile River"),
               new Card(4, "Which ocean is the largest?", "Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Pacific Ocean"),
               new Card(5, "What is the capital city of Australia?", "Sydney", "Melbourne", "Canberra", "Canberra"),
               new Card(6, "Which desert is the largest hot desert in the world?", "Gobi Desert", "Sahara Desert", "Arabian Desert", "Sahara Desert"),
               new Card(7, "Mount Everest is located in which mountain range?", "Andes", "Alps", "Himalayas", "Himalayas")];

const maxCard = cards.length;
qTitle.textContent = `Question : ${questionCounter} / ${maxCard}`
function selectCard(){
    let cardIndex;
    let usedCard ;
    if(cardDec == ""){
        cardIndex = Math.floor(Math.random() * maxCard);
        cardDec = [...cardDec, cardIndex];
        console.log(cardDec);
    }else{
        do{
            usedCard = false;
            cardIndex = Math.floor(Math.random() * maxCard);
            for(let i = 0; i< cardDec.length; i++){
                if(cardIndex == cardDec[i]){
                    usedCard = true;
                }
            }

        }while(usedCard == true);
    cardDec = [...cardDec, cardIndex];
    console.log(cardDec);
    }
    
    return cardIndex;
}
function startGame(){
    if(questionCounter == maxCard - 1){
        confirm.disabled = true;
        next.disabled = true;
    }else{
        currentCard = selectCard();
        next.disabled = true;

        question.textContent = cards[currentCard].question;
        answer1L.textContent = cards[currentCard].answer1;
        answer2L.textContent = cards[currentCard].answer2;
        answer3L.textContent = cards[currentCard].answer3;
        answer1.value = cards[currentCard].answer1;
        answer2.value = cards[currentCard].answer2;
        answer3.value = cards[currentCard].answer3;
    }
   
}
function checkAnswer(){
    next.disabled = false;
    const selectedAnswer = document.querySelector(`input[name="Answer"]:checked`); 
    if(selectedAnswer == null){
        description.textContent = "Please choose an answer!";
        displayScore.textContent = `Your Score : ${score}`;
        return;
    }
    if(cards[currentCard].checkMyAnswer(selectedAnswer.value)){
        description.textContent = "Correct Answer";
        score++;
    }else{
        description.textContent = "Wrong Answer";
    }
    displayScore.textContent = `Your Score : ${score}`;
    confirm.disabled = true;
}

function nextCard(){
    confirm.disabled = false;
    startGame();
    description.textContent = "Choose an answer";
    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;
    questionCounter++;
    qTitle.textContent = `Question : ${questionCounter} / ${maxCard}`;  
    console.log(` q : ${questionCounter}`);
}
console.log(`maxcard ${maxCard}`)
startGame();