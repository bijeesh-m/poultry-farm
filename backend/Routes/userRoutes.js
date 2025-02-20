const express=require("express")
const {signup,login, userHeader,addFarm,showUserFarms,addFeed,getFeedDetails,addMedicine,getMedicineDetails,addMortality,getMortalityDetails,addUserIssue} =require('../Controllers/userController')
const router=express.Router()
const cors = require('cors');
const userAuth=require("../Middleware/userAuth")

//POST
router.post('/signup', signup);
router.post('/login',login)
router.post('/addfarm/:userId',userAuth,addFarm)  // FARM ADD 
router.post('/addfeed/:userId',userAuth,addFeed)  // FEED ADD
router.post('/addmedicine/:userId',userAuth,addMedicine)  // ADD MEDICINE
router.post('/addmortality/:userId',userAuth,addMortality) // ADD MORTALITY
router.post('/helpAndSupport/:userId',userAuth,addUserIssue)  // ISSUE ENQUIRY




//GET 
router.get('/',userAuth,userHeader)
router.get('/showuserfarms/:userId',userAuth,showUserFarms)
router.get('/feedDetails/:userId/:farmId',userAuth,getFeedDetails)
router.get('/medicineDetails/:userId',userAuth,getMedicineDetails)
router.get('/mortalityDetails/:userId',userAuth,getMortalityDetails)



module.exports = router;