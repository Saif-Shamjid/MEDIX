import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./dataservices.json')
        .then(res=> res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <div className='container'>
            <h1>Our <span className='color-cp'>Services</span></h1>
            <div className="row g-3 mt-5">
            {
                services.map(service => <Service singleservice={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;