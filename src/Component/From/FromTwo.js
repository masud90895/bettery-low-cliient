import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FromContext } from '../../Context/FromProvider';

const FromTwo = () => {

    const {fromOneData} = useContext(FromContext)

    const {projectName,
        projectDec,
        clientName,
        contractorName} = fromOneData;

    console.log(fromOneData);
    
    return (
        <>
         <h2 className="text-xl font-semibold leading-7 text-gray-800 mt-10">
                    Project data
                </h2>
                <p className="text-sm font-light leading-none mt-3 text-gray-600 ">Please Provide Valid information</p>
                <div className="mt-8 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Project Name</label>
                        <input type="text"  defaultValue={projectName} disabled className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Project Description</label>
                        <textarea type="text"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Project Description'   defaultValue={projectDec} disabled/>
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Client</label>
                        <input type="text"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='client name'   defaultValue={clientName} disabled/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Contractor</label>
                        <input type="text" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Contractor Name'   defaultValue={contractorName} disabled/>
                    </div>
                </div>

                <div className=" z-10 top-0 w-full h-full flex mt-6 bg-opacity-60">
    <div className="extraOutline p-4 bg-white w-max m-auto rounded-lg">
        <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg md:w-[450px]" >
            <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
                <label>
                    <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                    <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                </label>

                <div className="title text-indigo-500 uppercase">or drop files here</div>
            </div>
        </div>
    </div>
</div>

                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Max X</label>
                        <input type="number"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Max X value' />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Min X</label>
                        <input type="number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Min X value' />
                    </div>
                </div>

                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Max Y</label>
                        <input type="number"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Max Y value' />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Min Y</label>
                        <input type="number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Min Y value' />
                    </div>
                </div>

                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Max Z</label>
                        <input type="number"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Max Z value' />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Min Z</label>
                        <input type="number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Min Z value' />
                    </div>
                </div>

                <div className="mt-12 flex justify-between md:flex items-center  ">
                    <Link to='/'><button className='btn py-4 px-7 focus:outline-none bg-white border rounded border-gray-400   hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-black'>Back</button></Link>
                    <button className='btn py-4 px-7 focus:outline-none bg-white border rounded border-gray-400   hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-black'>Submit</button>
                </div>
                
        </>
    );
};

export default FromTwo;