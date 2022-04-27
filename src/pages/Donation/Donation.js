import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useSingleDetail from '../../hooks/useSingleDetail';
import './Donation.css'

const Donation = () => {
    const { detailsId } = useParams()
    const [singleDetail, setSingleDetail] = useSingleDetail(detailsId)
    const [user, loading, error] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            name: user.displayName,
            email: user.email,
            // service: service.name,
            // serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.number.value
        }
        axios.post('https://stark-beach-29284.herokuapp.com/order', order)
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

    return (
        <div className='py-5 donation-container'>
            <div className='pt-5 text-center'>
                <h2>Donation For {singleDetail.title} </h2>
                <div className='hr-style mx-auto  mb-3 '>
                </div>
            </div>
            <div className='my-5 text-center m-auto donation-form'>
                <form onSubmit={handlePlaceOrder}>
                    <input className='w-75 mb-3 py-2' type="text" value={user?.displayName} name='name' placeholder='Name' required disabled /> <br />
                    <input className='w-75 mb-3 py-2' type="email" value={user?.email} name='email' placeholder='Email' required disabled /> <br />
                    <input className='w-75 mb-3 py-2' type="text" value={singleDetail?.title} name='service' placeholder='service' required /> <br />
                    <input className='w-75 mb-3 py-2' type="number" name='money' placeholder='Enter Money ' required /> <br />
                    <input className='w-75 mb-3 py-2' type="text" name='address' placeholder='Address' required /> <br />
                    <input className='w-75 mb-3 py-2' type="number" name='number' placeholder='Contact Number' required /> <br />
                    <input className='w-75 btn btn-primary' type="submit" value="Donate Now"  />
                </form>
            </div>
        </div>
    );
};

export default Donation;