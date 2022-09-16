import React from 'react';
import Product from './Product';

const Home = ()=>{
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                    <img src="/assets/bgGreyHome.jpg" className="card-img" alt="Background Not available" height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASONE ARRIVAL</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL LATEST TRENDS</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
            </div>
            <Product/>
        </div>
        
    );
}

export default Home;