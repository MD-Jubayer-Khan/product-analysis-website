import React from 'react';

const CustomerReview = ({name, text, rating}) => {
    return (
        <div style={{border:' 1px solid rgb(228, 221, 221)',
           height:' 150px',
           width: '600px',
           borderRadius: '8px', 
           padding: '20px',
           margin: '30px 470px'}}>
          <h3>Name: {name}</h3>
          <p>Review: {text}</p>
          <h4>Rating: {rating}</h4>
        </div>
    );
};

export default CustomerReview;