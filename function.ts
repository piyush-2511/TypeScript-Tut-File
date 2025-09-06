function addTwo(num:number):number{
  // num.toUpperCase()
  return num + 2;
  // return 'hello' // This will cause an error because 'hello' is not a number
}

function getUpper(val:string){
  return val.toUpperCase();
}

function signUpUser(name: string,email: string, isPaid : boolean){
}

let loginUser = (name : string, email: string, isPaid: boolean=false)=>{
}


const result = addTwo(3)
console.log(result);

getUpper("hello")
signUpUser('piyush','piyush@gmail.com', false)
loginUser('p','p@gmail.com', true)


//How to handle the Two return types ----- UNION
// function getValue(myVal:number):string{
//   if(myVal > 5){
//     return true;
//   }
//   return "200 OK";
// }

//handle return type in Arrow Function 
const getHello = (name:string):string=>{
  return `Hello ${name}`;
}

//context switching is good in TypeScript 
//as we change the value of heroes to numbers 
//and hover in heroes TS treat that array as numbers array
const heroes = ['thor', 'spiderman', 'ironman']
heroes.map((hero):string=>{
  return `Hero is ${hero}`;
})

//void
function consoleError(err:string):void{
  console.log(err);
}
//never
//Function never returns (throws or loops forever)
function handleError(err:string):never{
  throw new Error(err);
}




export{}

