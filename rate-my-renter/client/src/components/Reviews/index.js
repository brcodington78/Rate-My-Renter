import React from 'react'
import {useSelector} from 'react-redux';
import Review from './ReviewCard'
import ReviewForm from '../Forms/ReviewForm/ReviewForm';

function Reviews() {

    const reviews = useSelector((state) => state.reviews)

    return (
        <>
            <h1>Reviews</h1>
            <ReviewForm />
            {reviews.map(review => {
                return <Review info={review} />
            })}
        </>
    )
}

export default Reviews
