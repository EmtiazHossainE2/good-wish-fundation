import React from 'react';
import './Banner.css'

// banner 
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    return (
        <div className=''>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="custom-caption">
                            <h1>Stand Up For <br /> The <span className='text-warning'>Deprived</span></h1>
                            <p className='py-3'> Supporting the mission, inspiring others with  <br /> the same interests to get involved</p>
                            <button className='btn btn-warning fw-bold'>View More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <div className="custom-caption">
                            <h1 className='fw-bold'> Fight For <br /> Right <span className='text-warning'>Causes</span></h1>
                            <p className='py-3 fw-bold'> The different ways to help  and those who've <br /> already stepped up for the cause.</p>
                            <button className='btn btn-warning fw-bold'>View More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="custom-caption">
                            <h1>Help The  <br />  <span className='text-warning'>Children </span> in need</h1>
                            <p className='py-3'> The donation process, positioning the organization <br />  as a reliable and caring partner.</p>
                            <button className='btn btn-warning fw-bold'>View More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;