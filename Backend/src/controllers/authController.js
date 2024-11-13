// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { User } from "../models/user.model.js";
// import { deleteOnCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";
// import jwt from "jsonwebtoken";

// // helper function to generate access and refresh token
// const generateAccessAndRefreshToken = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     if (!user) throw new ApiError(404, "User not found");

//     const accessToken = user.generateAccessToken();
//     const refreshToken = user.generateRefreshToken();
//     user.refreshToken = refreshToken;

//     // Save refresh token in the user model
//     await user.save({ validateBeforeSave: false });
    
//     return { accessToken, refreshToken };
//   } catch (error) {
//     console.log("Error while generating access and refresh token : ", error);
//     throw new ApiError(500, "Something went wrong while generating tokens");
//   }
// };

// // Register new user
// const registerUser = asyncHandler(async (req, res) => {
//   const { username, email, password, fullname } = req.body;

//   // 1. Validate input fields (400 Bad Request if missing fields)
//   if ([fullname, username, email, password].some((field) => field?.trim() === "")) {
//     throw new ApiError(400, "All fields are required"); // Changed from 404 to 400
//   }

//   // 2. Check if user already exists (409 Conflict if found)
//   const existedUser = await User.findOne({
//     $or: [{ username }, { email }],
//   });
//   if (existedUser) {
//     throw new ApiError(409, "User already exists"); // Changed from 404 to 409
//   }

//   // Handle avatar and cover image uploads
//   const avatarLocalPath = req?.files?.avatar[0]?.path;
//   const coverLocalPath = req?.files?.coverImg[0]?.path;

//   if (!avatarLocalPath) {
//     throw new ApiError(400, "Avatar file is missing"); // Changed from 404 to 400
//   }

//   // Upload avatar to Cloudinary
//   const avatar = await uploadOnCloudinary(avatarLocalPath);

//   let coverImg = "";
//   if (coverLocalPath) {
//     // Upload cover image if provided
//     coverImg = await uploadOnCloudinary(coverLocalPath);
//   }

//   try {
//     // 3. Create the new user
//     const newUser = await User.create({
//       fullname,
//       avatar: avatar.url,
//       coverImg: coverImg?.url || "", // If no cover image, default to empty string
//       email,
//       password,
//       username: username.toLowerCase(),
//     });

//     // 4. Fetch the created user without password and refresh token
//     const createdUser = await User.findById(newUser._id).select(
//       "-password -refreshToken"
//     );

//     // If the created user is not found
//     if (!createdUser) {
//       throw new ApiError(500, "Something went wrong while registering the user");
//     }

//     // 5. Send the response with the newly created user
//     return res.status(201).json(new ApiResponse(201, createdUser, "User registered successfully"));
    
//   } catch (error) {
//     console.log("User creation failed");
    
//     // Delete the uploaded avatar and cover image if user creation fails
//     if (avatar?.public_id) await deleteOnCloudinary(avatar.public_id); // Added ?. for safety
//     if (coverImg?.public_id) await deleteOnCloudinary(coverImg.public_id); // Added ?. for safety
    
//     throw new ApiError(500, error.message);
//   }
// });

// // User login handler
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // 1. Check if email and password are provided (400 Bad Request)
//   if (!email || !password) {
//     throw new ApiError(400, "All fields are required"); // Changed from 404 to 400
//   }

//   // 2. Find user by email and include password in the query
//   const user = await User.findOne({ email }).select("+password");
//   if (!user) {
//     throw new ApiError(404, "User not found");
//   }

//   // 3. Validate the provided password
//   const isPasswordCorrect = await user.isPasswordCorrect(password);
//   if (!isPasswordCorrect) {
//     throw new ApiError(401, "Password is incorrect"); // Changed from 404 to 401
//   }

//   // 4. Generate access and refresh tokens
//   const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

//   // 5. Get logged-in user details without password and refresh token
//   const loggedUser = await User.findById(user._id).select("-password -refreshToken");

//   // 6. Set tokens in cookies
//   const options = {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production', // Use secure flag only in production
//   };
//   return res
//     .status(200)
//     .cookie("accessToken", accessToken, options)
//     .cookie("refreshToken", refreshToken, options)
//     .json(new ApiResponse(200, { user: loggedUser, accessToken, refreshToken }, "User logged in successfully"));
// });

// // Logout user and clear cookies
// const logoutUser = asyncHandler(async (req, res) => {
//   await User.findByIdAndUpdate(req.user._id, {
//     $set: {
//       refreshToken: null, // Changed undefined to null for cookie clearing
//     },
//   }, { new: true });

//   const options = {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production', // Use secure flag only in production
//   };

//   return res
//     .status(200)
//     .clearCookie("accessToken", options)
//     .clearCookie("refreshToken", options)
//     .json(new ApiResponse(200, null, "User logged out successfully"));
// });

// // Refresh access token
// const refreshAccessToken = asyncHandler(async (req, res) => {
//   const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  
//   if (!incomingRefreshToken) {
//     throw new ApiError(400, "Refresh token is required"); // Changed error message
//   }

//   try {
//     // Verify the incoming refresh token
//     const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
//     const user = await User.findById(decodedToken?._id);

//     // Check if user exists and token matches
//     if (!user || user.refreshToken !== incomingRefreshToken) {
//       throw new ApiError(401, "Invalid or expired refresh token");
//     }

//     // Generate new access and refresh tokens
//     const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshToken(user._id);

//     // Set new tokens in cookies
//     const options = {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Use secure flag only in production
//     };




//     return res
//       .status(200)
//       .cookie("accessToken", accessToken, options)
//       .cookie("refreshToken", newRefreshToken, options)
//       .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Tokens refreshed successfully"));
//   } catch (error) {
//     throw new ApiError(500, error.message);
//   }
// });

// const changeCurrentUserPassword = asyncHandler(async (req, res) => 
// {

//   const{oldpassword,newpassword}=req.body;
//   if(!oldpassword || !newpassword){
//     throw new ApiError(400, "All fields are required");
//   }
//   const user = await User.findById(req.user?._id);;
//   const isPasswordValidate = await user.isPasswordCorrect(oldpassword);
//   if(!isPasswordValidate){
//     throw new ApiError(400, "Old password is incorrect");
//   }

//   user.password = newpassword;
//   await user.save({validateBeforeSave: false});

//   res.status(200).json(new ApiResponse(200, {user}, "Password Changed Successfully"));



// });

// const getCurrentUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user?._id).select("-password -refreshToken");
//   if (!user) {
//     throw new ApiError(404, "User not found");
//   }
//   res.status(200).json(new ApiResponse(200, { user }, "User fetched successfully"));
// });

// const updateAccountDetails = asyncHandler(async (req, res) => {
//   const { fullname, username, email } = req.body;
//   if (!fullname || !username || !email) {
//     throw new ApiError(400, "All fields are required");
//   }

//   // const user = await User.findById(req.user?._id);
//   // if (!user) {
//   //   throw new ApiError(404, "User not found");
//   // }

//   // user.fullname = fullname;
//   // user.username = username;
//   // user.email = email;
//   // await user.save({ validateBeforeSave: false });

//   const user = User.findByIdAndUpdate(req.user?._id, {
//     $set: {
//       fullname,
//       username,
//       email,
//     },
//   }, { new: true })
//   .select("-password -refreshToken")
//   return res.status(200).json(new ApiResponse(200, user , "Account details updated successfully"));
//   })

// const updateUserAvatar = asyncHandler(async (req, res) => {
//   // access avata local path 
//   const avatarLocalPath = req?.file?.path;
//   if (!avatarLocalPath) {
//     throw new ApiError(400, "Avatar file is missing");
//   }
//   // Upload avatar to Cloudinary

//   const avatar = await uploadOnCloudinary(avatarLocalPath);

//   if(!avatar.url){
//     throw new ApiError(400, "Avatar file is missing");
//   }

//   const user = User.findByIdAndUpdate(req.user?._id, {
//     $set: {
//       avatar: avatar.url,
//     },
//   }, { new: true })
//   .select("-password -refreshToken")
//   return res.status(200).json(new ApiResponse(200, user , "Avatar updated successfully"));
// });

// const updateUserCoverImage = asyncHandler(async (req, res) => {
//   // access coverImg local path
//   const coverImgLocalPath = req?.file?.path;
//   if (!coverImgLocalPath) {
//     throw new ApiError(400, "Cover image file is missing"); // Changed from 404 to 400
//   }

//   // Upload cover image to Cloudinary
//   const coverImg = await uploadOnCloudinary(coverImgLocalPath);

//   if(!coverImg.url){
//     throw new ApiError(400, "Cover image file is missing");
//   }

//   const user = User.findByIdAndUpdate(req.user?._id, {
//     $set: {
//       coverImg: coverImg.url,
//     },
//   }, { new: true })
//   .select("-password -refreshToken")
//   return res.status(200).json(new ApiResponse(200, user , "Cover image updated successfully"));
// });

// export { registerUser, loginUser, refreshAccessToken, logoutUser 
// , changeCurrentUserPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage
// };
