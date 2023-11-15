const checkAge = require('./checkAge');
const prompt = require('prompt-sync')();

let inputeAge = prompt("Enter your Age: "); 

checkAge(inputeAge)
.then( // Will fetch if the Promise is Successful or Resolve.  
    resolve => {
        console.log(resolve);
    })
.catch( // Will fetch if the Promise is Failed or Rejected. 
    reject => 
    {
        console.log(reject);
    });