import React from 'react';
import image from './image/404-errors.png'

const NotFound = () => {
    return (
        <div style={{marginTop :"40px"}}>
            <h3>Page not found!!</h3>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;