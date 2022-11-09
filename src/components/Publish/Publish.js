import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Publish = () => {
    const {user} = useContext(AuthContext);
    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const service = {
            publisher:user?.email,
            rating:5,
            title:form.title.value,
            img: form.img.value,
            description:[
                {
                    info: form.info1.value,
                    details: form.detail1.value
                },
                {
                    info: form.info2.value,
                    details: form.detail2.value
                },
                {
                    info: form.info3.value,
                    details: form.detail3.value
                }
            ]
        }
        fetch('http://localhost:5000/publish',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h3 className="text-2xl text-center">Publish A Service</h3>
            <div className="form border m-auto shadow-lg">
                <form onSubmit={handleSubmit} className='p-3 mx-auto my-3 grid grid-cols-1 gap-2 md:grid-cols-3'>
                    <input className='input input-bordered w-full max-w-xs' placeholder='Enter Service title' type="text" name='title' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Image Link' type="text" name='img' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Service Header' type="text" name='info1' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Description' type="text" name='detail1' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Service Header' type="text" name='info2' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Description' type="text" name='detail2' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Service Header' type="text" name='info3' />
                    <input className='input input-bordered w-full max-w-xs' placeholder='Description' type="text" name='detail3' />
                    <input type="submit" className=" rounded-sm btn-outline btn-primary input input-bordered w-full max-w-xs" />

                </form>
            </div>
        </div>
    );
};

export default Publish;