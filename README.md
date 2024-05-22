# Prime Number Generation Application

This application generates prime numbers within a specified range using different algorithms. It includes both a web interface and a command-line interface for user input. The backend server handles requests and interacts with a MongoDB database to store and retrieve data.

## Table of Contents
- [Frontend](#frontend)
- [Command-Line Interface (CLI)](#command-line-interface-cli)
- [Backend](#backend)
- [Project Structure](#project-structure)
- [Unit Testing](#unit-testing)
- [Running the Application](#running-the-application)

## Frontend

The frontend is built using React and Tailwind CSS to create a user-friendly interface. Users can input the start and end of the range, select the algorithm, and view the results. Additionally, users can fetch all previous data records.Also it is a responsive UI design. We have to install packages for the first time only.

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features
- Two input fields for the start and end of the range.
- A method selection dropdown.
- A button to generate prime numbers.
- A button to fetch all previous records, displaying timestamp, range, time elapsed, algorithm chosen, and the number of primes.

## Command-Line Interface (CLI)
The CLI allows users to input data directly via the command line and retrieve prime numbers by calling the backend API using Axios. This feature is in clientInput folder.We have to install packages for the first time only.
```bash
cd clientInput
npm install
node input.js "startNumber" "endNumber" "methodName"
```

## Backend
The backend is built with Express.js and uses the following packages:
- mongoose for connecting to MongoDB.
- cors for handling cross-origin resource sharing.
- body-parser for parsing incoming request bodies.
- jest for unit testing.
- nodemon for automatically restarting the server upon code changes.
  
The server runs on port 5000.<br>
We have to install packages for the first time only.

### Endpoints
- POST /api/postPrime: Generates prime numbers based on the input and stores the data.
- GET /api/getPrime: Retrieves all previously stored data.

### Running the Backend
```bash
cd backend
npm install
npm start
```

## Project Structure
- frontend: Contains the React application and Tailwind CSS for the UI.
- frontend/src: Contains all the components, pages.. etc.
- clientInput: Contains the CLI tool for taking inputs from the command line and interacting with the backend API.
- backend: Contains backend part of the application in which various subfolders are there and files.
- backend/index.js: Contains connection with database and request divert to routes.
- backend/helper.test.js: Contains all  the test cases for this project. 
- backend/utils: Contains algorithms for generating prime numbers.
- backend/controller: Contains the main logic for posting and getting data from the database.
- backend/model: Contains the schema for prime number records.
- backend/routes: Contains the route definitions for the API.

## Unit Testing
Unit tests are created using Jest, specifically testing the helper functions involved in prime number generation.

### Running Unit Tests
```bash
cd backend
npx jest helper.test.js --coverage
```

## Running the Application
#### 1. Frontend:<br>
- Navigate to the frontend directory and start the development server.
```bash
cd frontend
npm run dev
```

#### 2. CLI:<br>
- Navigate to clientInput folder. Use the CLI tool to generate prime numbers.
```bash
node input.js "startNumber" "endNumber" "methodName"
```

#### 3. Backend:<br>
- Navigate to backend folder. Start the backend server.
```bash
npm start
```

#### 4. Unit Testing:<br>
- Navigate to backend folder. Run the unit tests to ensure the functionality is working correctly.
```bash
npx jest helper.test.js --coverage
```
