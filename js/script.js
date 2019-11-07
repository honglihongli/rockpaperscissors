// *************************** YOUR CODE BELOW *******************************
$("document").ready(function() {
$("#shoot").click(function(){
  var input = $("#input").val();
  $("#userChoice").text(input);
  var computerchoice = Math.floor(Math.random()*3)
  var array = ["Rock","Paper","Scissors"];
  var computer = array[computerchoice];
  $("#computerChoice").text(computer);
  if (input === "Scissors" && computer === "Paper") {
    $("#result").text("Player wins!")
  } else if (input === "Scissors" && computer === "Rock") {
    $("#result").text("Computer wins!");
  } else if (input === "Scissors" && computer === "Scissors") {
    $("#result").text("Nobody wins!");
  } else if (input === "Paper" && computer === "Paper") {
    $("#result").text("Nobody wins!")
  } else if (input === "Paper" && computer === "Rock") {
    $("#result").text("Player wins!");
  } else if (input === "Paper" && computer === "Scissors") {
    $("#result").text("Computer wins!");
  } else if (input === "Rock" && computer === "Paper") {
    $("#result").text("Computer wins!")
  } else if (input === "Rock" && computer === "Rock") {
    $("#result").text("Nobody wins!");
  } else if (input === "Rock" && computer === "Scissors") {
    $("#result").text("Player wins!");
  }
})
});
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

