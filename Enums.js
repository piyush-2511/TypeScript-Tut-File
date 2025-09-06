"use strict";
// provide the restricted values for certain fields
// restrict the user choice
Object.defineProperty(exports, "__esModule", { value: true });
// const AISLE = 0;
// const WINDOW = 1;
// const MIDDLE = 2;
// let seat: number=0;
// //what if somebody changes the value of AISLE to 5
// if (seat === 0){//what if somebody changes the value of AISLE to 5
//   console.log("You got the aisle seat");
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 22] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 23] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 24] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 25] = "FOURTH"; //by defaultvalue is 3
})(SeatChoice || (SeatChoice = {}));
//values is in increasing order 
//in js enum create the IIFE(Immediately Invoked Function Expression)
//to remove this, we can add const before enum
var hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
