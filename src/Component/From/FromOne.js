import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FromContext } from '../../Context/FromProvider';

const FromOne = () => {
    const {
        setProjectName,
        setProjectDec,
        setClientName,
        setContractorName,
        projectName,
        projectDec,
        clientName,
        contractorName} = useContext(FromContext)




    return (
        <> <h2 className="text-xl font-semibold leading-7 text-gray-800 mt-10">
        Project Information
    </h2>
    <p className="text-sm font-light mt-3 leading-none text-gray-600 mt-0.5">Please provide valid Information</p>
    <div className="mt-8 md:flex items-center">
        <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">Project Name</label>
            <input onChange={(e)=>setProjectName(e.target.value)} type="text"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  placeholder='Project Name'/>
        </div>
        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">Project Description</label>
            <textarea  onChange={(e)=>setProjectDec(e.target.value)} type="name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Project Description' />
        </div>
    </div>
    <div className="mt-12 md:flex items-center">
        <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">Client</label>
            <input  onChange={(e)=>setClientName(e.target.value)}  type="text" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='client name' />
        </div>
        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">Contractor</label>
            <input  onChange={(e)=>setContractorName(e.target.value)} type="text"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Contractor Name' />
        </div>

       
    </div>
    {
       (projectName.length=== 0 ||
        projectDec.length=== 0 ||
        clientName.length=== 0 ||
        contractorName.length=== 0) &&  <p className='text-red-500 mt-3 font-xl'>please proved all data to unlock next</p>
    }

    

        {
            (projectName.length=== 0 ||
            projectDec.length=== 0 ||
            clientName.length=== 0 ||
            contractorName.length=== 0) ? <button disabled className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
            <span className="text-sm font-medium text-center text-gray-800 capitalize">Locked</span>
        </button> : <Link to='fromtwo'>
    <button  className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
        <span className="text-sm font-medium text-center text-gray-800 capitalize">Next Step</span>
        <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
        </svg>
    </button>
    </Link>
        }



</>

    
    );
};

export default FromOne;