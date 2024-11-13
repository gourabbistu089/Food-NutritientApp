import jwt from "jsonwebtoken";
import {User} from "../models/user.model.js";
import {ApiError} from '../utils/ApiError.js'
import {asyncHandler} from '../utils/asyncHandler.js'

 const verifyJWT = asyncHandler(async (req, res, next) => {
    const  token = req.cookies.accessToken || req.body.accessToken;
    if(!token){
        throw new ApiError(401, "Unauthorized")
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded._id).select("-password -refreshToken");
        if(!user){
            throw new ApiError(401, "Unauthorized user")
        }
        req.user = user;
        next();//transfer control to the next middleware or controller
    } catch (error) {
        throw new ApiError(401, "Invalid Access token")
    }
})

export default verifyJWT