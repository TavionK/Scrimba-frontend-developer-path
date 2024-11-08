let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function home1point(){
    homeCount += 1
    homeScore.textContent = homeCount
}
function home2point(){
    homeCount += 2
    homeScore.textContent = homeCount
}
function home3point(){
    homeCount += 3
    homeScore.textContent = homeCount
}
function guest1point(){
    guestCount += 1
    guestScore.textContent = guestCount
}
function guest2point(){
    guestCount += 2
    guestScore.textContent = guestCount
}
function guest3point(){
    guestCount += 3
    guestScore.textContent = guestCount
}

function newGame(){
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}