import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FaHandHoldingHeart } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import './AddCauses.css'



const AddCauses = () => {
    const [terms, setTerms] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const causeInfo = {
            title: event.target.causeTitle.value,
            date: event.target.causeDate.value,
            description: event.target.causeDescription.value,
            img: event.target.causeImg.value
        }

        if (causeInfo.title === '' || causeInfo.date === '' || causeInfo.description === '' || causeInfo.img === '') {
            toast.error(`Please add all info `, { id: "info" });
        }
        else {
            axios.post('https://good-wish-server.herokuapp.com/service/', causeInfo)
                .then(response => {
                    console.log(response);
                    toast.success(`Thank you for adding New cause `, { id: "add" });
                    event.target.reset()
                })

                .catch(function (error) {
                    console.log(error);
                });
        }

    };
    return (
        <div className='mt-5 py-5  add-container'>
            <h2 className='text-center pt-3 '>Add New Cause</h2>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            <div className="container w-75 mx-auto py-5 add-form">
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3 fst-italic fw-bold">
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                            <Form.Label>Cause Title</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name='causeTitle'
                                    placeholder="Causes Title"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                            <Form.Label>Cause Date</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="date"
                                    name='causeDate'
                                    placeholder="Date"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mt-4 fst-italic">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" name='causeDescription' placeholder="Enter description" required />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name='causeImg' placeholder="Image url" required />

                        </Form.Group>
                    </Row>
                    <div className='d-flex '>
                        <div className='fw-bold text-primary mb-3'>
                            <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                            <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                        </div>
                    </div>
                    <Button disabled={!terms} variant="warning" type="submit" className=' fs-5'>
                        Submit <span className='ps-3 '><FaHandHoldingHeart /></span>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddCauses;