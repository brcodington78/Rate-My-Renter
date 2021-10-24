import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    reviewText: String,
    priceRating: Number,
    houseRating: Number,
    nicenessRating: Number,
    depositReturnRating: Number,
    hotnessRating: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review