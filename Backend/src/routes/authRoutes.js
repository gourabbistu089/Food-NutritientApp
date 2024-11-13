import { Router } from "express";
import {registerUser,loginUser,logoutUser} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import verifyJWT from "../middleware/authMiddleware.js";

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
