import React from 'react';
import './CustomerReview.css'

const CustomerReview = ({name, text, rating}) => {
    return (
        <div className='review-container'>
          <h3>Name: {name}</h3>
          <p>Review: {text}</p>
          <h4>Rating: {rating}</h4>
        </div>
    );
};

export default CustomerReview;