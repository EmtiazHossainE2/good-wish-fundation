import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiDonateHeart } from 'react-icons/bi';
import useSingleDetail from '../../hooks/useSingleDetail';

const Details = () => {
    const { detailsId } = useParams()
    const [singleDetail] = useSingleDetail(detailsId)

    return (
        <div className='mt-5 py-5'>
            <div className="row ">
                <div className="col-lg-6 order-lg-1 order-2 d-flex pt-5  justify-content-center">
                    <div className='container mx-3'>
                        <h2 className='text-warning text-center '>{singleDetail?.title}</h2>
                        {/* <hr className='w-25 mx-auto border border-warning' /> */}
                        <div className='hr-style mx-auto pt-1 '>
                            <hr />
                        </div>
                        <div className="   pt-3 text-justify" style={{ textAlign: 'justify' }}>
                            <p>{singleDetail?.description}</p>
                            <p>Penalties would be enforced if someone illegally camping on city property refused services such as overnight shelter, according to the proposed ordinance. Shelter space would need to be available in order for the ordinance to be enforced.</p>
                            <p>The ordinance would also allow the city to remove unlawfully stored personal property, after providing necessary notice.

                                The ordinance "seeks to establish a compassionate approach to assist the unhoused residents of our city by first offering human service, including available shelter, and only causing the penalty provisions to be enforced when available shelter is refused," language in the ordinance states.</p>
                        </div>
                        <div className='my-5'>
                            <Link to={'/donate/' + detailsId}>
                                <button className=' py-2 fs-5 btn btn-warning'>Donate Here <span className='fs-3'><BiDonateHeart /></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-first pt-3 d-flex  justify-content-center align-items-center text-center">
                    <div className='container px-5'>
                        <img className='w-100 ' src={singleDetail?.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;