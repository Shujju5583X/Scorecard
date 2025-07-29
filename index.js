let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

let homeScore = 0;
let guestScore = 0;

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

function hone() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function htwo() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function hthree() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

function gone() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function gtwo() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function gthree() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}


function reset() {
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = homeScore;
    guestEl.textContent = guestScore;
}
