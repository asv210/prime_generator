const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")  //CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
const bodyParser=require("body-parser"); //This middleware is used to parse the body of an HTTP request, which can contain JSON data or other types of data.
const PrimeRoute =require("./routes/PrimeRoute") //imported routes from other file
const app=express();
app.use(cors());
app.use(bodyParser.json());

//connection with mongoDB database
const connectDB = async () => {
    try {
        //here i am not using .env file as it will get ignore while push code on github(open source).
        await mongoose.connect('mongodb+srv://apar1223:apar@cluster0.zoohkwk.mongodb.net/', { //link of mongodb atlas database
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully'); //Know about database successfully connected or not
    } catch (error) {
        console.log('Error connecting to the database', error);
    }
};

connectDB(); //calling connection function

//routes
app.use("/api",PrimeRoute)

//connecting database with specific port where server is running
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})
