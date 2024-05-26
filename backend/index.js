const app = require("./src/app");
const connectDB = require("./config/db");

connectDB(); //connection with database
// connecting database with specific port where server is running
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});



// Single Responsibility: each module has a single responsibility.

// Open/Closed: If new prime algorithms are needed, they can be added to primeAlgorithms.js without 
// modifying existing algorithms.

// Liskov Substitution: The functions are substitutable and extendable without breaking functionality.

// Interface Segregation: Each module has only the necessary functionality.

// Dependency Inversion: The app.js and index.js files depend on abstractions (the imported modules), 
// not on the details of their implementation.
