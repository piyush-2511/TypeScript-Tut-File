
//Primitives 

//Strings
let greetings: string = "Hello Piyush";
greetings.toLowerCase()
console.log(greetings);

//number
let userId : number = 123445

//boolean
let isLoggedIn : boolean = false 

//any - it is not recommended 
let hero;
function getHero() {
  // return 'thor'
  return true // it is returning the boolean but it has it return STRING
}

hero = getHero()
console.log(hero);



export {}
