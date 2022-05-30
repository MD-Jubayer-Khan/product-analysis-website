import React from 'react';
import image from './image/multiple.png';
import './Home.css';

const Home = () => {
    return (
        <div className='container' style={{marginTop:'30px',width: '95%', margin:'auto'}}>
          <div className='content' style={{}}>
            <h3 style={{fontSize:'45px',color:'rgb(56, 53, 253)'}}>BD Electronics</h3>
            <p style={{color: 'gray', fontSize:'25px'}}>You can collect all kind of electronics product from here. such as TV, Laptop, mobile, Watch, I Mac</p>
            <button style={{border:'none', backgroundColor:'rgb(161, 211, 255)', color:'blue', fontSize:"15px", height:'50px', width:'150px', borderRadius:'6px'}}>Live Demo</button>
          </div> 
          <div>
            <img style={{height:"600px", width:'700px'}} src={image} alt="" />
          </div>
          <div>
            <h1>Our customer review</h1>
          </div>
        </div>
    );
};

export default Home;