import React from 'react';
import { Link } from 'react-router-dom';

const SingleCharity = ({ charity }) => {
    const { title, img } = charity
    return (
        <div className='col-md-3'>
            <div className="cart text-center rounded-1  bg-warning">
                <Link to='/detail'>
                    <div className=''>
                        <img className='w-100' src={img} alt="" />
                    </div>
                    <button className='w-100 py-3  btn btn-warning'><span className='fw-bold fst-italic'>{title}</span></button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCharity;