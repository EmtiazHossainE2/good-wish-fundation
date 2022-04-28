import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import useSingleDetail from '../../../../hooks/useSingleDetail';

const UpdateCause = () => {
    const navigate = useNavigate()
    const { detailsId } = useParams()
    const [singleDetail, setSingleDetail] = useSingleDetail(detailsId)

    const handleSubmit = (event) => {
        event.preventDefault()
        const causeInfo = {
            title: event.target.title.value,
            date: event.target.date.value,
            description: event.target.description.value,
            img: event.target.img.value
        }

        if (causeInfo.title === '' || causeInfo.date === '' || causeInfo.description === '' || causeInfo.img === '') {
            toast.error(`Please update All `, { id: "update" });
        }
        else {
            const url = `https://good-wish-server.herokuapp.com/service/${detailsId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(causeInfo),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            toast.success(`Thank you for Update `, { id: "update1" });
            event.target.reset()
            navigate('/manage-cause')
        }
    }
    return (
        <div className='mt-5 py-5  add-container'>
            <h2 className='text-center pt-3 '> {singleDetail.title} Update Here</h2>
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
                                    name='title'
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
                                    name='date'
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
                            <Form.Control as="textarea" rows={3} type="text" name='description' placeholder="Enter description" required />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name='img' placeholder="Image url" required />

                        </Form.Group>
                    </Row>
                    <Button variant="warning" type="submit" className=' fs-5'>
                        Submit <span className='ps-3 '><FaHandHoldingHeart /></span>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateCause;