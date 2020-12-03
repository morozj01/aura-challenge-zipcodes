const express = require("express");
const router = express.Router();
const {handler} = require("../utils/index");

//route handler for GET /resource
router.get("/resource",(req,res)=>{

    //define the event object based on incoming HTTP request
    const event = {
        httpMethod:req.method,
        path:req.path,
        headers:req.headers,
        queryStringParameters:req.query
    };

    //call the lambda function
    handler(event).then(resp=>{
        res.send({message:"success",size:resp.length,data:resp}); //successful response
        
    }).catch(err=>{
        res.status(400).send("Error fetching data"); //some error occured
        console.log(`Request recieved from ${req.ip} generated error:\n${JSON.stringify(err,null,4)}`);
    });

    //log all requests that come in
    console.log(`Request recieved from ${req.ip} \n Request:${JSON.stringify(event,null,4)}`);
})

module.exports = router;