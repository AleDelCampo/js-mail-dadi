let Emails = ["bruno@gmail.com", "margherita@gmail.com", "gino@gmail.com", 
"alfio@gmail.com", "giacomo@gmail.com","clarabella@gmail.com"]

let userEmail = document.getElementById("email");

    log.addEventListener("click",
    function () {
        if (userEmail.value == Emails[0]) {
            document.getElementById("result").innerText = "Wow, sei uno dei nostri!!";
        } else if (userEmail.value == Emails[1]) {
            document.getElementById("result").innerText = "Wow, sei uno dei nostri!!";
        } else if (userEmail.value == Emails[2]) {
            document.getElementById("result").innerText = "Wow, sei uno dei nostri!!";
        } else if (userEmail.value == Emails[3]) {
            document.getElementById("result").innerText = "Wow, sei uno dei nostri!!";
        } else if (userEmail.value == Emails[4]) {
            document.getElementById("result").innerText = "Wow, sei uno dei nostri!!";
        } else if (userEmail.value == Emails[5]) {
            document.getElementById("result").innerText = "Wow, sei uno dei nostri!!";
        } else {
            document.getElementById("result").innerText = "Mi dispiacee, ma questo è un VIP Club!!";
        }
    }
)
