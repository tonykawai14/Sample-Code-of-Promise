let checkAge = async (inputAge) => {
    return await new Promise((resolve, reject) => 
    {
      let receivingAge = setTimeout(() => 
      {
            if(inputAge < 18)
            {
                resolve('Minor');
            }
            else if(inputAge >= 18 && inputAge < 60)
            {
                resolve('Adult');
            }
            else
            {
                resolve('Senior');
            }
        }, 3000); // This will return a resolve parameter to our promise. within 3sec.

      setTimeout(() => {
        clearTimeout(receivingAge);
        reject(`The time has timed out, did not meet the expectation`);
      }, 5000); // This is to make a reject callback within 5sec only. 
      
    });
  };
  
  module.exports = checkAge; // this will export the checkAge Function

