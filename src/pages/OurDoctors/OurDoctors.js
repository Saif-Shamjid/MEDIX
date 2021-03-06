import React, { useEffect, useState } from 'react';
import TopDoctor from '../../components/TopDoctor/TopDoctor';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('./doctorsbig.json')
        .then(res=> res.json())
        .then(data => {
            setDoctors(data);
        })
    },[])
    return (
        <div className='container mt-5'>
            <h1>Our <span className='color-cp'>Doctors</span></h1>
            <div className="row g-3 mt-5">
            {
                doctors.map(service => <TopDoctor singledoctor={service}></TopDoctor>)
            }
            </div>
        </div>
    );
};

export default OurDoctors;