import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:6000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});



export const fetchReviews = () => API.get('/reviews');
export const createReview = (newReview) => API.post('/reviews', newReview);

export const login = (formData) => API.post('/user/login', formData);
export const signup = (formData) => API.post('/user/signup', formData)
