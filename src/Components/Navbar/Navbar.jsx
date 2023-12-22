import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
   const { user, logOut, loading } = useContext(AuthContext);

   if (loading) {
      return <div className="h-screen flex justify-center items-center">
         <progress className="progress w-56"></progress>
      </div>
   }
   
   const handleLogOut = (e) => {
      e.preventDefault();
      logOut()
   }

   const navLink = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      {
         user?.email ?
            <div className="dropdown dropdown-end flex items-center ml-10">
               <p className="mr-1">{user.displayName}</p>
               <div>
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                     </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     <li><button onClick={handleLogOut}>Logout</button></li>
                  </ul>
               </div>
            </div>
            :
            <></>
      }
   </>
   return (
      <Container>
         <div className="navbar bg-base-100 px-0">
            <div className="navbar-start w-full lg:w-1/2">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLink}
                  </ul>
               </div>
               <Link to="/" className="text-3xl font-bold">Task <span className="text-orange-500">Flow</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
               <ul className="menu menu-horizontal px-1 items-center">
                  {navLink}
               </ul>
            </div>
         </div>
      </Container>
   );
};

export default Navbar;