let pcButton = document.getElementById("pcbutton"); 
let userButton = document.getElementById("userbutton"); 

let pcNumber = Math.floor(Math.random() * 6) +1; //
let userNumber = Math.floor(Math.random() * 6) +1; //

pcNumber = Number(pcNumber); 
userNumber = Number (userNumber); 


let pcDisplay = document.getElementById("pcnumber");
let userDisplay = document.getElementById("usernumber");

let winner = document.getElementById("esite");

let pcDice = document.getElementById("dicepc");
let userDice = document.getElementById("diceuser");

pcButton.addEventListener ("click",
    function() {
        pcDisplay.innerHTML = pcNumber;

        if (userDisplay.innerHTML == 0) {
            winner.innerHTML = "Turno Avversario!!";
        } else if (userDisplay.innerHTML > pcDisplay.innerHTML) { 
            winner.innerHTML = "Vince User!!";
        } else{
            winner.innerHTML = "E' un Pareggio!!";
        }
    }
)
userButton.addEventListener ("click",
    function() {
        userDisplay.innerHTML = userNumber;

        if (pcDisplay.innerHTML > userDisplay.innerHTML) {
            winner.innerHTML = "Vince Pc!!";
        } else if (pcDisplay.innerHTML == 0) { 
            winner.innerHTML = "Turno Avversario!!";
        } else if (pcDisplay.innerHTML < userDisplay.innerHTML) {
            winner.innerHTML = "Vince User!!";
        } else {
            winner.innerHTML = "E' un Pareggio!!"
        }
    }
)