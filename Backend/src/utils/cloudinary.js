import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
 
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //? console.log("File uploaded to Cloudinary")
        //? console.log("File src : ", response.secure_url);
        // once file is uploaded to cloudinary, delete the local file
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.log(error)
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteOnCloudinary = async (publicId) => {
    try {
        if(!publicId) return null;
        const response = await cloudinary.uploader.destroy(publicId)
        return response
    } catch (error) {
        console.log("Error while deleting from cloudinary : ", error)
        return null
    }
}

export {uploadOnCloudinary, deleteOnCloudinary}