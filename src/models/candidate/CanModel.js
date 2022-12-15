
import CanSchema from "./CanSchema.js";
//create/Regiser  user 
export const insertCandidate = (obj) =>{
    return CanSchema(obj).save();
};

//Login user 
// export const findAUser = (obj) =>{
//     return UserS
// }