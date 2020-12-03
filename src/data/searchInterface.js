let data = require("./data.json"); //import the dataset into memory on start up

//this function is run on every zipCode object in the dataset
function filterBasedOnParams(queryParameters,zipCode){
    //return true only if ALL parameters included in the queryParameters object match the zipCode object 
    let match = true;

    //Regular expressions to perform partial matches on zip and primary_city fields
    if(queryParameters.zip && !zipCode.zip.match(new RegExp(queryParameters.zip))) match=false;
    if(queryParameters.primary_city && !zipCode.primary_city.match(new RegExp(queryParameters.primary_city,"i"))) match=false;

    //Match on longitude and latitude if search value is within .5 of the zipcode being evaluated. 
    //.5 was chosen arbitrarily and can be increased or decreased if needed.
    if(queryParameters.latitude && !(Math.abs(parseInt(queryParameters.latitude)-parseInt(zipCode.latitude))<.5)) match=false;
    if(queryParameters.longitude && !(Math.abs(parseInt(queryParameters.longitude)-parseInt(zipCode.longitude))<.5)) match=false;

    //The rest of the fields are simple filters that look for an exact match
    if(queryParameters.type && queryParameters.type != zipCode.type) match=false;       
    if(queryParameters.acceptable_cities && queryParameters.acceptable_cities != zipCode.acceptable_cities) match=false;
    if(queryParameters.unacceptable_cities && queryParameters.unacceptable_cities != zipCode.unacceptable_cities) match=false;
    if(queryParameters.state && queryParameters.state != zipCode.state) match=false;
    if(queryParameters.county && queryParameters.county != zipCode.county) match=false;
    if(queryParameters.timezone && queryParameters.timezone != zipCode.timezone) match=false;
    if(queryParameters.area_codes && queryParameters.area_codes != zipCode.area_codes) match=false;
    if(queryParameters.country && queryParameters.country != zipCode.country) match=false;
    if(queryParameters.estimated_population && queryParameters.estimated_population != zipCode.estimated_population) match=false;

    return match; 
}

//simulated database interface - pass in an object of query parameters, get back result set
module.exports = (queryParameters)=>{
    let response = data.filter(zipCode=>{
        return filterBasedOnParams(queryParameters,zipCode) //true if this zipcode object matches on all query parameters, false if not       
    }).slice(0,100); //return the first 100 results (or less) to simulate database paging
    return response; 
}