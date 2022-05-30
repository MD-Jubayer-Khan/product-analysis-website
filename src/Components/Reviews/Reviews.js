import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return ( 
        <div> 
        {
            review.map(r => <User name={r.name} text={r.text} ratings={r.ratings}></User>)
        }
      
      </div>
    );
    function User (props){
        return(
            <div className='review-container'>
                 <h3>Name: {props.name}</h3>
                 <p>Review: {props.text}</p>
                 <h4>Rating: {props.ratings}</h4>
            </div>
        )
    }
};

export default Reviews;