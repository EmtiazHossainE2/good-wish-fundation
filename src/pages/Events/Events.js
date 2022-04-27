import React from 'react';
import img from '../../images/construction.png'

const Events = () => {
    return (
        <div className='py-5'>
            <div className='pt-5 text-center'>
                <h2>Events page </h2>
                <div className='text-center '>
                    <img className='w-75 mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Events;