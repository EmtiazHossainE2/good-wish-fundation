import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleDetail from '../../hooks/useSingleDetail';

const Donation = () => {
    const { detailsId } = useParams()
    const [singleDetail, setSingleDetail] = useSingleDetail(detailsId)


    return (
        <div className='py-5'>
            <div className='pt-5 text-center'>
                <h2>Donation Now {detailsId}</h2>
            </div>
        </div>
    );
};

export default Donation;