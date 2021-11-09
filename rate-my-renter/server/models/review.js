import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    reviewText: String,
    priceRating: Number,
    houseRating: Number,
    nicenessRating: Number,
    depositReturnRating: Number,
    hotnessRating: Number,
    creatorId: { type: String, required: true },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

export default Review