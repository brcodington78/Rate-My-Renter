
//takes in reviews as state because the reviews reducer will only handle the reviews slice of state

export default (reviews = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_REVIEWS':
            return action.payload;
        case 'CREATE_REVIEW':
            return [...reviews, action.payload];
        default:
            return reviews
    }
}