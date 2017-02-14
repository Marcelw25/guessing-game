var count = 0;



confirm("Lets get this party started!")
 var age = prompt("How old am I?");
 if (age < 24) {
   alert("Meh, maybe we can get to know each other a bit more!");
   count++;
 } else {
   alert("I am 24 years old!");
 }


 //This is were my second question begins.
 alert("Next question")
 var userTeam = prompt("What's my favorite NFL team located in New Orleans Lousiana!?");
 if ( userTeam === "saints".toUpperCase) {
   alert("WHO DAT! WHO DAT! WHO DAT SAY GONNA BEAT THE Saints!");
   count++;

 } else {
   alert("Wrong answer but know you know who the best team in the NFl is now!");
 }

 //This is were my third question begins.
 console.log("We are almost done, just a couple more questions")
 var questionThree = prompt("Whats my favorite color?");
 var color = "blue".toLowerCase
 if (questionThree = "blue".toLowerCase) {
   alert("This is the true blue answer!");
   count++;
 } else {
   alert("Its okay you didnt guess blue I love all colors!");
 }
 alert("Favorite color is blue")
 var number = 25;
 var userInput = prompt("Whats my favorite number in the twentys")
 if(userInput === number) {
   console.log("You got the corrrect answer!")
   count++;
}
else(userInput > 0)
   console.log("not that low!");


console.log("You got "+ count + " correct answers");
confirm("You got "+ count + " correct answers");
