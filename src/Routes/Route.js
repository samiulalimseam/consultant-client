import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Account from '../components/Account/Account';
import AddReview from '../components/AddReview/AddReview';
import Blog from '../components/Blog';
import EditReview from '../components/EditReview/EditReview';
import Home from '../components/Home/Home';
import Main from '../components/Layout/Main';
import Login from '../components/Login/Login';
import NotFound from '../components/NotFound';
import Publish from '../components/Publish/Publish';
import Service from '../components/Service/Service';
import Services from '../components/Services/Services';
import SignUp from '../components/SignUp/SignUp';
import PrivateRoutes from './PrivateRoutes';




const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                
                element: <Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/publish',
                element: <PrivateRoutes> <Publish></Publish> </PrivateRoutes>
            },
            {
                path:'/addreview/:id',
                loader: ({params})=>params.id,
                element: <PrivateRoutes> <AddReview></AddReview> </PrivateRoutes>
            },
            {
                path:'/account',
                element: <PrivateRoutes>  <Account></Account> </PrivateRoutes>
            },
            {
                path:'/service/:id',
                loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`) ,
                element:<Service></Service>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }, 
            {
                path:'/reviews/edit/:id',
                loader : (({params})=> params.id),
                element:<EditReview></EditReview>
            }, 
    {
        path: '*',
        element: <NotFound></NotFound>,
    }
            
            
        ]
    }
    
])
    
export default routes;