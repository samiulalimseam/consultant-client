import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import ServicesHome from '../Home/servicesHome/ServicesHome';

const Services = () => {
    const {setNewTitle} = useContext(AuthContext)
    const [services,setServices] = useState([])
    setNewTitle('Services- Globaldesk')
        useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res=> res.json())
         .then(data=>setServices(data))
         .catch(err=> console.log(err))
        },[])
    return (
        <div>
            <h2 className="text-3xl font-light text-center m-3">Explore Our Services</h2>
            <div className="flex flex-col md:flex-row w-full  justify-center   ">
                <div className="categories w-full md:w-1/5 flex justify-center items-center md:items-start  md:flex-col md:justify-start"><button className=" m-1 btn w-48 btn-primary btn-outline">All Categories</button>
                <button className=" m-1 btn w-48 btn-primary btn-outline">Canada Visa</button>
                </div>
                <div className="services grid grid-cols-1 md:grid-cols-2 gap-2  md:w-4/5 m-auto  p-2">
                {
                services.map(service=> {
                    return    <ServicesHome key={service._id} service={service} ></ServicesHome>
                })
            }
                </div>
            </div>

            
         
        </div>
    );
};

export default Services;