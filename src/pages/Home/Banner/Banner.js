import React from 'react';
import './Banner.css'

// banner 
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    return (
        <div className=''>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>Lamborghini Diablo</h3>
                        <p>Independent automobile repair shops  in the US may also achieve certification through manufacturer sponsored programs</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ford Raptor</h3>
                        <p>Permits motorists more flexibility in selecting where their car is serviced.</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Porsche 911 Carrera</h3>
                        <p>A choice in service centers to select from; service department at a car dealership</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;