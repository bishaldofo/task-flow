import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { FaChevronLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
   const { googleSign, signIn, loading } = useContext(AuthContext);
   const navigate = useNavigate()
   const [error, setError] = useState('')
   const location = useLocation()

   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
         <span className="loading loading-dots loading-lg"></span>
      </div>
   }

   const handleGoogleSignIn = () => {
      const googleSignIn = googleSign().then(result => console.log(result.user))
      console.log(googleSignIn)
      if (googleSignIn) {
         navigate('/')
      }
   }

   const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      setError('')

      signIn(email, password)
         .then(result => {
            console.log(result.user)
            Swal.fire(
               'Good job!',
               'Login Successfully',
               'success'
            )
            navigate(location?.state ? location.state : '/')
         })
         .catch(error => {
            console.error(error)
            setError('Email and password does not match!')
            form.reset()
            return
         })
   }
   return (
      <div>
         <Helmet>
            <title>Task Flow | Login</title>
         </Helmet>
         <Container>
            <div className="h-screen flex flex-col items-center justify-center">
               <div className="w-full md:w-[500px] m-auto space-y-5">
                  <div className="mb-10"><Link className="flex items-center text-gray-900 font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link>
                  </div>
                  <p>Sign in with Google</p>
                  <button onClick={handleGoogleSignIn} className="btn">Google</button>
                  <p className="">Or</p>
                  <div>
                     <h2 className="text-3xl font-bold mb-3 text-orange-500">Sign In</h2>
                     <p>Enter your email address to get started</p>
                  </div>
                  {/* <SocialLogin></SocialLogin> */}
                  <form onSubmit={handleLogin}  className=" w-full m-auto space-y-2">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control pt-5">
                        <button className='bg-orange-500 btn hover:bg-black' type="primary"><span className='text-white text-xl'>Sign In</span></button>
                     </div>
                  </form>
                  <div className="">
                     <Link className="underline text-sky-500" to='/register'>Don't have an account? Sign up</Link>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Login;