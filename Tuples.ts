// const user: (string|number)[] = [1,'PK'];
let Tuser: (string|number|boolean)[] = [1,'PK'];

Tuser = [true, 123, 'pk']

let rgb : readonly[number,number,number] = [255,255,255]
//rgb.push(1234) // it will give an error because rgb is a readonly array
console.log(rgb);

// in TS 
// at the runtime the tupke is converted to the array 
// so the array methods can be used on the tuple also

type TuppleUser = [number, string]
const newUser : TuppleUser = [1,'Piyush']

// newUser[1] = 1234 // it will give an error because the second element should be a string
newUser[1] = 'Kumar'
newUser.push(1234) // it will not give an error because at the runtime the tuple is converted to the array

console.log(newUser);



export {}