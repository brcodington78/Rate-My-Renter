import axios from 'axios';

const url = 'http://localhose:5000/reviews'

export const fetchReviews = () => axios.get(url);