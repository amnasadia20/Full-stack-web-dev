const prompt = require("prompt-sync")()
// What above line does is the load in this module, so it requires its use, and then we gt acces to it in this prompt variable. We can use this prompt variable to actually grab user input.
/* So we said we are declaring a constant, a type of variable in JavaScript, we are saying this is equal to requiring prompt sync module and then we put another set of parantheses here */
console.log("Welcome to the Computer Software Quiz");

let correctAnswer = 0;
const totalQuestions = 5;

const answer1 = prompt("What instructs the computer hardware, what to do and how to do it? ");
const correct_answer1 = "SOFTWARE";
if(answer1.toUpperCase() === correct_answer1) {
    console.log("You got it correct!");
    correctAnswer += 1;
    
} else {
    console.log("Revise your concepts....");
    
}

const answer2 = prompt("The main function of computer software is to turn data into: ");
const correct_answer2 = "INFORMATION";
if(answer2.toUpperCase() === correct_answer2) {
    console.log("You got it correct!");
    correctAnswer += 1;
} else {
    console.log("Revise your concepts....");
    
}

const answer3 = prompt("A computer program that functions as an intermediary between a computer user and the computer hardware is called: ");
const correct_answer3 = "OS";
if(answer3.toUpperCase() === correct_answer3) {
    console.log("You got it correct!");
    correctAnswer += 1;
} else {
    console.log("Revise your concepts....");
    
}

const answer4 = prompt("One or more defects occurring in the computer software that prevents the software from working is called a: ");
const correct_answer4 = "BUG";
if(answer4.toUpperCase() === correct_answer4) {
    console.log("You got it correct!");
    correctAnswer += 1;
    
} else {
    console.log("Revise your concepts....");
    
}

const answer5 = prompt("The process of finding errors/defects/bugs in the software program is called ");
const correct_answer5 = "DEBUGGING";
if(answer5.toUpperCase() === correct_answer5) {
    console.log("You got it correct!");
    correctAnswer += 1;
    
} else {
    console.log("Revise your concepts....");
    
}

console.log(`You got ${correctAnswer} questions correct.`);
console.log(`You scored ${(correctAnswer/ totalQuestions) * 100} %.`);

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", percent.toString() + "%");