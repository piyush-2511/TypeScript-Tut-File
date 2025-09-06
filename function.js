"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var result = addTwo(3);
console.log(result);
getUpper("hello");
signUpUser('piyush', 'piyush@gmail.com', false);
loginUser('p', 'p@gmail.com', true);
