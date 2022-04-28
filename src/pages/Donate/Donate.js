import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import DonateDetails from '../DonateDetails/DonateDetails';

const Donate = () => {
    const [user, loading, error] = useAuthState(auth);
    const [donations, setDonations] = useState([])
    useEffect(() => {
        const handleDonations = async () => {
            const email = user.email
            const url = `https://good-wish-server.herokuapp.com/donation?email=${email}`
            const { data } = await axios.get(url)
            setDonations(data)
        }
        handleDonations()
    }, [user])



    return (
        <div className='py-5'>
            <div className='pt-5 text-center'>
                <h1>Donation List</h1>
                <div className='hr-style mx-auto  mb-3 '>
                </div>
                <h4>Name : {user?.displayName} </h4>
                <h5 className='pt-3'>Email : <span className='fw-bold text-warning '>{user?.email}</span></h5>

            </div>
            <div>
                <h2 className='text-center my-5'> Total Donation {donations?.length}</h2>
            </div>
            <div className="container pb-3">
                <div className="row  bg-dark text-light p-3">
                    <div className="col-md-1  d-flex justify-content-center pb-2  align-items-center">
                        <h5 className='pe-5'>List</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                        <h5> Charity</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                        <h5>Contact Number</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                        <h5>Date</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                        <h5>Your Address</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-2  align-items-center">
                        <h5>Money</h5>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center pb-2  align-items-center">
                        <h5>Update</h5>
                    </div>
                </div>
            </div>
            <div>
                {
                    donations.map((myDonation, index) => <DonateDetails
                        key={myDonation._id}
                        index={index}
                        myDonation={myDonation}
                    ></DonateDetails>)
                }
            </div>

        </div>
    );
};

export default Donate;