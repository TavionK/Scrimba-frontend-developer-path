let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//15 characters long
function generatePassword(){
    pass1El.textContent=""
    pass2El.textContent=""
    for (let i = 0; i < 15; i++){
        pass1El.textContent += characters[Math.floor(Math.random()* characters.length)]
        pass2El.textContent += characters[Math.floor(Math.random()* characters.length)]
    }
}

