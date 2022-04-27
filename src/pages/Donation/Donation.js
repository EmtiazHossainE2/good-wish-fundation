import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useSingleDetail from '../../hooks/useSingleDetail';
import { FaHandHoldingHeart } from 'react-icons/fa';
import './Donation.css'

const Donation = () => {
    const { detailsId } = useParams()
    const [singleDetail] = useSingleDetail(detailsId)
    const [user, loading, error] = useAuthState(auth);
    const [terms, setTerms] = useState(false)

    const handleDonate = event => {
        event.preventDefault()
        const donation = {
            name: user.displayName,
            email: user.email,
            charity: singleDetail.title,
            detailsId: detailsId,
            money: event.target.money.value,
            date: event.target.date.value,
            address: event.target.address.value,
            phone: event.target.number.value
        }
        if (donation.email === '' || donation.charity === '' || donation.money === '' || donation.date === '' || donation.address === '') {
            toast.error(`Please Add All Info `, { id: "info" });
        }
        else {
            axios.post('http://localhost:5000/donation', donation)
                .then(response => {
                    const { data } = response
                    if (data.insertedId) {
                        toast.success(`Thank you for Donation `, { id: "donation" });
                        event.target.reset()
                    }
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }

    return (
        <div className='py-5 donation-container'>
            <div className='pt-5 text-center'>
                <h2>Donation For {singleDetail.title} </h2>
                <div className='hr-style mx-auto  mb-3 '>
                </div>
            </div>
            <div className='my-5 text-center m-auto donation-form'>
                <Form noValidate onSubmit={handleDonate}>
                    <input className='w-75 mb-3 py-2' type="text" value={user?.displayName} name='name' placeholder='Name' required disabled /> <br />
                    <input className='w-75 mb-3 py-2' type="email" value={user?.email} name='email' placeholder='Email' required disabled /> <br />
                    <input className='w-75 mb-3 py-2' type="text" value={singleDetail?.title} name='charity' placeholder='Charity' required /> <br />
                    <input className='w-75 mb-3 py-2' type="text" name='address' placeholder='Address' required /> <br />
                    <input className='w-75 mb-3 py-2' type="number" name='number' placeholder='Contact Number' required /> <br />

                    <div className=" w-75 mx-auto custom-style">
                        <input className=' mb-3 py-2 ' type="number" name='money' placeholder='Enter Money ' required />
                        <input className=' mb-3 py-2' type="date" name='date' placeholder='Date ' required />
                    </div>

                    <div className='d-flex w-75 mx-auto'>
                        <div className='fw-bold text-primary mb-3'>
                            <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                            <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                        </div>
                    </div>
                    <Button disabled={!terms} variant="warning" type="submit" className='w-75 fs-5'>
                        Donate <span className='ps-3 '><FaHandHoldingHeart /></span>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Donation;