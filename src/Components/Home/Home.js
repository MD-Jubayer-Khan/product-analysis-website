import React from 'react';
import image from './image/multiple.png';
import './Home.css';

const Home = () => {
    return (
       <div>
          <div className='container' style={{marginTop:'30px',width: '95%', margin:'auto'}}>
          <div className='content' style={{marginTop:"50px"}}>
            <h3 style={{fontSize:'45px',color:'rgb(56, 53, 253)'}}>BD Electronics</h3>
            <p style={{color: 'gray', fontSize:'25px'}}>You can collect all kind of electronics product from here. such as TV, Laptop, mobile, Watch, I Mac</p>
            <button style={{border:'none', backgroundColor:'rgb(214, 236, 255)', color:'blue', fontSize:"15px", height:'50px', width:'150px', borderRadius:'6px', marginTop:'50px', marginRight:'200px'}}>Live Demo</button>
          </div> 
          <div>
            <img style={{height:"600px", width:'700px', marginTop:'30px'}} src={image} alt="" />
          </div>
        </div>
        <div>
        <div style={{height:'280px', marginTop:"20px"}}>
            <h1>Our customer review</h1>
          </div>
          <button style={{border:'none', backgroundColor:'rgb(161, 211, 255)', color:'blue', fontSize:"20px", height:'40px', width:'150px', borderRadius:'6px', marginTop:'50px', marginBottom:'20px'}}>See all reviews</button>
        </div>
       </div>
    );
};

export default Home;