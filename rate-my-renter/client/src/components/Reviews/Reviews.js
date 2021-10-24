import React from 'react'
import {useSelector} from 'react-redux';

import Review from './Review/Review'


function Reviews() {

    const reviews = useSelector((state) => state.reviews)

    console.log(reviews)

    return (
        <>
            <h1>Reviews</h1>
            <Review/>
            <Review />
        </>
    )
}

export default Reviews
