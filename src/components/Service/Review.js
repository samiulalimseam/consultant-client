import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const Review = ({review}) => {
    const {comment,displaName,rating,photoURL} = review;
    return (
        <div className='  bg-blue-500 rounded text-white mx-auto my-1'>
            <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title  font-light">
    <div className="flex">

        {
           [...Array(rating)].map(r=>{
            return <div className='m-1  text-yellow-300'> <BsFillStarFill></BsFillStarFill> </div>
           })}
    </div>
    {comment}
  
  </div>

  <div className="collapse-content"> 
  <div className="flex ">
           <img src={photoURL} alt="" className="w-6 rounded-full m-1" />
    <p className='m-1'>{displaName}</p>
  </div>
  </div>
</div>
        </div>
    );
};

export default Review;