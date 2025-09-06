let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name : string;
  id : number
}

type Admin ={ 
  username : string;
  id : number
}

let piyush : User | Admin = {
  name : 'piyush',
  id : 3344
}
console.log(piyush)
piyush = {
  username : 'piyush123',
  id : 3344
}
console.log(piyush)

function getDBId(id :number | string) {
  //making some API calls 

  // it will give an error because id can be number also
  // id.toLowerCase() 

  //NARROWING
  if (typeof id === 'string'){
    id.toLowerCase()
  }

  console.log('DB id is :', id)
}

//ARRAY OF UNION TYPES

// it will give an error because the array is of number type only
// const data : number[] = [1,2,3,"hello"] 

// const data : number[] | string[] = ['1',2,3]

const data : (number | string)[] = [1,2,3,"hello"]
data.push(4)

let pi : 3.14 = 3.14;
// pi = 3.15 // it will give an error because we have assigned a literal value to pi
// let pi : 3.14 | 3.15 = 3.14







export {}


