//Simulated database interface
const searchInterface = require("../data/searchInterface");

// lambda-like handler function
module.exports.handler = async event => {
  
  //check for httpMethod, this can be extended to check for headers, path or etc...
  if(event.httpMethod == "GET"){
    try{
      //a synchronous operation since the database is simulated - in a real lambda function this would use "await" syntax
      let results = searchInterface(event.queryStringParameters); 
      return results; 
    }catch(e){
      return Promise.reject(e);
    }
  } else return Promise.reject("Invalid event method");
};
