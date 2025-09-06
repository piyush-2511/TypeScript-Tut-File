// const superHeroes:[] = []

// //it will give error because the array is defined as empty array and we are trying to push a string into it
// superHeroes.push('Spiderman')
const superHeroes: string[] = []
const heroPower : number[] = []
// const heroPower : Array<number> = []

superHeroes.push('Spiderman')
heroPower.push(2)

type User = {
  name :string;
  isActive : boolean;
}

const allUsers : User[] = []
allUsers.push({name:'Piyush', isActive: false})

const MLModles : number[][] = [
  [255,255,255],
  [123,123,123],
  [34,45,56]
]
MLModles.push([12,34,45])



console.log(heroPower)
console.log(superHeroes)
console.log(MLModles);


export{}


