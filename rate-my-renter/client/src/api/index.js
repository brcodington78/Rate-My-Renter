import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        console.log("token", JSON.parse(localStorage.getItem("profile")).token);
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        console.log("req.headers", req.headers.authorization)
    }

    return req;
});



export const fetchReviews = () => API.get('/reviews');
export const createReview = (newReview) => API.post('/reviews', newReview);

export const login = (formData) => API.post('/user/login', formData);
export const signup = (formData) => API.post('/user/signup', formData)
