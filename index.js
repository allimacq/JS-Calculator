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

const solution = (userStr) => {
    //turn input to array and get rid of initial empty string with filter()
    userStr = userStr.split(" ").filter(x => x !== "")
    //initializing a
    let a = userStr[0];
    for (i = 0; i < userStr.length - 2; i += 2) {
        let b = userStr[i + 2];
        if (userStr[i + 1] === "+") {
            a = sum(a, b)
        } else if (userStr[i + 1] === "-") {
            a= subtract(a, b)
        } else if (userStr[i + 1] === "*") {
            a= multiply(a, b)
        } else if (userStr[i + 1] === "/") {
            a = divide(a, b)
        } 
    }
    return a;
}