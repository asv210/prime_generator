const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //here i am not using .env file as it will get ignore while push code on github(open source).
    await mongoose.connect(
      "mongodb+srv://apar1223:apar@cluster0.zoohkwk.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected successfully"); //Know about database successfully connected or not
  } catch (error) {
    console.log("Error connecting to the database", error);
    process.exit(1);
  }
};

module.exports = connectDB;
