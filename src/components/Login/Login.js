import React, { useContext } from 'react';
import UserContext, { AuthContext } from '../../context/UserContext';
import { BsGoogle } from "react-icons/bs";
import { useLocation, useNavigate ,Link} from 'react-router-dom';

const Login = () => {
  const {googleLogin,setNewTitle,loginWithemail} = useContext(AuthContext);
  const location = useLocation( );
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'; 
  setNewTitle('Login- Globaldesk')

  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    loginWithemail(email,password)
    .then(res=> {
      const user = res.user;
      const currentUser = {
        email: user.email
      }
      //get jwt
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

 const handleGoogleLogin = (event)=>{
  event.preventDefault()
  googleLogin()
  .then(res=> {
    const user = res.user;
    const currentUser = {
      email: user.email
    }
    console.log(currentUser);
    //get jwt
    fetch('https://globaldeskserver-samiulalimseam.vercel.app/jwt',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
      
      
    }).then(res=>res.json())
    .then(data=> localStorage.setItem('globaldesk-token', data.token))


  })
  .catch(err=> console.log(err))
}


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Connect to our professional guides by loging in .</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a  href={`/`} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  type='submit' className="btn btn-primary mb-2 text-white" >Login</button>
          <button onClick={handleGoogleLogin} className="mb-2 btn  btn-outline btn-primary"><BsGoogle></BsGoogle></button>
          <p className="text-lg">New to Globaldesk? <Link className='text-primary' to={`/signup`}>Create Account</Link> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;