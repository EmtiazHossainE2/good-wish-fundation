import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './AddCauses.css'
import { FaHandHoldingHeart } from 'react-icons/fa';



const AddCauses = () => {
    const [validated, setValidated] = useState(false);
    const [terms, setTerms] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='mt-5 py-5  add-container'>
            <h2 className='text-center pt-3 '>Add New Cause</h2>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            <div className="container w-75 mx-auto py-5 add-form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 fst-italic fw-bold">
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                            <Form.Label>Cause Title</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Causes Title"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid" className='fw-bold'>
                                    Please choose a title.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                            <Form.Label>Cause Date</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="date"
                                    placeholder="Date"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid" className='fw-bold' >
                                    Please choose date
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mt-4 fst-italic">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Enter description" required />
                            <Form.Control.Feedback type="invalid" className='fw-bold'>
                                Please Provide Description
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Image url" required />
                            <Form.Control.Feedback type="invalid" className='fw-bold' >
                                Please Provide Image
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className='d-flex '>
                        <div className='fw-bold text-primary mb-3'>
                            <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                            <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                        </div>
                    </div>
                    <Button disabled={!terms} variant="warning" type="submit" className=' fs-5'>
                        Submit <span className='ps-3 '><FaHandHoldingHeart/></span> 
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddCauses;