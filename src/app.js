const express = require('express');
const app = express();
const search = require("./routes/resource"); //import the route handler for GET /resource

app.use(search); //register the route handler for GET /resource

app.listen(8081); //listen on port 8081

console.log("Listening on port 8081");