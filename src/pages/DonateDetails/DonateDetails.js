import React from 'react';

const DonateDetails = ({index,myDonation}) => {
    const {date,charity,money,address,phone} = myDonation
    return (
        <div className='container'>
            <div className="row border">
                <div className="col-md-1  d-flex justify-content-center pb-2  align-items-center">
                    <span className='pe-5'>{index + 1}</span>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                    <h5> {charity}</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                    <h5>{phone}</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                    <h5>{date}</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                    <h5>{address}</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                    <h5>${money}</h5>
                </div>
                <div className="col-md-1 d-flex justify-content-center pb-2  align-items-center">
                    <button  className='btn btn-warning'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default DonateDetails;