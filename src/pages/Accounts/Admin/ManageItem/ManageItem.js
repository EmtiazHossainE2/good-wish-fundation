import React from 'react';
import { Link } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = ({ charity, index, handleDelete }) => {
    const { title, img, _id } = charity
    return (
        <div className='container'>
            <div className="row border">
                <div className="col-md-2  d-flex justify-content-center pb-1  align-items-center">
                    <span className='pe-5'>{index + 1}</span>
                </div>
                <div className="col-md-1 d-flex justify-content-center pb-1  align-items-center">
                    <h5>  <img className=' table-img ' src={img} alt="" /></h5>
                </div>
                <div className="col-md-5 d-flex justify-content-center pb-1  align-items-center">
                    <h5>{title}</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                    <button onClick={() => handleDelete(charity._id)} className='btn btn-danger'>Delete</button>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                    <Link to={'/manage-cause/' + _id}>
                        <button className='btn btn-success'>Update</button>
                    </Link>
                </div>
            </div>
            {/* <Table responsive="lg">
                <tbody>
                    <tr>
                        <td > {index +1} </td>
                        <td > <img className=' table-img ' src={img} alt="" /> </td>
                        <td ><h5>{title}</h5> </td>
                        <td ><button onClick={() => handleDelete(charity._id)} className='btn btn-danger'>Delete</button> </td>
                        <td ><button className='btn btn-success'>Update</button> </td>
                    </tr>
                </tbody>
            </Table> */}
        </div>
    );
};

export default ManageItem;