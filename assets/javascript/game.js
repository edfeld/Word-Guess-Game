

    // This function is run whenever the user presses a key.
        
    /*

    */

    var wordGuess = {
        "isGameStart": false,
        "guessCounter": 13,
        "userWins": 0,
        "arrPuzzleChoice": [ 
            "MATCH GAME", 
            "JEOPARDY",
            "WHEEL OF FORTUNE", 
            "TO TELL THE TRUTH",
            "DATING GAME",
            "THE PRICE IS RIGHT",
            "GONG SHOW",
            "FAMILY FEUD",
            "CASH CAB",
            "BIGGEST LOSER",
            "FEAR FACTOR",
            "AMAZING RACE",
            "NINJA WARRIOR", 
        ], 
        
        "arrCurrentPuzzle": [],
        "arrAlreadyGuessed": [],
        "arrPuzzleDisplay": [],
        "userGuess": "",
        "puzzleCounter": 0,

        initGame: function(){
            this.isGameStart = true;
            this.puzzleCounter = 0;
            console.log("50. Game started: " + wordGuess.isGameStart);
            this.guessCounter = 13;
            $("#guess-counter").text(this.guessCounter);
            this.userWins = 0;
            $("user-wins").text(this.userWins);
            if (this.getNextPuzzle()) {
                console.log("52. puzzle Display: " + this.arrPuzzleDisplay);
            } else {
                console.log("53. Failed to init Puzzle display ");
                console.log("55. puzzle Display: " + this.arrPuzzleDisplay);
            }

        },

        getNextPuzzle: function(){
            if (this.puzzleCounter < (wordGuess.arrPuzzleChoice.length)) {
                this.arrCurrentPuzzle = this.arrPuzzleChoice[this.puzzleCounter].split(""); 
                console.log("66. array current Puzzle ", this.arrCurrentPuzzle);
                console.log("67 arrCurrentPuzzle[0]", wordGuess.arrCurrentPuzzle[0]);
                this.puzzleCounter++
                console.log(this.arrCurrentPuzzle)
                this.initPuzzleDisplay();
                this.arrAlreadyGuessed = [];
                this.guessCounter = 13;
                $("#guess-counter").text(this.guessCounter);
                return true;
            } else{
                return false;
            }
        },
        

        /* Initialize the puzzle for display */
        initPuzzleDisplay: function () {
            $("#status-output").text(" ");
            this.arrPuzzleDisplay = [];
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
            $("#display-word").text(this.arrPuzzleDisplay.join(""));
        },
        
        /* Has the game been won */
        isGameWon: function () {
            if (this.arrPuzzleDisplay.indexOf("_") < 0) {
                return true;
                console.log("User won the game!!!");
            }else {
                return false;
            }
            
        },

        /* Has the game been lost */
        isGameLost() {
            if (this.guessCounter < 1){
                return true;
            } else {
                return false;
            }
        },

        /* run through the game processes */
        processGuess: function () {
            if (this.arrAlreadyGuessed.indexOf(this.userGuess) > -1) {
                console.log("Already guessed: "+ this.userGuess);
            } else {
                if (this.arrCurrentPuzzle.indexOf(this.userGuess) > -1) {
                    this.findReplacePuzzleDisplay();
                    
                }
                this.arrAlreadyGuessed.push(this.userGuess);
                $("#letters-guessed").text(this.arrAlreadyGuessed.join(" "));
                this.guessCounter--;
                $("#guess-counter").text(this.guessCounter);
                console.log(" 126. this.guessCounter " + this.guessCounter);
            }
            
            if (this.isGameWon()) {
                console.log("142. User has won the game!!!");
                this.userWins++;
                $("#user-wins").text(this.userWins);
                // alert("Winner!");
                console.log("131 Userwins: " + this.userWins);
                if (this.getNextPuzzle()) {
                    console.log("133. Getting next puzzle");
                    
                } else {
                    console.log("149. The Game is over. press any key to start again");
                    this.isGameStart = false;
                }
            } else if (this.isGameLost()) {
                console.log("150. the game has been lost!!");
                    if (this.getNextPuzzle()) {
                        console.log("133. Getting next puzzle");
                        
                    } else {
                        console.log("149. The Game is over. press any key to start again");
                        this.isGameStart = false;
                        $("#status-output").text("This Game is over!, Press any key to play again");
                    }

                }

        },

        findReplacePuzzleDisplay() {
            for(i=0; i<this.arrCurrentPuzzle.length; i++) {
                if(this.arrCurrentPuzzle[i] === this.userGuess) {
                    this.arrPuzzleDisplay[i] = this.userGuess;
                }
            }   
            $("#display-word").text(this.arrPuzzleDisplay.join("")); 
                console.log("133. this.arrPuzzleDisplay: ", this.arrPuzzleDisplay);

        }

    }

$(document).ready(function() {
    
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        
        wordGuess.userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("1.The key pressed is: " + wordGuess.userGuess);
        /* Test to see if the game has been started */ 
        if (wordGuess.isGameStart) {
            /* Do a regex search to see if an Alpha character has been entered */
            if (wordGuess.userGuess.search(/[a-z]/) > -1) {
                console.log("2.UserGuess: " + wordGuess.userGuess);
            /* Otherwise set the value to null */    
            } else {
                wordGuess.userGuess = null;
            }
            /* if it is a non-null value continue */
            if (wordGuess.userGuess)
            {
                wordGuess.userGuess = wordGuess.userGuess.toUpperCase();
                console.log("3.UserGuess: " + wordGuess.userGuess);
                wordGuess.processGuess();
            }
        } else {
            /* start the game initialization process */
            wordGuess.initGame();
            console.log("arr len: " + wordGuess.arrPuzzleChoice.length);
            
        }
    }
});
