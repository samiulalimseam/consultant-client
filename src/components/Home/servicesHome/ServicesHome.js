import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const ServicesHome = ({service}) => {
    const {title,description,img, rating} =service;
    
    return (
        <div className='m-auto'>
            <div className="card w-[360px]  h-64 bg-base-100 shadow-xl image-full m-auto my-3   md:mr-3 text-ellipsis">
  <figure className=''><img src={img} alt="Shoes" /></figure>
  <div className="card-body m-auto ">
    <h2 className="card-title">{title}</h2>
    <p className='truncate ... w-72 '>{description[0].details}</p>
    <div className="ratings flex">
        {
           [...Array(rating)].map(r=>{
            return <div className='m-1'> <BsFillStarFill></BsFillStarFill> </div>
           })
        }
    </div>
    <div className="card-actions justify-end">
      <Link to={`/service/${service._id}`} className="btn btn-primary">DETAILS</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesHome;