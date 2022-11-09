import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import {PropagateLoader} from 'react-spinners';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <PropagateLoader color="#433ffd" />
        setTimeout(() => {

          }, 2000);
    }
    if(!user){
        return <Navigate to={`/login`} state={{from: location}} replace></Navigate>
    }
    
        return children;
    
    
    
};

export default PrivateRoutes;