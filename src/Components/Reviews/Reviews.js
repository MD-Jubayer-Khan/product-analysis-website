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
            <div style={{border:' 1px solid rgb(228, 221, 221)',
                  borderRadius: '8px', 
                  height:' 150px',
                  width: '600px',
                  padding: '20px',
                  margin: '30px 470px'}}>
                 <h3>Name: {props.name}</h3>
                 <p>Review: {props.text}</p>
                 <h4>Rating: {props.ratings}</h4>
            </div>
        )
    }
};

export default Reviews;