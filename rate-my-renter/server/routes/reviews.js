import express from "express";
import auth from '../middleware/auth.js';
import {getReviews, createReview} from '../controllers/reviews.js';

const router = express.Router();

router.get("/", getReviews);
router.post('/', auth, createReview);

export default router;
