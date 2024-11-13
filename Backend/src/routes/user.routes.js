import { Router } from "express";
import {registerUser,loginUser,logoutUser} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/register",
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImg', maxCount: 1 }
    ]),
    registerUser
);
router.post("/login", loginUser);
router.get("/logout", verifyJWT, logoutUser);

export default router;
