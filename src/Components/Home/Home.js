import React from 'react';
import image from './image/multiple.png';
import './Home.css';
import useReviews from '../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const allReviews = reviews.slice(0, 3);
  const navigate = useNavigate();

  const showAllReviews =  () =>{
    navigate('/reviews')

  }

    return (
       <div>
          <div className='container' style={{marginTop:'30px',width: '95%', margin:'auto'}}>
          <div style={{marginTop:"80px"}}>
            <h3 style={{fontSize:'47px',color:'rgb(56, 53, 253)'}}><span style={{color:'black'}}>Welcome to </span> <br /> BD Electronics</h3>
            <p style={{color: 'gray', fontSize:'25px'}}>You can collect all kind of electronics product from here. such as TV, Laptop, mobile, Watch, I Mac</p>
            <button style={{border:'none', backgroundColor:'rgb(214, 236, 255)', color:'blue', fontSize:"15px", height:'50px', width:'150px', borderRadius:'6px', marginTop:'50px'}}>Live Demo</button>
          </div> 
          <div>
            <img style={{height:"600px", width:'700px', marginTop:'30px'}} src={image} alt="" />
          </div>
        </div>
        <div>
        <div style={{marginTop:"20px"}}>
            <h1>Our customer review</h1>
          </div> 
          {
            allReviews.map(review => <CustomerReview key={review.id} name={review.name} text={review.text} rating={review.ratings}></CustomerReview>)
          }
     <button onClick={showAllReviews} style={{border:'none', backgroundColor:'rgb(161, 211, 255)', color:'blue', fontSize:"20px", height:'40px', width:'150px', borderRadius:'6px', marginTop:'50px', marginBottom:'20px'}}>See all reviews</button>
        </div>
       </div>
    );
};

export default Home;