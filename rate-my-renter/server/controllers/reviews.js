import Mongoose from 'mongoose';
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
  

export const createReview = async (req, res) => {
    const review = req.body
    const landlordId = req.params
    const newReview = new Review(review)

    try {
      await newReview.save()

      res.status(201).json(newReview)
    }
    catch (error){
      res.status(409).json({ message: error.message})
    }
}

export const updateReview = async (req, res) => {
  try {
    console.log(req.params)
    const {id: _id} = req.params;
    const review = req.body;

    if(!Mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('No review with that id.');

    const updatedReview = await Review.findByIdAndUpdate(_id, review, {new: true});

    res.json(updatedReview)
  } catch (error) {
    console.log(error)
  }
}

export const deleteReview = async (req, res) => {
  try {
    console.log(req.params)
    const {id} = req.params;

    if(!Mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No review with that id');

    await Review.findByIdAndDelete(id)

    res.json({message: 'Review Successfully Deleted'})
  } catch (error) {
    console.log(error)
  }
}