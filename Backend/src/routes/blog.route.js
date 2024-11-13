import express from "express";
import { createBlog, getAllBlogs, getBlogById } from "../controllers/blog.controller.js";
import { upload } from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/', upload.single('image'), createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

export default router;