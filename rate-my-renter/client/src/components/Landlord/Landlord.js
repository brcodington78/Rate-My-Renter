import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Landlord() {
    let {id} = useParams();

    console.log({id})
    return (
        <div>
            Hello
        </div>
    )
}

export default Landlord
