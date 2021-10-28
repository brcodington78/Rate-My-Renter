import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})



export const fetchReviews = () => API.get('/reviews');
export const createReview = (newReview) => API.post('/reviews', newReview);

export const login = (formData) => API.post('/user/login', formData);
export const signup = (formData) => API.post('/user/signup', formData)
