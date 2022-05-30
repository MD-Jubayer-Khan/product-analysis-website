import React from 'react';

const Blogs = () => {
    return (
        <div style={{display:'flex', margin:'0 200px'}}>
            <div style={{border:'1px solid lightGray', width:'500px',height:'350px',marginRight:'30px', marginTop:'30px'}}>
            <h1>What is Context api?</h1>
            <p>The Context API is a component structure.The Context API can be used to share data with multiple components, without having to pass data through props manually. That means if we using Context api then we don't need to pass data through props drilling.</p>
        </div>
        <div style={{border:'1px solid lightGray', width:'500px',height:'350px', marginTop:'30px'}}>
            <h1>What is semantic tag?</h1>
            <p> Semantic tag is html tag that comes with html 5.semantic tag clearly describes its meaning to both the browser and the developer. For example article tag that indicate it contain text or article. This is both semantic and presentational because people know what article are, and browsers know how to display them.</p>
         </div>
        </div>
    );
};

export default Blogs;