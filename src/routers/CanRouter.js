import express from "express";
import { insertCandidate } from "../models/candidate/CanModel.js";

const router = express.Router();

// Create/register router
router.post("/", async(req, res, next) =>{
    try{
        const user = await insertCandidate (req.body);
        console.log(user);

        if(Candidate?._id){
            return res.json({
                status: "success",
                message: "Candiate create successfully, you profile ready to login"
            });
        }
        res.json({
            status: "error",
            message: "Unable to create to loginpage",
        });

    } catch (error) {
    console.log(error.message);

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.code = 200;
      error.message =
        "There is aleray another user exist with the same email, Pelase rest passowrd to use or use different email to register";
    }
    next(error);
}
})

export default router;