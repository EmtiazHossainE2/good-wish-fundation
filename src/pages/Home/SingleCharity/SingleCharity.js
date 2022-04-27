import React from 'react';
import { Link } from 'react-router-dom';

const SingleCharity = ({ charity }) => {
    const { title, img , _id , color } = charity
    return (
        <div className='col-md-3' >
            <div className="cart text-center rounded-1  bg-warning">
                <Link to={'/details/' + _id}>
                    <div className=''>
                        <img className='w-100' src={img} alt="" />
                    </div>
                    <button style={{backgroundColor : color , border: '0'}} className={`w-100 py-3 text-light ${color ? 'color' : 'btn btn-warning'}`}><span className='fw-bold fst-italic'>{title}</span></button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCharity;