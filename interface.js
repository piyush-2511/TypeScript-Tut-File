"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Piyush = {
    dbId: 1234,
    email: 'p@gmail.com',
    userId: 456,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
    githubToken: 'gisrg94jd49gj',
};
//changing the email value
Piyush.email = 'piyush@gmail.com';
var PiyushAdmin = {
    dbId: 1234,
    email: 'piyush.admin@gmail.com',
    userId: 444,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
    githubToken: '24098tuwr809gj42g',
    role: 'admin',
};
console.log(Piyush);
console.log(PiyushAdmin);
