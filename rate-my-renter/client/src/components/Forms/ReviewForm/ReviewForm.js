import React, {useState} from 'react'

function ReviewForm() {

    let [reviewData, setReviewData] = useState({
        reviewText: "",
        priceRating: 3,
        propertyRating: 3,
        nicenessRating: 3,
        depositReturnRating: 3,
        hotness: 3,
        // Not sure if I need to include this if the database will automatically set the date
        // createdAt: {
        //     type: Date,
        //     default: new Date(),
        // }
    });

    const handleSubmit = () => {

    }


    return (
      <>
        <h2>Form Title</h2>
        <form>
          <label htmlFor="price-fairness-input">
            How fair is the rent? (between 1 and 5):
          </label>
          <br/>
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
          <br/>
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
          <br/>
          <label htmlFor="niceness-rating-input">
            How nice is your rentor? (between 1 and 5):
          </label>
          <br/>
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
          <br/>
          <label htmlFor="deposit-return-rating-input">
            How likely are they to actually return your security deposit?
            (between 1 and 5):
          </label>
          <br/>
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
          <br/>
          <label htmlFor="hotness-rating-input">
            How likely are they to actually return your security deposit?
            (between 1 and 5):
          </label>
          <br/>
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
          <br/>
          <label htmlFor="landlord-review-text" /> Let your landlord and others know how you really feel!
          <textarea
            id="landlord-review-text"
            name="landlord-review"
            cols="20"
            rows="10"
            value={reviewData.reviewText}
            onChange={(e) =>
              setReviewData({ ...reviewData, reviewText: e.target.value })}>
            </textarea>
            <br/>
          <button>Submit Review!</button>
        </form>
      </>
    );
}

export default ReviewForm
