import React from 'react';

const ReviewTable = ({review,count}) => {
    const {comment,servId,rating} = review;
    return (
        <div className='w-screen md:max-w-3xl m-auto'>
            <tr className='flex   '>
        <th className='border w-1/7 rounded-none'>{count}</th>
        <td className='border w-2/4  overflow-auto '>{servId}</td>
        <td className='border w-2/4  overflow-auto '>{comment}</td>
        <td className='border w-1/4 rounded-none'>{rating}</td>
      </tr>
        </div>
    );
};

export default ReviewTable;