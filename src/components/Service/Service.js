import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {index,picture,name,about} = props.singleservice;
    const url = `/service/${name}`
    return (
        <div className='col-md-4'>
            <div className="card border-success mb-3 p-3 rounded shadow-lg" >
                <div className="card-header d-flex justify-content-center">
                    <div className='service-img-container'>
                    <img className='img-fluid' src={picture} alt="" />
                    </div>
                </div>
                <div className="card-body">
                <h5 className="card-title color-cp">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer"><Link to={url} className='coustom-btn'>ReadMore</Link></div>
            </div>
        </div>
    );
};

export default Service;