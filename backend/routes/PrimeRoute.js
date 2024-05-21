const express =require("express")
const router=express.Router()
const PostPrimeController =require("../controller/PostPrimeController")
const GetPrimeController =require("../controller/GetPrimeController")

router.post("/postPrime",PostPrimeController);  // post prime number route call whenever /postPrime route will be calling
router.get("/getPrime",GetPrimeController);     // get prime number route call whenever /getPrime route will be calling

module.exports=router
