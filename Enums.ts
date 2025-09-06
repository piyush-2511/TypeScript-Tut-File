// provide the restricted values for certain fields
// restrict the user choice

// const AISLE = 0;
// const WINDOW = 1;
// const MIDDLE = 2;

// let seat: number=0;
// //what if somebody changes the value of AISLE to 5
// if (seat === 0){//what if somebody changes the value of AISLE to 5
//   console.log("You got the aisle seat");
// }

enum SeatChoice {
  AISLE=22, // by default value is 0
  MIDDLE, //by default value is 1, in this it is 23
  WINDOW, //by default value is 2
  FOURTH //by defaultvalue is 3
}
//values is in increasing order 

//in js enum create the IIFE(Immediately Invoked Function Expression)
//to remove this, we can add const before enum

const hcSeat = SeatChoice.AISLE
console.log(hcSeat);


export {}
