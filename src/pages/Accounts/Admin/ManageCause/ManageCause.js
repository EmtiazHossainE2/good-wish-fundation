import React from 'react';
import useCharityList from '../../../../hooks/useCharityList';
import ManageItem from '../ManageItem/ManageItem';

const ManageCause = () => {
    const [allCharity, setAllCharity] = useCharityList()

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this ?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const exists = allCharity.filter(charity => charity._id !== id)
                    setAllCharity(exists)
                })

        }
    }
    return (
        <div className='mt-5 py-5 '>
            <h2 className='text-center '>Manage All Causes</h2>
            <div className='hr-style mx-auto  mb-3 '>
            </div>
            <div className='container py-3  text-light' style={{backgroundColor : '#ff9f43'}}>
                <div className="row ">
                    <div className="col-md-2  d-flex justify-content-center pb-1  align-items-center">
                        <span className='pe-5'>List</span>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center pb-1  align-items-center">
                        <h5> Image</h5>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center pb-1  align-items-center">
                        <h5>Title</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                        <h5>Delete</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                        <h5>Update</h5>
                    </div>
                </div>
            </div>
            <div>
                {
                    allCharity.map((charity, index) => <ManageItem
                        key={charity._id}
                        index={index}
                        charity={charity}
                        handleDelete={handleDelete}
                    ></ManageItem>)
                }
            </div>
            {/* <div className='text-center'>
                {
                    allCharity.map(charity => <div key={charity._id}>
                        <h5>{charity.title} <button onClick={() => handleDelete(charity._id)}>Delete</button></h5>

                    </div>)
                }
            </div> */}
        </div>
    );
};

export default ManageCause;