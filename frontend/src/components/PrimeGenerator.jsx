// src/PrimeGenerator.js

import React, { useState } from "react";
import axios from "axios";

const PrimeGenerator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [method, setMethod] = useState("basic");
  const [primes, setPrimes] = useState([]);
  const [records, setRecords] = useState([]);


    const generatePrimes = async (e) => {
    e.preventDefault();
    const startInt = parseInt(start, 10);
    const endInt = parseInt(end, 10);

    if (start === "" || end === "") {
      alert("Please enter start and end values");
            setStart("");
            setEnd("");
      return ;
    }
    if (startInt >= endInt) {
      alert("Please enter a valid start and end value");
            setStart("");
            setEnd("");
      return; 
    }

    try {
      const response = await axios.post("http://localhost:5000/api/postPrime", {
        start: startInt,
        end: endInt,
        method,
      });

      setStart("");
      setEnd("");
      setPrimes(response.data.primes);
    } catch (error) {
      console.error("Error generating primes:", error);
      alert("Failed to generate primes. Please try again.");
    }
  }
  
  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getPrime");
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
      alert(
        "An error occurred while fetching records. Please try again later."
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Prime Number Generator</h1>
      <div className="mb-4 p-4  border rounded-lg bg-gray-100">
        <div>
          <label className="block mb-2 text-black">
            Start:
            <input
              type="number"
              value={start}
              placeholder="enter starting value"
              onChange={(e) => setStart(e.target.value)}
              className="block text-white w-full p-2 border rounded-lg mt-1"
            />
          </label>
        </div>
        <div>
          <label className="block mb-2 text-black">
            End:
            <input
              type="number"
              value={end}
              placeholder="enter ending value"
              onChange={(e) => setEnd(e.target.value)}
              className="block text-white  w-full p-2 border rounded-lg mt-1"
            />
          </label>
        </div>
        <div>
          <label className="block mb-2 text-black">
            Method:
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="block w-full p-2 border rounded-lg mt-1 text-white"
            >
              <option value="basic">Basic</option>
              <option value="optimistic">Optimistic</option>
              <option value="sieve">Sieve</option>
            </select>
          </label>
        </div>
        <div>
          <button
            onClick={generatePrimes}
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg"
          >
            Generate Primes
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-4">Primes</h2>
      <div className="p-4 border rounded-lg bg-gray-100 text-black h-[300px] overflow-x-auto">
        {primes?.length > 0 ? primes.join(", ") : "No primes generated yet."}
      </div>
      <button
        onClick={fetchRecords}
        className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg"
      >
        Fetch Records
      </button>

      <h2 className="text-2xl font-bold mt-4">Records</h2>
      <div className="h-[200px] overflow-x-auto">
      <ul className="p-4 border rounded-lg bg-gray-100 text-black">
        {records.map((record,index) => (
          <li key={record._id} className="mb-2">
            <p className="text-lg font-semibold">{index+1}</p>
            
            {record.start}-{record.end} ({record.algorithm}): {record.numsPrime}{" "}
            primes in {record.timeElapsed}ms at {record.timeStamp}
            <hr />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default PrimeGenerator;
