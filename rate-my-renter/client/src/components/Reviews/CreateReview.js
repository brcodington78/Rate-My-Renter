import React, { useState } from 'react';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import axios from 'axios';

const CreateReview = () => {
    const [open, setOpen] = useState(false);

    return(
        <>
            <CreateReviewButton onClick={() => setOpen(true)}>
                Create Review
            </CreateReviewButton>
            <ReviewForm setOpen={setOpen} open={open} />
        </>
    )
};

export default CreateReview;

const CreateReviewButton = styled('div')`
    background-color: yellow;
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    &:hover {
        background-color: rgba(245, 226, 39, 0.8);
    }
`;

const ReviewForm = ({open, setOpen}) => {
    const [reviewText, setReviewText] = useState();

    const create = () => {
        axios({
            method: 'post',
            url: '/reviews',
            data: {
                reviewText: reviewText
            }
        });
        setOpen(false);
    };

    return(
        <Dialog open={open} onClose={() => setOpen(false)}>
            <p>Review Text:</p>
            <input type='text' onChange={(event) => setReviewText(event.target.value)}/>
            <CreateReviewButton onClick={() => create()}>
                Create
            </CreateReviewButton>
        </Dialog>
    );
};