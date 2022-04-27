import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const AddCauses = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='mt-5 py-5 container'>
            <h2 className='text-center pt-3 '>Add New Cause</h2>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            <div className="container w-75 mx-auto py-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
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
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" required />
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
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddCauses;