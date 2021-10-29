import React from 'react';
import styled from 'styled-components';

function ReviewCard({info}) {

    const keysToTitle = {
        "Review": info.reviewText, 
        "Price": info.priceRating, 
        "Home": info.houseRating,
        "Friendliness": info.nicenessRating,
        "Deposit Return": info.depositReturnRating,
        "Hotness": info.hotnessRating
    }

    return (
        <ReviewContainer>
            {Object.keys(keysToTitle).map(title => {
                return <RatingContainer title={title} value={keysToTitle[title]}/>
            })}
        </ReviewContainer>
    )
}

export default ReviewCard;

const RatingContainer = ({title, value}) => {
    return(
        <Wrapper>
            <Type>{title}:&nbsp;&nbsp;</Type>
            <Rating>{value}</Rating>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 50%;
    padding: 10px 0;
`;

const Type = styled('div')`
    font-weight: bold;
`;

const Rating = styled('div')`
    font-size: 24px;
`;

const ReviewContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    background-color: pink;
    width: 500px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 30px 0;
`;