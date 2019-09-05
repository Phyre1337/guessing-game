// Summer Webpage
// Christian Torres
// Started: 8/3/19
// Due: 9/6/19

const MIN = 1; //Declaring a global variable for minimum value as a constant.
const MAX = 100; //Delcaring a global variable for maximum value as a constant.

let guesses = 5; //Declaring a global variable for the starting amount of guesses, allowing for change later.
let randomChoice = Math.floor(Math.random() * (MAX - MIN) + MIN); /*Picking the first random number to guess and declaring it for later,
                                                                    can be changed.*/
function init() //Declaring the function to reset all values to original such as above, effectively, "reloading" the page.
{
    //These are all just default values for different text boxes and variables.
    guesses = 5;
    randomChoice = Math.floor(Math.random() * (MAX - MIN) + MIN);
    document.getElementById("guessDisplay").innerHTML = `Guesses Remaining : ${guesses}`;
    document.getElementById("instruct").innerHTML = "Guess a number below and then press the button.";
    document.getElementById("victory").innerHTML = "<button onClick='guess()' id='myBtn'>Enter</button>";
    document.getElementById("arrowImage").innerHTML = "";
    document.getElementById("UpOrDown").innerHTML = "";
};

function listen() //Declaring function to listen for user keypress of enter, to do the same function as pressing the button.
{
document.getElementById("guess")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
    }
})};

function guess() //Declaring the main variable where the user tries to play the number guessing game.
{
    let userGuess = document.getElementById("guess").value; //Grabbing the value of the number that the user entered.

    if (userGuess < 0 || userGuess > 100) //Checking to make sure that the user entered a number within 1 to 100.
    {
        document.getElementById("UpOrDown").innerHTML = "Your number was not within the range of 1 to 100, please guess a new number.";
    } //If the user did enter a number out of range, they get warned to try again, if not, they continue as normal.
    else if (userGuess == "")
    {
        document.getElementById("UpOrDown").innerHTML = "Please type in a number to play."; //Tells the user if they accidentally
    }                                                                                       //type in nothing, to type something.
    else 
    {
        if (userGuess == randomChoice) //If user's guess is the same as the number selected by the program, they win.
        {
            document.getElementById("guessDisplay").innerHTML = "YOU WON!"; //Displays winning message and gives button to reset.
            document.getElementById("instruct").innerHTML = "Click the reset button below to play again.";
            document.getElementById("victory").innerHTML = "<button id='myBtn' onClick='init()'>Reset</button>";
            document.getElementById("guess").value = ""; //Resets value of input box to nothing.
        }
        else if (userGuess > randomChoice) //If the user's guess is higher than the number selected by the program,
        {                                  //it tells them to go lower.
            document.getElementById("arrowImage").innerHTML = "<img src='Images/down.png'>";
            document.getElementById("UpOrDown").innerHTML = "Your number is too high, maybe trying guessing lower.";
            guesses--; //Subtracts a guess from the user.
            document.getElementById("guessDisplay").innerHTML = `Guesses Remaining : ${guesses}`; //Displays the remaining number of guesses.
        }
        else if (userGuess < randomChoice) //If the user's guess is lower, the program tells them to go higher.
        {
            document.getElementById("arrowImage").innerHTML = "<img src='Images/up.png'>";
            document.getElementById("UpOrDown").innerHTML = "Your number is too low, maybe try guessing higher.";
            guesses--; //Subtracts a guess from the user.
            document.getElementById("guessDisplay").innerHTML = `Guesses Remaining : ${guesses}`; //Displays the remaining number of guesses.
        }
    }
    if (guesses == 0)  //If the user's guesses remaining hits zero, they lose and are forced to restart, 
    {                  //with a button calling the init function.
        document.getElementById("guessDisplay").innerHTML = "You lost..."; //Displays losing message and gives button to reset.
        document.getElementById("instruct").innerHTML = "Click the reset button below to play again.";
        document.getElementById("victory").innerHTML = "<button id='myBtn' onClick='init()'>Reset</button>";
        document.getElementById("guess").value = ""; //Resets value of input box to nothing.
    }
};
