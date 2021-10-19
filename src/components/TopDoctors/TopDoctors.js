import React, { useEffect, useState } from 'react';
import TopDoctor from '../TopDoctor/TopDoctor';

const TopDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('./doctorssmall.json')
        .then(res=> res.json())
        .then(data => {
            setDoctors(data);
        })
    },[])
    return (
        <div className='container mt-5'>
            <h1>Top <span className='color-cp'>Doctors</span></h1>
            <div className="row g-3 mt-5">
            {
                doctors.map(service => <TopDoctor singledoctor={service}></TopDoctor>)
            }
            </div>
        </div>
    );

};

export default TopDoctors;