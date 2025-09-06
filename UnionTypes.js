"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var piyush = {
    name: 'piyush',
    id: 3344
};
console.log(piyush);
piyush = {
    username: 'piyush123',
    id: 3344
};
console.log(piyush);
function getDBId(id) {
    //making some API calls 
    // it will give an error because id can be number also
    // id.toLowerCase() 
    //NARROWING
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    console.log('DB id is :', id);
}
//ARRAY OF UNION TYPES
// it will give an error because the array is of number type only
// const data : number[] = [1,2,3,"hello"] 
// const data : number[] | string[] = ['1',2,3]
var data = [1, 2, 3, "hello"];
data.push(4);
var pi = 3.14;
