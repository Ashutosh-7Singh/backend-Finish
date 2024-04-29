// import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";

// const router = Router();

// router.route("/register").post((req, res) => {
//     registerUser(req, res);
// });

// export default router;


import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { registerUser } from "../controllers/user.controller.js";
const router=Router()
router.route("/register").post(
    upload.fields([
{
    name:"avatar",
    maxCount:1
},{
    name:"coverImage",
    maxCount:1
}
    ]),
    registerUser)
export default router; 