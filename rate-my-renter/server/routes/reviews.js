import express from "express";
import auth from '../middleware/auth.js';
import {getReviews, createReview, updateReview, deleteReview, getLandLordReviews} from '../controllers/reviews.js';

const router = express.Router();

router.get("/", getReviews);
// put auth as the second parament for post when testing is done
router.post('/', createReview);
router.patch('/:id', updateReview)
router.delete('/:id', deleteReview)
router.get('/landlord-reviews', getLandLordReviews)

export default router;
