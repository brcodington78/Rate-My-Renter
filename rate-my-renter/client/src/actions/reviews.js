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