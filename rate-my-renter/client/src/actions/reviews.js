import * as api from '../api';

//Action Creators

export const getReviews = () => async (dispatch) => {
    try {
        const {data} = await api.fetchReviews();

        dispatch({type: 'FETCH_ALL_REVIEWS', payload: data})
    } catch (error) {
        console.log(error.message);
    }



}

export const createReview = (newReview) => async (dispatch) => {
    try {
        const {data} = await api.createReview(newReview);

        dispatch({ type: "CREATE_REVIEW", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}