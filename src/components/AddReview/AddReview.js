import React, { useContext } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const AddReview = () => {
    const {user} = useContext(AuthContext);
    const servId = useLoaderData();
    const navigate = useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault()
        const review = {
            servId: servId,
            displaName: user?.displayName,
            photoURL: user?.photoURL,
            rating: parseInt(event.target?.rating?.value) || 1,
            comment:  event.target.commentArea.value,
            userEmail:user?.email,
        }
        console.log(review);
        fetch('https://globaldeskserver-samiulalimseam.vercel.app/addreview',{
            method: 'POST',
            headers: {
                'content-type':'application/json' 
            },
            body: JSON.stringify(review)
        })
        setTimeout(() => {
            navigate(`/service/${servId}`)
        }, 2000);
        
    }
    return (
        <div className='border rounded shadow-lg w-96 m-auto'>
            <h2 className="text-2xl text-center">Write a Review</h2>
            <form onSubmit={handleSubmit} className="form m-3">
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Write your opinion here</span>
  </label>
  <textarea name='commentArea' type="text" placeholder="Type here" className="textarea textarea-bordered h-24" />
  <label className="label">
  </label>
  <div className="rating flex flex-col border p-2 my-2 rounded">
    <h3 className="text-sm">Give us a rating</h3>
  <div className="rating my-2 ">
  <input type="radio" name="rating" value={1} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" value={2} className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating" value={3} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" value={4} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" value={5} className="mask mask-star-2 bg-orange-400" />
</div>
  </div>
</div>
        <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;