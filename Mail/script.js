/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere
(qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.*/

const Emails = ["bruno@gmail.com", "margherita@gmail.com", "gino@gmail.com", 
"alfio@gmail.com", "giacomo@gmail.com","clarabella@gmail.com"]

const userEmail = document.getElementById("email");

log.addEventListener("click",
    function () {
        document.getElementById("result").innerText = `${email.value}`;
    }
)

 