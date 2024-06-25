import { useEffect } from "react";
import Backup from "../assets/images/backup.jpg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {

  
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-5xl text-gray-700 font-bold my-10 dark:text-white">404, Oops! Page Not Found </p>
          <div className="max-w-lg">
          <img className="rounded" src={Backup} alt="404 Page Not Found" />
            </div>
        </div>
        <div className="flex justify-center my-4"> 
          <Link to="/">
          <button className="w-64 text-white text-xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium"> Back to Home</button>
          </Link>
          
        </div>
      </section>
    </main>
  )
}
