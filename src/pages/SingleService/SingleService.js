import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Service from '../../components/Service/Service';

const SingleService = () => {
    const {serviceId} = useParams();
    
    return (
        <div className='cos-login-container row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <div className="card border-success mb-3 p-3 rounded shadow-lg" >
                <div className="card-header d-flex justify-content-center">
                    <div className='service-img-container'>
                    <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/2491/2491314.png" alt="" />
                    </div>
                </div>
                <div className="card-body">
                <h5 className="card-title color-cp">{serviceId}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer"><Link to='/' className='coustom-btn'>GoHome</Link></div>
            </div>
            </div>
        </div>
    );
};

export default SingleService;