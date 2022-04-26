import React from 'react';

const SingleCharity = ({charity}) => {
    const {title,img} = charity
    return (
        <div className='col-md-3'>
            <div className="cart text-center rounded-1  bg-warning">
                <div className=''>
                    <img className='w-100' src={img} alt="" />
                </div>
                <button className='w-100 py-3  btn btn-warning'><span className='fw-bold'>{title}</span></button>
            </div>
        </div>
    );
};

export default SingleCharity;