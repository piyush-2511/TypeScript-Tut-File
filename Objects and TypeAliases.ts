function createUser({name:string, isPaid: boolean}){}

//add optional parameter
let newUser = {name:'Piyush', isPaid: true, email: 'p@gmail.com'}
createUser(newUser)


function createCourse():{name:string, price:number}{
  return {name:'reactjs', price: 3000 }
}



/////////////////TYPE ALIAS/////////////////////

type User = {
  name : string,
  email: string,
  isActive : boolean
}

function createUser2(user : User):User{
  return {name:'', email:'', isActive: true}
}

createUser2({name:'', email:'', isActive: true})


type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });



//READONLY 
type User2 = {
  readonly _id : string,
  name : string,
  email: string,
  isActive : boolean,
  creditCardDetails?: number
}

let myUser : User2={
  _id : '1234',
  name : 'Piyush',
  email : 'piyush@gmail.com',
  isActive: false,
  creditCardDetails : 1234
}

//this will occur an error because _id is readonly
// myUser._id = '24542';

type cardNumber = {
  cardNumber : string
}

type cardDate ={
  cardDate : string
}

type cardDetails = cardNumber & cardDate & {
  cvv : number
}

let myCardDetails : cardDetails = {
  cardNumber : '1234',
  cardDate : '10/05/2025',
  cvv : 123
}






export {}