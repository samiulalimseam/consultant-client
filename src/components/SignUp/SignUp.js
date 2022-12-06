import React, { useContext, useTransition } from 'react';
import  { useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
// import { AuthContext } from '../../CONTEXT/UserContextProvider';




const SignUp = () => {
  const location = useLocation( );
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'; 
  
  
   const {abc,setNewTitle,createUser,updateUser} = useContext(AuthContext);
   
   setNewTitle('Sign Up- Globaldesk')
    const handleSignUp= (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = {
            displayName: name,
            photoURL : photoUrl
        } 
        console.log(abc);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            updateUser(profile)
            .then(()=>navigate('/account'))
            .catch(err=>console.error(err))
            console.log(user);
            const currentUser = {
              email: user.email
            }

            fetch('https://globaldeskserver-samiulalimseam.vercel.app/jwt',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
        
        
      }).then(res=>res.json())
      .then(data=> localStorage.setItem('globaldesk-token', data.token))


    })
    .catch(err=> console.error(err))
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
        

        
        }


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Connect to our professional guides by Joining Global Desk .</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name='photourl' type="text" placeholder="url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a  href={`/`} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;