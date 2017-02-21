// count,greeting,VARIABLES!
console.log("Welcome to my page!")
var answer = "";
var count = 0;

//BEGINNING OF GAME!

console.log("asking user there name")

function functionOne(){
  var userinput = prompt("Hi welcome to my guessing game whats your name?","Enter Here");
  var greeting = "Hello " +userinput+ " this is going to be fun!";
  var userOutput = document.getElementById("name");
  userOutput.innerHTML = greeting;
  return greeting;
  console.log("returns the userinput in the userOutput")
};

//BEGINNING OF IF/ELSE STATMENTS!
//FIRST QUESTION!

console.log("first question")
function questionOne(){
  var question1 = prompt("Was Marcel born and raised in Portland, Oregon?","Yes or No");
  if ((question1.toLowerCase() === "yes")||(question1.toLowerCase() === "y")){
    count++;
    result += ("That's right! I'm from The best city on the planet!");
    console.log("correct")
  }
  else {
    result += ("Sorry maybe you can sit next to me in class today and you can get to know me better");
    console.log("false")
  };
};

//SECOND QUESTION BEGINS!

console.log("second question")
function questionTwo(){
  var question2 = prompt("Whats my favorite color?");
  if ((question2.toLowerCase() === "blue")||(question2.toLowerCase() === "b")){
    count++;
    result += ("Favorite color is blue");
    console.log("correct")
  }
  else {
    result += ("Its okay you didnt guess blue I love all colors!");
    console.log("false")
  };
};

//THIRD QUESTION BEGINS.

console.log("Third question")
function questionThree(){
  var question3 = prompt("True or False? Marcel's favorite NFl team is the New Orleans Saints?");
  if ((question3.toLowerCase() === "true")||(question3.toLowerCase() === "t")){
    count++;
    result += ("WHO DAT WHO DAT WHO DAT SAY GONNA BEAT THOSE Saints!");
    console.log("correct")
  }
  else {
    result += ("Wrong answer but now you know who the best team in the NFl is Now!");
    console.log("false")
  };
};

//FOURTH QUESTION BEGINS!

function questionFour(){
  console.log("Fourth question");
  var question4 = prompt("How old am I?");
  while ((question4) != 24) {
    if ((question4)<24){
      question4 = prompt("You guessed too low!", "Try Again");
    }else if((question4)>24){
      question4 = prompt("You guessed too high!","Try Again");
    }
  }
  count++;
  result += ("You are finally getting to know me!");
  console.log("end of fourth question using while loop")
};


/*

function questionFive(){
//Plans to add a switch statment for this question.
}

// Add a question using an array!

*/



//BEGINNING of all of my FUNCTIONS!

function playGame(){
  count = 0;
  result = "";
  questionOne()
  getAnswer();
  questionTwo();
  getAnswer();
  questionThree();
  getAnswer();
  questionFour();
  getAnswer();
  };


function scoreResults(){
  var score = document.getElementById("total");
  score.innerHTML = "Your current score is "+ count + " out of 4." ;
  if (count >= 4) {
    alert("You did a great job");
  } else {
    alert("play again");
  };
};
console.log("Prints if the user passed or not in an alert")

function getAnswer(){
  var answers = document.getElementById("answer");
  answers.innerHTML = result;
};

console.log("end of javascript")

//End of my script
