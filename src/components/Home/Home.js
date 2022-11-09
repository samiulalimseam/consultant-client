import './Home.css'

import React, { useCallback, useContext, useEffect, useState } from 'react';
import ServicesHome from './servicesHome/ServicesHome';
import Testomonials from './Testomonials/Testomonials';
import CTA from './CTA/CTA';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
  const {setNewTitle} = useContext(AuthContext)
    const [services,setServices] = useState([])
    setNewTitle('Home- Globaldesk')
        useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res=> res.json())
         .then(data=>setServices(data))
         .catch(err=> console.log(err))
        },[])





    return (
        <div className=''>
           <div class="carousel-inner relative w-full overflow-hidden mb-3">
    <div class="carousel-item active flex flex-col w-full ">
      <div className=' rounded-t-lg '>
      <img
        src="https://www.idp.com/medias/Study-Abroad.png?context=bWFzdGVyfGltYWdlc3wxMDQ1Njk2fGltYWdlL3BuZ3xoMzcvaDk3LzEwOTEyNjIwMjE2MzUwL1N0dWR5IEFicm9hZC5wbmd8NTk5Mjc5NWVhNGFlOTE2ZDc1NzVkOTdiNWYwNmRlMTZlOTQ2N2RlODNjZjg0YTRlYTJiY2E4NDE5ZDRjZTViMQ"
        class="block w-full rounded-t-lg"
        alt="..."
      />
      </div>
      <div class="hidden md:block rounded-b-lg  p-3  text-xs md:text-xl  text-white   text-center bg-primary">
        <h5 class="text-xl font-thin md:text-4xl">Canadian Immigration Consultancy Firm</h5>
        <p className='text-lg font-thin'>We are certified by the IMMIGRATION CONSULTANTS OF CANADA REGULATORY COUNCIL (ICCRC), Regulatory Authority of paid Representative approved by CIC.</p>
      </div>
    </div>
      <div class="rounded-b-lg display-block md:hidden text-xs md:text-xl border bg-primary text-white p-1 text-center ">
        <h5 class="text-xl md:text-xl font-light">Canadian Immigration Consultancy Firm</h5>
        <p className='font-thin text-xs '>We are certified by the IMMIGRATION CONSULTANTS OF CANADA REGULATORY COUNCIL (ICCRC), Regulatory Authority of paid Representative approved by CIC.</p>
      </div>
        </div>

        {/* services */}
        <div className="services  rounded-xl p-2">
        <h2 className="text-3xl text-center m-2">Services</h2>

<div className="services flex md:flex-row-reverse flex-col-reverse mb-3">
{
    services.slice((services.length)-3,services.length).map(service=>{
        return <ServicesHome key={service.serv_id} service={service} ></ServicesHome>
    })
} 
    </div>
    <div className="button w-full flex "><Link to={'/services'} className=" btn btn-outline    mx-auto mt-3"> See All </Link ></div>
        </div>
        <div className="CTA">
    <CTA></CTA>
    </div>
    <div className="testomonials">
        <Testomonials></Testomonials>
    </div>
    
        </div>
    );
};

export default Home;