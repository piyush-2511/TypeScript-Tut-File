"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string|number)[] = [1,'PK'];
var Tuser = [1, 'PK'];
Tuser = [true, 123, 'pk'];
var rgb = [255, 255, 255];
//rgb.push(1234) // it will give an error because rgb is a readonly array
console.log(rgb);
var newUser = [1, 'Piyush'];
// newUser[1] = 1234 // it will give an error because the second element should be a string
newUser[1] = 'Kumar';
newUser.push(1234); // it will not give an error because at the runtime the tuple is converted to the array
console.log(newUser);
