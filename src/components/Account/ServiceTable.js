import React from 'react';

const ServiceTable = ({service,count}) => {
    const {title} = service;
    return (
        <div className='flex justify-start'>
            <h3 className="text-lg p-2 border w-1/8">{count}</h3>
            <h3 className="text-lg p-2 border w-full overflow-auto">{title}</h3>
        </div>
    );
};

export default ServiceTable;