"use strict";
//Primitives 
Object.defineProperty(exports, "__esModule", { value: true });
//Strings
var greetings = "Hello Piyush";
greetings.toLowerCase();
console.log(greetings);
//number
var userId = 123445;
//boolean
var isLoggedIn = false;
//any - it is not recommended 
var hero;
function getHero() {
    // return 'thor'
    return true; // it is returning the boolean but it has it return STRING
}
hero = getHero();
console.log(hero);
