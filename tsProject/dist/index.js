"use strict";
class User {
    email;
    name;
    city = 'Delhi';
    _courseCount = 1;
    // readonly city: string = 'Delhi';
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    //setter does not have return type 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
const piyush = new User('piyush@gmail.com', 'piyush');
// piyush.deleteToken() // we cannot access private method
piyush.courseCount = 2;
console.log(piyush);
