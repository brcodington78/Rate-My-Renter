import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createReview} from '../../../actions/reviews';

function ReviewForm() {

    const dispatch = useDispatch();

    let [reviewData, setReviewData] = useState({
        reviewText: "",
        priceRating: 3,
        propertyRating: 3,
        nicenessRating: 3,
        depositReturnRating: 3,
        hotnessRating: 3,
        // Not sure if I need to include this if the database will automatically set the date
        // createdAt: {
        //     type: Date,
        //     default: new Date(),
        // }
    });

    const handleSubmit = (e) => {
            e.preventDefault();

            dispatch(createReview(reviewData));
    }

    const clear = () => {

    }


    return (
      <>
        <h2>Form Title</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="price-fairness-input">
            How fair is the rent? (between 1 and 5):
          </label>
          <br />
          <input
            type="range"
            id="price-fairness-input"
            name="price-fairness"
            min="1"
            max="5"
            value={reviewData.priceRating}
            onChange={(e) =>
              setReviewData({ ...reviewData, priceRating: e.target.value })
            }
          />
          <br />
          <label htmlFor="property-rating-input">
            What is the quality of the property you rent? (between 1 and 5):
          </label>
          <br />
          <input
            type="range"
            id="property-rating-input"
            name="property-rating"
            min="1"
            max="5"
            value={reviewData.propertyRating}
            onChange={(e) =>
              setReviewData({ ...reviewData, propertyRating: e.target.value })
            }
          />
          <br />
          <label htmlFor="niceness-rating-input">
            How nice is your rentor? (between 1 and 5):
          </label>
          <br />
          <input
            type="range"
            id="niceness-rating-input"
            name="niceness-rating"
            min="1"
            max="5"
            value={reviewData.nicenessRating}
            onChange={(e) =>
              setReviewData({ ...reviewData, nicenessRating: e.target.value })
            }
          />
          <br />
          <label htmlFor="deposit-return-rating-input">
            How likely are they to actually return your security deposit?
            (between 1 and 5):
          </label>
          <br />
          <input
            type="range"
            id="deposit-return-rating-input"
            name="deposit-return-rating"
            min="1"
            max="5"
            value={reviewData.depositReturnRating}
            onChange={(e) =>
              setReviewData({
                ...reviewData,
                depositReturnRating: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="hotness-rating-input">
            Would you fuck your landlord? (between 1 and 5):
          </label>
          <br />
          <input
            type="range"
            id="hotness-rating-input"
            name="hotness-rating"
            min="1"
            max="5"
            value={reviewData.hotnessRating}
            onChange={(e) =>
              setReviewData({
                ...reviewData,
                hotnessRating: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="landlord-review-text"> Let your landlord and others
          know how you really feel! </label>
          <br/>
          <textarea
            id="landlord-review-text"
            name="landlord-review"
            cols="20"
            rows="10"
            value={reviewData.reviewText}
            onChange={(e) =>
              setReviewData({ ...reviewData, reviewText: e.target.value })
            }
          ></textarea>
          <br />
          <button>Submit Review!</button>
          <button onClick={clear}>Clear Form</button>
        </form>
      </>
    );
}

export default ReviewForm
