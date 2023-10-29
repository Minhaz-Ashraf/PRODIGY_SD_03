import express from 'express';
import {  deleteController, detailController, getallController, getbyidController, updateController } from '../controller/formController.js';


const router = express.Router();

// save
router.post("/addcontact", detailController);

//get all contact
router.get("/allcontact", getallController )

// get contact to update
router.get("/contact/:id", getbyidController)
//update contacts

router.put("/updatecontact/:id", updateController )


//delete contacts
router.delete("/deletecontact/:id", deleteController)

export default  router;