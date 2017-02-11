  prompt("Are you ready to play!");

  confirm("Lets get this party started!")
  var age = prompt("How old am I?");
  if (age < 24) {
    console.log("Meh, maybe we can get to know each other a bit more!");
  } else {
    console.log("I am 24 years old!");
  }

  //This is were my second question begins.
  alert("Next question")
  var team = prompt("What's my favorite NFL team located in New Orleans Lousiana!?");
  var team = "Saints".toUpperCase
  if (team === "saints".toUpperCase) {
    console.log("WHO DAT! WHO DAT! WHO DAT SAY GONNA BEAT THE Saints!");

  } else {
    console.log("Wrong answer but know you know who the best team in the NFl is now!");
  }

  //This is were my third question begins.
  alert("We are almost done, just a couple more questions")
  var color = prompt("Whats my favorite color?");
  var color = "blue".toLowerCase
  if (color = "blue".toLowerCase) {
    console.log("This is the true blue answer!");
  } else {
    console.log("Its okay you didnt guess blue I love all colors!");
  }
  alert("Favorite color is blue")

  var number = prompt("Whats my favorite number in the twentys")

  if (number == 25) {
    console.log("You got the corrrect answer!")

  }
else if(number <= 24){
    console.log("not that low!")
}
   else {
    alert("Wrong answer try again")
  }
