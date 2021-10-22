import Review from '../models/review.js'

export const getReviews = async (req, res) => {
    try {
      const reviews = await Review.find();

      console.log(reviews)

      res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}
  

export const createReview = (req, res) => {
  res.send('Review Creation');
}
