// count,greeting,age VARIABLES!
var count = 0;
var greeting = "Hello ";
var age = 24;

//BEGINNING OF GAME!
alert("welcome to my page!")
console.log("Hi welcome to my guessing game whats your name?");
var userInput = prompt("Before we start lets get your name")
while (userInput === ""){
  userInput = prompt("Enter name please")
}

//ALERT SAYING HELLO TO userInput!
alert(greeting + userInput);
console.log(greeting + userInput)

//BEGINNING OF IF/ELSE STATMENTS!
//FIRST QUESTION!

confirm("Lets get this party started!")
console.log("This is the first question")
var questionOne = prompt("How old am I?");
if (questionOne === "24" ) {
  alert("Good job " +userInput+ " I am 24 years old!")
  console.log("born in 1992!")
  count++;
} else {
  alert("Meh, maybe we can get to know each other a bit more!");
}

//SECOND QUESTION BEGINS!
var userInput = prompt("Whats my favorite number in the twenties");
if(userInput == 25) {
  alert("You got the correct answer")
  console.log("25 is the correct answer")
  count++;
} else if (userInput >= 26) {
  alert("not that high")
  console.log("you guessed over 25!")
}
else{
  console.log("not that low!");
}

//THIRD QUESTION BEGINS.

var questionThree = prompt("Whats my favorite color?");
console.log("We are almost done, just a couple more questions")
if (questionThree === "blue") {
  alert(" Favorite color is blue");
  console.log("Blue,Blue,Blue!")
  count++;
} else {
  alert("Its okay you didnt guess blue I love all colors!");
  console.log("wrong answer")
}
//FOURTH QUESTION.

console.log("You are starting to get to know me pretty well.");
var questionFour = prompt("Was I born and raised in Portland, Oregon?");
if ((questionFour.toLowerCase() === "yes")||
(questionFour.toLowerCase() === "y")){
  alert("That's right! I'm from The best city on the planet!");
  console.log("correct")
  count++;
} else{
  alert("Sorry maybe you can sit next to me in class today and you can get to know me better");
  console.log("Portland, Oregon silly.")
}
//FIFTH QUESTION
var questionFive = prompt("How many girlfriends have I had in the past 3 years?")



console.log("You got "+ count + " correct answers");
alert("You got "+ count + " correct answers");
/*END*/
