//initializing user input string for calculations
let userStr = "";

//Getting buttons and screen from HTML
const screen = document.querySelector(".screen");
const calcBtns = document.querySelectorAll(".math");
const clear = document.querySelector("#clear");
const equalSign = document.querySelector("#equal-sign");

//parse.Int() bc user input is string
const sum = (a, b) => {
    return parseInt(a) + parseInt(b);
}
const subtract = (a, b) => {
    return parseInt(a) - parseInt(b);
}
const multiply = (a, b) => {
    return parseInt(a) * parseInt(b);
}
const divide = (a, b) => {
    return parseInt(a) / parseInt(b);
}