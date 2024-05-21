const PrimeStore = require("../model/primeStoreModel");

const GetPrimeController= async (req, res) => {
  try {
    const records = await PrimeStore.find({});//get the prime records
    res.json(records);// send the data as response
  } catch (error) {
    console.error("Error fetching prime records:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching prime records" });
  }
};
module.exports=GetPrimeController