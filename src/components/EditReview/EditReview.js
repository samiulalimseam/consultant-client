import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EditReview = () => {
    const [review,setreview] = useState({})
    const reviewId = useLoaderData();
    useEffect(()=>{ fetch(`http://localhost:5000/getreviews/${reviewId}`)
        .then(res=>res.json())
        .then(data=> setreview(data))
        .catch(err=> console.error(err))
        
    },[])
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form= e.target;
        const newReview= {
            comment: form.comment.value,
            rating: form.rating.value
        }
        fetch(`http://localhost:5000/editreview/${reviewId}`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)

        }).then(res=>{
            toast('Updated');
            console.log(res)
        })
        .catch(err=>console.error(err))
    }

    return (
        <div>
            <h1 className="text-xl font0light text-center">Edit your Review</h1>
            <form onSubmit={handleSubmit} className='w-96 h-56 border rounded shadow-lg mx-auto my-2' >
            
                <input  name='comment'  type="text" defaultValue={review.comment} className="input input-bordered input-warning w-full max-w-xs form-control p-2 m-2" />
                <input  name='rating' min="1" max="5" type="number" defaultValue={review.rating} className="input input-bordered input-warning w-full max-w-xs form-control p-2 m-2" /> 
                <button  type='submit' className="btn btn-warning m-2">Update</button>
            
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default EditReview;