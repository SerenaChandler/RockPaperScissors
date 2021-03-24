var begin = window.prompt("would you like to play rock, paper, scissors?")
if (begin == "yes") {

    function getUserInput() {
    var userInput = window.prompt("r, p, or s?")
    if (userInput == "r" || userInput == "p" || userInput == "s") {
       
        window.alert("you have selected " + userInput )
    }else {
        window.alert("invalid input")        
        }
    return userInput
}
}


var PlayerChoice = getUserInput()

// if (PlayerChoice !== "r" || PlayerChoice !== "p" || PlayerChoice !== "s") {
//     getUserInput()
    
// }



function getComputerInput() {
    var randomnumber = (Math.floor(Math.random()*3))
    var computerOutput = "r"

    if (randomnumber == 0) {
        computerOutput = "s"
    }if (randomnumber == 1) {
        computerOutput = "r"
    }if (randomnumber == 2) {
        computerOutput = "p"
    }
    return computerOutput

}

var computerInput = getComputerInput()

console.log(computerInput)
console.log(PlayerChoice)

var W = 0
var T = 0
var L = 0

function detremineWinner(computerInput, PlayerChoice) {
    if (PlayerChoice == computerInput) {
        window.alert("it's a tie")
        T = T + 1
    }if (PlayerChoice == "r" && computerInput == "s") {
        window.alert("you win!")
        W = W + 1
    }
    if (PlayerChoice == "r" && computerInput == "p") {
        window.alert("you lose...")
        L = L + 1
    }
    if (PlayerChoice == "s" && computerInput == "p") {
        window.alert("you win!")
        W = W + 1
    }
    if (PlayerChoice == "s" && computerInput == "r") {
        window.alert("you lose...")
        L = L + 1
    }
    if (PlayerChoice == "p" && computerInput == "r") {
        window.alert("you win!") 
        W = W + 1
    }
    if (PlayerChoice == "p" && computerInput == "s") {
            window.alert("you lose...") 
            L = L + 1
        }
        
    window.alert("Wins: "+ W + "Ties: " + T + "Losses: " + L)
    




    var again = window.prompt("would you like to play again?")

    if (again == "yes") {
        getUserInput()
        getComputerInput()
        detremineWinner(computerInput, PlayerChoice)
    }else ("goodbye")



    }
detremineWinner(computerInput, PlayerChoice)



