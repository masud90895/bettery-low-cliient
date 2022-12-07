import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)


    return (
        <header aria-label="Site Header" className="bg-gray-200">
  <div className="mx-auto relative container px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link className="block flex items-center gap-3" to="/">
          <img className='h-10' src="https://i.ibb.co/nCc6shs/download-removebg-preview.png" alt="" />
          <h2 className='text-3xl font-bold font-serif'>ABC Engine</h2>
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Site Nav" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
          <li>
              <NavLink
                className=" transition hover:text-gray-500/75"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" transition hover:text-gray-500/75"
                to="result"
              >
                Result
              </NavLink>
            </li>


            <li>
              <NavLink
                className=" transition hover:text-gray-500/75"
                to="chart"
              >
                Chart
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className=" block md:hidden">
  <button     
  onClick={()=>setToggle(!toggle)}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
  {
    toggle && <ul className="absolute z-50 right-[-20px] top-[-20px] mt-20 mr-14 menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='result'>Result</Link></li>
    <li><Link to='chart'>Chart</Link></li>
  </ul>
  }

           
          </div>
        
      </div>
    </div>
  </div>
</header>
    );
};

export default Navbar;