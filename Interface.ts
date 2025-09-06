interface User{
    readonly dbId : number,
    email : string,
    userId : number,
    googleId?: string,
    // startTrial : () => string
    startTrial(): string,
    getCoupon(coupanName : string,value: number) : number
}


//adding new property to existing interface
interface User{
  githubToken : string
}

//extending interface
interface Admin extends User{
  role : 'admin' | 'ta' | 'learner'
}


const Piyush: User =  {
  dbId : 1234,
  email : 'p@gmail.com',
  userId : 456,
  startTrial : () => {
    return "Trial started"
  },
  getCoupon : (name:'piyush',off:10) => {
    return 10  
  },
  githubToken : 'gisrg94jd49gj',
}
//changing the email value
Piyush.email = 'piyush@gmail.com'

const PiyushAdmin : Admin = {
  dbId : 1234,
  email : 'piyush.admin@gmail.com',
  userId : 444,
  startTrial : () => {
    return "Trial started"
  },
  getCoupon : (name:'piyush',off:10) => {
    return 10  
  },
  githubToken: '24098tuwr809gj42g',
  role : 'admin',
}



console.log(Piyush)
console.log(PiyushAdmin);


//Does interface is only used for objects --- NO
// 1. Objects
interface User {
  id: number
  name: string
}

const u: User = { id: 1, name: "Piyush" }  // ✅ valid

//2.Functions
interface AddFn {
  (a: number, b: number): number
}

const add: AddFn = (x, y) => x + y


// 3. Arrays/Indexable types
interface StringArray {
  [index: number]: string
}

const names: StringArray = ["A", "B", "C"]


// 4. Classes
interface Animal {
  name: string
  makeSound(): void
}

class Dog implements Animal {
  name = "Puppy"
  makeSound() {
    console.log("Woof!")
  }
}


//Extending other types 
interface Person {
  name: string
}
interface Employee extends Person {
  employeeId: number
}





export {}
