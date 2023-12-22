import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Banner = () => {
   const { user } = useContext(AuthContext);
   return (
      <div className="flex gap-10 items-center justify-between px-5 lg:px-0 flex-col-reverse md:flex-row">
         <div className="w-full md:w-1/2">
            <h1 className="text-5xl">Manage <br /> Task</h1>
            <p className="mt-5">Task management prioritizes and tracks for productivity, with clear communication and reviews ensuring successful goal attainment in collaboration.</p>
            {
               user?.email ?
                  <Link className="" to="/dashboard">
                     <button className="btn btn-primary mt-5 bg-orange-500 text-white text-base border-0 hover:bg-black">Let's Explore</button>
                  </Link>
                  :
                  <Link className="" to="/login">
                     <button className="btn btn-primary mt-5 bg-orange-500 text-white text-base border-0 hover:bg-black">Let's Explore</button>
                  </Link>
            }
            
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://i.ibb.co/f9ZjX5b/Consulting-bro-2.png" alt="" />
         </div>
      </div>
   );
};

export default Banner;