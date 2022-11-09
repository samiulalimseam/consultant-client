import React from 'react';

const NotFound = () => {
    return (
        <div className=' m-auto w-screen  h-screen md:h-[500px] md:w-[700px] shadow-lg mt-10 text-white  bg-blue-400 flex flex-col justify-center items-center'>
                <h1 className="text-9xl font-light text-center">OOPS!</h1>
                <p className="text-4xl font-light text-center">404 Page Not Found</p>
        </div>
    );
};

export default NotFound;