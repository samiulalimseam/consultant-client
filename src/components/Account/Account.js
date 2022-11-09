import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import {BiLogOutCircle} from 'react-icons/bi';
import ReviewTable from './ReviewTable';
import { Link } from 'react-router-dom';
import ServiceTable from './ServiceTable';


const Account = () => {
    const {user,setNewTitle,logOut} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    const [services,setServices] = useState([]);
setNewTitle('Account- Globaldesk')
    let count = 0;
    let count2 = 0;
    useEffect(()=>{
        fetch(`https://globaldeskserver-samiulalimseam.vercel.app/userreviews/${user?.email}`,{
            method: 'GET',
            headers: {
                authorization: `Baerer ${localStorage.getItem('globaldesk-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=> setReviews(data))
        .catch(err=>console.log(err))
        console.log(localStorage.getItem('globaldesk-token'));
    },[user])
    useEffect(()=>{
        fetch(`https://globaldeskserver-samiulalimseam.vercel.app/userservices/${user?.email}`)
        .then(res=>res.json())
        .then(data=> setServices(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='flex flex-col items-center justify-center '>

            <div className="flex  flex-col justify-center align-middle border  border-blue-600 w-96 p-5 rounded-xl  ">
                
                    <div className="logout flex m-auto">
                        <img alt='' className='rounded-full w-32' src={user?.photoURL} />
                        <div onClick={logOut} className="logout-btn cursor-pointer"><BiLogOutCircle></BiLogOutCircle></div>
                    
                    </div>
            <h2 className="text-3xl text-center">Account</h2>
            <h2 className="text-xl   rounded-sm p-1 mb-2">Name: {user?.displayName}</h2>
            <h2 className="text-sm p-1    rounded-sm mb-2">Email: {user?.email}</h2>

            </div>
            {/* buttons */}
        <div className="buttons">
            <Link to={`/publish`} className="h-12 p-2 rounded  bg-warning text-black hover:text-white btn-primary btn  my-3 mx-1">Add New Service</Link>
            <Link className="h-12 p-2 rounded  bg-blue-600 text-white btn-primary btn  my-3 mx-1">Write a Blog</Link>
            <Link className="h-12 p-2 rounded  bg-red-600 text-white btn-primary btn  my-3 mx-1">Purchase a service</Link>

        </div>
        <div className="reviews mt-3">
            <h3 className="text-xl text-center">Reviews:</h3>
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead className='bg-slate-100'>
      <tr className='w-screen md:max-w-3xl m-auto flex justify-between '>
        <th className='w-1/5 bg-blue-600 text-white'></th>
        <th className='w-2/5 bg-blue-600 text-white'>Service ID</th>
        <th className='w-2/5 bg-blue-600 text-white'>Comment</th>
        <th className='w-1/5 bg-blue-600 text-white'>Rating</th>
        <th className='w-1/5 bg-blue-600 text-white'>Actions</th>
      </tr>
    </thead>
    <tbody>
        {reviews.length>0?  reviews.map(review=><ReviewTable key={review._id} review={review} count={count=count+1}></ReviewTable>) : <h2 className='text-xl  m-3'>No reviews to Show</h2> }
        
      
     
    </tbody>
  </table>
</div>
        </div>
        
        <div className="services border rounded w-screen md:max-w-3xl m-auto mt-5 ">
            <h3 className="text-xl text-center w-full bg-blue-600 rounded-t-lg text-white h-10   ">Published Services</h3>
            {
                services.length>0 &&
                services.map(service=> <ServiceTable key={service._id} count={count2=count2+1} service={service}></ServiceTable>)
            }
            {
                services.length === 0 && <h3 className="text-xl">No published service to show</h3>
            }
        </div>

        <div className="services border rounded w-screen md:max-w-3xl m-auto mt-5 ">
            <h3 className="text-xl text-center w-full bg-blue-600 rounded-t-lg  text-white h-10   ">Enrolled Services</h3>
            <p className="text-xl m-2">No Data to Show</p>
        </div>

        </div>
    );
};

export default Account;