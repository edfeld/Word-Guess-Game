

    // This function is run whenever the user presses a key.
        
    /*

    */

    var wordGuess = {
        "isGameStart": false,
        "guessCounter": 13,
        "userWins": 0,
        "arrPuzzleChoice": [ "MATCH GAME", 
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
                // this.initPuzzleDisplay();
                console.log("52. puzzle Display: " + this.arrPuzzleDisplay);
            } else {
                console.log("53. Failed to init Puzzle display ");
                console.log("55. puzzle Display: " + this.arrPuzzleDisplay);
            }

        },

        getNextPuzzle: function(){
            /*return Math.floor(Math.random() * len);*/
            if (this.puzzleCounter < (wordGuess.arrPuzzleChoice.length)) {

                // for (i=0;i<this.arrCurrentPuzzle.length;i++){
                    // var strOne = this.arrPuzzleChoice[this.puzzleCounter];
                    // var arrTemp = strOne.split("");
                    this.arrCurrentPuzzle = this.arrPuzzleChoice[this.puzzleCounter].split("");
                    console.log("71. this.arrCurrentPuzzle "+this.arrCurrentPuzzle)
                    // this.arrCurrentPuzzle.push(this.arrPuzzleChoice[this.puzzleCounter].split(""));
                // }
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
        
        isLetterDupSelection: function(chr){
            if (this.arrAlreadyGuessed.indexOf(chr) > -1){
                return true;
            }  else {
                    return false;
                }
        },

        initPuzzleDisplay: function (){
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
        },

        isGameWon: function () {
            if (this.arrPuzzleDisplay.indexOf("_") < 0) {
                return true;
                console.log("User won the game!!!");
            }else {
                return false;
            }
            
        },

        isGameLost() {
            if (this.guessCounter < 1){
                return true;
            } else {
                return false;
            }
        },

        processGuess: function () {
            if (this.arrAlreadyGuessed.indexOf(this.userGuess) > -1) {
                console.log("Already guessed: "+ this.userGuess);
            } else {
                if (this.arrCurrentPuzzle.indexOf(this.userGuess) > -1) {
                    this.findReplacePuzzleDisplay();
                    
                }
                this.arrAlreadyGuessed.push(this.userGuess);
                this.guessCounter--;
                $("#guess-counter").text(this.guessCounter);
                console.log(" 126. this.guessCounter " + this.guessCounter)
            }
            
            if (this.isGameWon()) {
                console.log("142. User has won the game!!!")
                this.userWins++
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
                }

                }

        },

        findReplacePuzzleDisplay() {
            for(i=0; i<this.arrCurrentPuzzle.length; i++) {
                if(this.arrCurrentPuzzle[i] === this.userGuess) {
                    this.arrPuzzleDisplay[i] = this.userGuess;
                }
            }    
                console.log("133. this.arrPuzzleDisplay: ", this.arrPuzzleDisplay);

        }

    }

$(document).ready(function() {
    
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        
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
                wordGuess.userGuess = wordGuess.userGuess.toUpperCase();
                console.log("3.UserGuess: " + wordGuess.userGuess);
                wordGuess.processGuess();
            }
        } else {
            wordGuess.initGame();
            console.log("arr len: " + wordGuess.arrPuzzleChoice.length);
            
            
        }
    }
});
