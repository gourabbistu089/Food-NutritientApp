import Blog from "../models/blog.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudinary.js";

// Create a new blog
export const createBlog = asyncHandler(async (req, res) => {
    // Get the blog data from the request body
    const { title, excerpt, link, content } = req.body;

    if (!title || !excerpt || !link || !content) {
        throw new ApiError(400, "All fields are required");
    }

    // let imageUrl; // Declare imageUrl outside of the try block for scope

    // Upload image on Cloudinary
    try {
        const imageLocalPath = req.file?.path;
        if (!imageLocalPath) {
            throw new ApiError(400, "Image file is missing");
        }
        
        const imageUrl = await uploadOnCloudinary(imageLocalPath); // Assign the uploaded image URL to imageUrl

        const blog = await Blog.create({
            title,
            excerpt,
            link,
            content,
            imageUrl: imageUrl.url  // Ensure you're using imageUrl.url to store only the URL
        });

        res.status(201).json(new ApiResponse(201, "Blog created successfully", blog));

    } catch (error) {
        console.error(error);

        // Delete the uploaded image if blog creation fails
        if (imageUrl?.public_id) {
            await deleteOnCloudinary(imageUrl.public_id);
        }

        throw new ApiError(500, "Something went wrong while creating the blog");
    }
});

// Get all blogs
export const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(new ApiResponse(200, blogs, "Blogs fetched successfully"));
});

// Get a specific blog by ID
export const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }
    res.status(200).json(new ApiResponse(200, blog, "Blog fetched successfully"));
});
