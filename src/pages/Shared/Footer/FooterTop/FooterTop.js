import React from 'react';
import './FooterTop.css'
import { Link } from 'react-router-dom';
import logo from '../../../../images/goodwish-logo-light.png'
import world from '../../../../images/footer-img.png'
import { FaArrowAltCircleRight, } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillInstagram, AiFillYoutube ,AiFillLinkedin} from 'react-icons/ai';

const FooterTop = () => {
    return (
        <div className='container  pb-5'>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className='mt-4 logo text-center'>
                        <Link className='text-decoration-none' to='/'>
                            <img className='w-50' src={logo} alt="" /> <br />
                            <h4 className='text-warning  py-4'>Worldwide Organisations</h4>
                            <img className='w-100 ' src={world} alt="" />
                        </Link>

                    </div>
                </div>
                <div className="col-md-8 col-sm-12 ">
                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className='important-link '>
                                <h2 className='text-warning'>About Us</h2>
                                <Link to='/help'>get help</Link>
                                <Link to='/faq'>read FAQs</Link>
                                <Link to='/home#services'>view all works</Link>
                                <Link to='/contact'>contact us</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className='important-link'>
                                <h2 className='text-warning'>Links</h2>
                                <Link to='/about'>  About Us</Link>
                                <Link to='/blog'> Read Blog</Link>
                                <Link to='/'> Partner </Link>
                                <Link to='/'>  Recent Causes</Link>
                                <Link to='/'>  Who we are ?</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className='important-link '>
                                <h2 className='text-warning'>  Social Media</h2>
                                <Link to='/facebook'><span className='text-warning pe-2 fs-5'><BsFacebook /></span> Facebook</Link>
                                <Link to='/twitter'><span className='text-warning pe-2 fs-5'><AiFillTwitterCircle /></span>Twitter</Link>
                                <Link to='/instagram'><span className='text-warning pe-2  fs-5'><AiFillInstagram /></span>Instagram</Link>
                                <Link to='/linkedin'><span className='text-warning pe-2  fs-5'><AiFillLinkedin /></span>Linkedin</Link>
                                <Link to='/youtube'><span className='text-warning pe-2  fs-5'><AiFillYoutube /></span>YouTube</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;