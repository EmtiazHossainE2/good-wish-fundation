import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Donate = () => {
    const [user, loading, error] = useAuthState(auth);
    const [donations, setDonations] = useState([])
    useEffect(() => {
        const handleDonations = async () => {
            const email = user.email
            const url = `http://localhost:5000/donation?email=${email}`
            const { data } = await axios.get(url)
            setDonations(data)
        }
        handleDonations()
    }, [user])

    return (
        <div className='py-5'>
            <div className='pt-5 text-center'>
                <h2>Your Donation List</h2>
                <div className='hr-style mx-auto  mb-3 '>
                </div>
            </div>
            <div>
            <h2 className='text-center my-5'>This is Your donation {donations.length}</h2>
            </div>

        </div>
    );
};

export default Donate;