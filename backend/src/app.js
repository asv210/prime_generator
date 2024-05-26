const express = require("express");
const cors=require("cors")  //CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
const bodyParser=require("body-parser"); //This middleware is used to parse the body of an HTTP request, which can contain JSON data or other types of data.
const primeRoute = require("../routes/PrimeRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api", primeRoute);

module.exports = app;
