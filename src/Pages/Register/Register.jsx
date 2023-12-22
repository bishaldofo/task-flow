import { FaChevronLeft } from "react-icons/fa";
import Container from "../../Components/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
import { imageUpload } from "../../Utils/Utils";

const Register = () => {
   const { updateUserProfile, googleSign, createUser } = useContext(AuthContext);
   const navigate = useNavigate()
   const [error, setError] = useState('')

   const handleGoogleSignIn = () => {
      const googleSignIn = googleSign().then(result => console.log(result.user))
      console.log(googleSignIn)
      if (googleSignIn) {
         navigate('/')
      }
   }

   const handleRegister = async event => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const image = form.image.files[0]

      try {
         const imageData = await imageUpload(image)
         const result = await createUser(email, password)
         await updateUserProfile(name, imageData?.data?.display_url)
         Swal.fire(
            'Good job!',
            'Account created Successfully!',
            'success'
         )
         navigate('/')
         console.log(result)

         // setError('')

         // if (password.length < 6) {
         //    setError('Password length must be six with one character, one symbol!')
         //    return
         // }

         // createUser(email, password)
         //    .then(result => {
         //       const user = result.user;
         //       console.log(user)
         //       return updateProfile(user, {
         //          displayName: name,
         //          displayURL
         //       });
         //    })
         //    .then(() => {
         //       Swal.fire(
         //          'Good job!',
         //          'Account created Successfully!',
         //          'success'
         //       )
         //    })
         //    .catch(error => {
         //       console.error(error);
         //       setError('Email already exist!')
         //    });
      }
      catch(error) {
         console.log(error)
      }

      
   }
   return (
      <div>
         <Helmet>
            <title>Task Flow | Register</title>
         </Helmet>
         <Container>
            <div className="h-screen flex flex-col items-center justify-center">
               <div className="w-full md:w-[500px] m-auto space-y-5">
                  <div className="mb-10"><Link className="flex items-center text-gray-900 font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link>
                  </div>
                  
                  <div>
                     <h2 className="text-3xl font-bold mb-5 text-orange-500">Sign Up</h2>
                     <p className="mb-2">Sign in with Google</p>
                     <button onClick={handleGoogleSignIn} className="btn">Google</button>
                     <p className="my-5">Or</p>
                     <p>Enter your email address to get started</p>
                  </div>
                  {/* <SocialLogin></SocialLogin> */}
                  <form onSubmit={handleRegister} className=" w-full m-auto space-y-2">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                     </div>
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
                     </div>
                     <div className="form-control pt-5">
                        <input type="file" id="image" name="image" accept="image/*" className="file-input file-input-bordered w-full max-w-xs" required />
                     </div>
                     <div className="form-control pt-5">
                        <button className='bg-orange-500 btn hover:bg-black' type="primary"><span className='text-white text-xl'>Sign Up</span></button>
                     </div>
                  </form>
                  <div className="">
                     <Link className="underline text-sky-500" to='/login'>Already have an account? Sign In</Link>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Register;