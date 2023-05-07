/***
 * Multiplica todos los elementos por dos
 */
// Forma 1
function multiplyElements(array) {
    console.log(array.map((e)=>{return e*2}));
}
multiplyElements([2,3])
//Forma simplificada
function multiplyElements(array) {
   console.log(array.map(e => e*2 ));
}
multiplyElements([2,3])

//Usando return
function multiplyElements(array) {
   return array.map((e) => { return e * 2 })
}
console.log(multiplyElements([2,3]));




/***
 * Transforma un Array de objetos a un Array de strings
 */
function getNames(array) {
    // Tu código aquí 👈
    console.log(Object.entries(array))
  }

let obj = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
    {
      name: 'Zulema',
      lastName: 'Vicente',
      age: 21
    },
  ]

  getNames(obj);
  