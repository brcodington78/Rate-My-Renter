import express from "express";
import {getReviews} from '../controllers/reviews.js'

const router = express.Router();

router.get("/", (req, res) => {
  res.send("THIS WORKS!");
});

export default router;
