

 // This function is run whenever the user presses a key.
    
 /*
 isGameStarted = True
alphaArr [a - z]
Puzzle array of arrays 
Display array
GuessCounter = 13
arrAlreadyGuessed []
CurrentGuessLetter
wins

 */
 var wordGuess = {
    isGameStart: false,
    guessCounter: 13,
    userWins: 0,
    arrPuzzleChoice: [ "MATCH GAME", 
        "JEOPARDY",
        "WHEEL OF FORTUNE" ], 
       /* What's my line
        To tell the truth
        Dating game
        Who's line is it anyway
        The price is right
        Gong show
        Family feud
        Cash cab
        Biggest loser
        Hollywood game night
        Ten Thousand Dollar pyramid
        Fear Factor
        Amazing Race
        American Gladiator
        American Ninja warrior
        */
    // arrPuzzleChoiceDisplay: ["____ ____", "_________", "_____ __ _______" ],
    
    arrCurrentPuzzle: [],
    arrAlreadyGuessed: [],
    arrPuzzleDisplay: [],
    userGuess: "",
    puzzleCounter: 0,

    initGame: function(){
        this.isGameStart = true;
        console.log("game started" + wordGuess.isGameStart);
        this.userGuess = 13;
        this.userWins = 0
        if (this.getNextPuzzle()) {
            this.initPuzzleDisplay();
            console.log("52. puzzle Display: " + this.arrPuzzleDisplay);
        } else {
            console.log("53. Failed to init Puzzle display ");
            console.log("55. puzzle Display: " + this.arrPuzzleDisplay);
        }

    },

     getNextPuzzle: function(){
        /*return Math.floor(Math.random() * len);*/
        if (this.puzzleCounter < (wordGuess.arrPuzzleChoice.length - 1)) {
            
            this.arrCurrentPuzzle.push(this.arrPuzzleChoice[this.puzzleCounter].split(""));
            console.log("66. array current Puzzle ", this.arrCurrentPuzzle);
            console.log("67 arrCurrentPuzzle[0]", wordGuess.arrCurrentPuzzle[0]);
            this.puzzleCounter++
            console.log(this.arrCurrentPuzzle)
            return true;
        } else{
            return false;
        }
    },
    
    isLetterDupSelection: function(chr){
        if (this.arrAlreadyGuessed.indexOf(chr) > -1){
            return true;
        }  else {
                return false;
            }
    },

    initPuzzleDisplay: function (){
        for(var i=0; i<this.arrCurrentPuzzle.length; i++){
            /* if alpha */
            if (this.arrCurrentPuzzle[i].search(/[a-z]/i) > -1) {
                this.arrPuzzleDisplay.push("_");

            } else if (this.arrCurrentPuzzle[i] = " ") {
                this.arrPuzzleDisplay.push(" ");
                } else {
                    Console.log("89. Error initPuzzleDisplay");
                }
            
        }
    },

    processGuess: function (){


    }


 }
 
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    //var userGuess = event.key;
    wordGuess.userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("1.The key pressed is: " + wordGuess.userGuess);
    
    if (wordGuess.isGameStart) {

        if (wordGuess.userGuess.search(/[a-z]/) > -1) {
            console.log("2.UserGuess: " + wordGuess.userGuess);
            
        } else {
            wordGuess.userGuess = null;
        }

        if (wordGuess.userGuess)
        {
            console.log("3.UserGuess: " + wordGuess.userGuess);
        }
    } else {
        wordGuess.initGame();
        console.log("Start Game = " + wordGuess.isGameStart);
        console.log("arr len: " + wordGuess.arrPuzzleChoice.length);
        
        
    }
}