import React, { useEffect, useState } from 'react';
import SingleCharity from '../SingleCharity/SingleCharity';
import './CharityList.css'
const CharityList = () => {
    const [allCharity , setAllCharity] = useState([])
    useEffect(() =>{
        fetch('CharityList.json')
        .then(res => res.json())
        .then(data => setAllCharity(data))
    },[])
    return (
        <div className='container'>
            <div className='text-center my-5'>
            <h1 className='text-warning '>Latest Causes</h1>
            <h5 className='fst-italic mt-3'>Organization set up to provide help and raise money for those in need</h5>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            </div>
            <div>
                <div className="row g-5">
                    {
                        allCharity.map(charity => <SingleCharity
                        key={charity.id}
                        charity={charity}
                        ></SingleCharity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CharityList;

