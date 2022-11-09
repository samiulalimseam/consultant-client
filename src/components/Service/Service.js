import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Review from './Review';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../context/UserContext';

const Service = () => {
  const {setNewTitle,user} = useContext(AuthContext)
    const service = useLoaderData();
    const [reviews,setReviews] = useState([])
    setNewTitle(('Service- Globaldesk'))
    useEffect(()=>{
      fetch(`https://globaldeskserver-samiulalimseam.vercel.app/reviews/${service._id}`)
      .then(res=> res.json())
      .then(data=> setReviews(data))
      .catch(err=> console.log(err))

    },[])
    console.log(reviews);
    return (
        <div>
            <div className="flex flex-col md:flex-row">

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <PhotoProvider>
      <PhotoView key={service._id} src={service.img}>

    <img alt='' src={service.img} className="max-w-lm rounded-lg shadow-2xl" />
      </PhotoView>

    </PhotoProvider>
    <div>
      <h1 className="text-5xl font-bold">{service.title}</h1>
      <p className="py-6">{service.description[0].details}</p>
      <button className="btn btn-primary mb-2">Get Started</button>
      {
        service.description.map(des=>{
            return <div>
                <p className="info text-lg font-bold"> {`>>`} {des.info}</p>
                <p className="info text-lg font-light mb-3"> {`-`} {des.details}</p>
            </div>
        })
      }
    </div>
  </div>
</div>

<div className="review bg-slate-50 p-3 w-full md:w-1/4">
    <p className="text-2xl">Reviews</p>
    <p className="text-sm font-thin">(Click to expand)</p>
    <div>
        {
          reviews.map(review=><Review key={review._id} review={review}></Review>)
        }
        <Link to={`/addreview/${service._id}`} className="btn btn-sm btn-warning font-medium" >{user?.email && 'Write a Review' }{!user?.email && 'Loginto Write a Review' }</Link>
    </div>
</div>
            </div>

        </div>
    );
};

export default Service;