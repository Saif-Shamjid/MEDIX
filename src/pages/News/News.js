import React, { useEffect, useState } from 'react';
import SingleNews from '../../components/SingleNews/SingleNews';

const News = () => {
    const [allnews, setAllnews] = useState([]);

    useEffect(()=>{
        fetch('./blogs.json')
        .then(res=> res.json())
        .then(data => {
            setAllnews(data);
        })
    },[])
    return (
        <div className='container mt-5'>
            <h1>All <span className='color-cp'>News</span></h1>
            <div className="row g-3 mt-5">
            {
                allnews.map(service => <SingleNews singleNews={service}></SingleNews>)
            }
            </div>
        </div>
    );
};

export default News;