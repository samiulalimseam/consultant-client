import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillPencilFill,BsXCircleFill} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ReviewTable = ({review,count}) => {
    const {comment,servId,rating,_id} = review;

    

    const handleDelete = ()=> {
        let permission = window.confirm('Delete Review?');
        if(permission){
            fetch(`https://globaldeskserver-samiulalimseam.vercel.app/review/delete/${_id}`,{
            method:'POST',
            headers: {
                'content-type': 'aplication/json'
            },
            body:JSON.stringify(_id)
        }).then(res=> {
            console.log(res)
            toast("Deleted");
        })
        .catch(err=>console.error(err))
        }
    }
    return (
        <div className='w-screen md:max-w-3xl m-auto'>
            <tr className='flex   '>
        <th className='border w-1/7 rounded-none'>{count}</th>
        <td className='border w-2/4  overflow-auto '>{servId}</td>
        <td className='border w-2/4  overflow-auto '>{comment}</td>
        <td className='border w-1/4 rounded-none'>{rating}</td>
        <td className='border w-1/4 rounded-none flex justify-center '>
            <Link className=' p-1 border rounded m-1' to={`/reviews/edit/${_id}`}><BsFillPencilFill></BsFillPencilFill></Link>
            <Link onClick={handleDelete} className='text-red-600 border p-1 rounded m-1' ><BsXCircleFill></BsXCircleFill> </Link>
        </td>
      </tr>
      <ToastContainer></ToastContainer>
        </div>
    );
};

export default ReviewTable;