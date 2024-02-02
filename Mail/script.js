const Emails = ["bruno@gmail.com", "margherita@gmail.com", "gino@gmail.com", 
"alfio@gmail.com", "giacomo@gmail.com","clarabella@gmail.com"]

const loginButton = document.getElementById("log");

loginButton.addEventListener("click", function(){

    const userEmail = document.getElementById("email").value;

    let myMails = false;

    for (let i = 0; i < Emails.length; i++) {
        if (Emails[i] == userEmail) {
            myMails = true;
        } 
    }
    
    let resultElement = document.querySelector("#result")
    
    if (myMails) {
        resultElement.innerText = "Wow!! Sei proprio uno dei nostri!!"
    } else {
        resultElement.innerText = "Mi dispiace, questo è un VIP Club. Siì sicuro della tua Mail."
    }
}
)






