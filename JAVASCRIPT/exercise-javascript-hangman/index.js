const keyboard = document.querySelector(".keyboard");
const guessWord = document.querySelector(".guess-word");
const categoryName = document.querySelector(".category-name");
const svg = document.querySelector('svg');
const ground = svg.querySelector("#ground");
const head = svg.querySelector("#head");
const body = svg.querySelector("#body");
const arms = svg.querySelector("#arms");
const legs = svg.querySelector("#legs");
const scaffold = svg.querySelector("#scaffold");
const success = document.querySelector('.success');
const fail = document.querySelector('.fail');
const winner = document.querySelector('.winner');
const lose = document.querySelector('.lose');
const feedback = document.querySelector('.feedback');
const feedbackMsg = document.querySelector(".feedback-msg");
const btn = document.querySelector('.btn');


const letters = Array.from("abcdefghijklmnopqrstuvwxyz");

const words = {
  animals: ["Dog", "Cow", "Cat", "Horse", "Fish", "Goat", "Dolphin", "Turtle", "Crocodile", "Elephant", "Buffalo"],
  cars: ["volvo", "honda", "Mercedes Benz", "BMW", "Ferrari", "Lamborghini", "Lexus", "Alfa Romeo"],
  countries: ["Sweden", "Peru", "Norway", "New Zealand", "Mexico", "Lithuania", "Lebanon", "Greece", "Germany", "Denmark"],
  currencies: ["dollar", "Euro", "franc", "ruble", "peso", "krona"]
};

letters.forEach(letter => {
    let keyHtml = `<span class="keyboard-key">${letter}</span>`;
    keyboard.innerHTML += keyHtml;
})


let wordsKategoryNames = Object.keys(words);
let randomCategoryIndex = Math.floor(Math.random() * wordsKategoryNames.length);
let randomCategoryName = wordsKategoryNames[randomCategoryIndex];
let randomCategoryValue = words[randomCategoryName];
let randomWordIndex = Math.floor(Math.random() * randomCategoryValue.length);
let randomWordValue = randomCategoryValue[randomWordIndex];




categoryName.innerText = randomCategoryName.toUpperCase();
let wordLetters = Array.from(randomWordValue);

wordLetters.forEach(letter => {
    let letterHtml;
    if (letter === ' '){
        letterHtml = `<span class="guess-letter space-style"></span>`;
    } else {
        letterHtml = `<span class="guess-letter"></span>`;
    }
    guessWord.innerHTML += letterHtml;
})

const guessLetters = document.querySelectorAll(".guess-word span");
const keyboardKeys = document.querySelectorAll(".keyboard span");
let theStatus = false;
let wrongAttempt = 0;
let allLetters = [];

document.addEventListener('click', e => {
    theStatus = false;
    if(e.target.className === 'keyboard-key'){
    e.target.classList.add('clicked-letter');
    wordLetters.forEach((letter, letterIndex) => {
        if (letter.toLowerCase() === e.target.innerText.toLowerCase()){
            theStatus = true;
            success.play();
            guessLetters.forEach((letterBox, boxIndex) => {
                if (letterIndex === boxIndex) {
                letterBox.innerText = letter;
                allLetters[boxIndex] = letterBox.innerText.toLowerCase();
                let result = allLetters.join('');
                if (result === randomWordValue.toLowerCase()){
                    keyboardKeys.forEach((key) => {
                      key.classList.add("finished");
                    });
                    feedbackMsg.innerHTML = `Well done, the word was:  ${randomWordValue}`;
                    feedback.classList.add("success");
                    winner.play();
                }   
                }
            });
        }
    })

    if (theStatus !== true){
        wrongAttempt ++;
        fail.play();
        switch (wrongAttempt){
            case 1:
                ground.classList.add('show');
                break;
            case 2:
                scaffold.classList.add('show');
                break;
            case 3:
                head.classList.add('show');
                break;
            case 4:
                body.classList.add('show');
                break;
            case 5:
                arms.classList.add('show');
                break;
            case 6:
                legs.classList.add('show');
                break;
        }
    }

    if(wrongAttempt === 6){
        keyboardKeys.forEach((key) => {
          key.classList.add("finished");
        });
        feedbackMsg.innerHTML = `Failed, The word was:  ${randomWordValue}`;
        feedback.classList.add('failed');
        lose.play();
    }

    }
})

btn.addEventListener('click', e => {
    location.reload();
})



