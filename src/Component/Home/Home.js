import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';



const Home = () => {
    const location = useLocation()

    return (
        <div className='container max-w-screen-2xl md:w-[600px] mx-auto'>
            <div className=" bg-white p-10">
                <div className="md:flex items-center border-b pb-6 border-gray-200">
                    <div className="flex items-center md:mt-0 mt-4">
                        <div className={`w-8 h-8 ${location.pathname === "/" ? "bg-indigo-700 text-white" : "bg-gray-100 "} rounded flex items-center justify-center`}>
                            <p className="text-base font-medium leading-none ">01</p>
                        </div>
                        <p className="text-base ml-3 font-medium leading-4 text-gray-800">Project Info</p>
                    </div>
                    <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                        <div className={`w-8 h-8 ${location.pathname === "/fromtwo" ? "bg-indigo-700 text-white" : "bg-gray-100 "} rounded flex items-center justify-center`}>
                            <p className="text-base font-medium leading-none ">02</p>
                        </div>
                        <p className="text-base ml-3 font-medium leading-4 text-gray-800">Project Data</p>
                    </div>
                </div>
               <Outlet/>
            </div>
        </div>
    );
};

export default Home;