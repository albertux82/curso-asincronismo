/*** 
 * Función Callback
 * Una función de callback es una función que se pasa a otra función como un argumento,
 * que luego se invoca dentro de la función externa para completar algún tipo de rutinao acción.
 * https://developer.mozilla.org/es/docs/Glossary/Callback_function
 */
function sum(num1, num2){
    return num1 + num2;
}
function calc(num1, num2, callback){
    return callback(num1, num2);
}
console.log(calc(3,2, sum)); 

/*** */
setTimeout(function(){
    console.log('Hola Javascript')
}, 1500);


/*** */
function greeting(name){
    console.log(`Hola ${name}`)
}
setTimeout(greeting, 2000, 'Valentina');