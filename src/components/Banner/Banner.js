import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='banner'>

                <div className="content">
                    <h1>
                    GIVING CHILDREN
                    <br />
                    <span>THE CARE THEY DESERVE</span>
                    </h1>
                    <p>The bold mission of America’s MEDITEX Companies is to bring an end to the burdens of disease, in all its forms.</p>
                    <Link to="/home">APPOINTMENT</Link>
                </div>  

                <img className='banner-image' src="./415-removebg-preview.png" alt="" />

                </div>
        </div>
    );
};

export default Banner;