import React from 'react';
import './Home.css';

const Home = (props) => {
    // console.log('home data', props);
    return (
        <div className='d-home'>
            <div>
                <img style={{ height: '100px', width: '60px', marginRight: '20px' }} src="https://www.mobiledokan.com/wp-content/uploads/2023/03/Realme-C55.jpg" alt='' />
            </div>
            <div style={{ marginRight: '20px' }} >
                <h4>I PHone</h4>
                <p>$ 1000</p>
            </div>
            <div>
                <button onClick={()=>props.addToCarHandler({name: 'iphone', price: 1000})}>Add To Cart</button>
                <button onClick={()=>props.RemoveToCartHandler()}>Remove To Cart</button>
            </div>
            <div style={{ marginLeft: '100px' }}>{props.cardData.length}</div>
        </div>
    );
};

export default Home;