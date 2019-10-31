// *************************** YOUR CODE BELOW *******************************
$("document").ready(function() {
$("#shoot").click(function(){
    var input = $("#input").val();
    $("#userChoice").text(input);
    var computerchoice = Math.floor(Math.random()*3)
    var array = ["Rock","Paper","Scissors"];
    var computer = array[computerchoice];
    $("#computerChoice").text(computer);
})
});
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

