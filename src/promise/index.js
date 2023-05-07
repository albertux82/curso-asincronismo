

const promise = new Promise(function(resolve, reject){
    resolve('Hello!');
});


/*** */
const cows = 12;
const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} on the farm`);
    }
    else{
        reject(`We have no enougth caws on the farm`);        
    }
});

countCows.then( (result) =>{
    console.log(result)
}).catch( (error) => {
    console.log(error)
}).finally(()=> console.log('Finally'));



/*** Crea una función de delay que soporte asincronismo */
function delay(time, message) {
    return new Promise(function (resolve, reject){
      setTimeout(() => {
        resolve(message);
      }, time);
  
    });
}

delay(2000,`Hello World after 2 seconds`)
.then((message) => console.log(message))