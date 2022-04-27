import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div  className='  pt-5 pb-2 bg-dark text-light '>
            <FooterTop />
            <FooterBottom /> 
        </div>
    );
};

export default Footer;