import React  from 'react';
import useCharityList from '../../../hooks/useCharityList';
import SingleCharity from '../SingleCharity/SingleCharity';
import './CharityList.css'
const CharityList = () => {
    const [allCharity ] = useCharityList()
    
    return (
        <div className='container mb-5'>
            <div className='text-center mt-3 mb-5'>
            <h1 className='text-warning '>Latest Causes</h1>
            <h5 className='fst-italic mt-3'>Organization set up to provide help and raise money for those in need</h5>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            </div>
            <div>
                <div className="row g-5">
                    {
                        allCharity.map(charity => <SingleCharity
                        key={charity._id}
                        charity={charity}
                        ></SingleCharity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CharityList;

