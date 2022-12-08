import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FromContext } from '../../Context/FromProvider';
import { useCSVReader } from 'react-papaparse';
import CsvFile from './CsvFile';
import toast from 'react-hot-toast';

const FromTwo = () => {
    const [csvData,setCsvData]=useState([])
    const navigate = useNavigate()
    
    
    const {
        maxX,setMaxX,
        minX,setMinX,
        maxY,setMaxY,
        minY,setMinY,
        maxZ,setMaxZ,
        minZ,setMinZ,
        setAllCsvData
    } = useContext(FromContext)




    const csvSlicedData = csvData?.data?.slice(1, 1362)

    // for maxNumber
    const maxX1 = Math.max.apply(Math, csvSlicedData?.map(v => setMaxX(v[1])));
    const maxY2 = Math.max.apply(Math, csvSlicedData?.map(v => setMaxY(v[2])));
    const maxZ3 = Math.max.apply(Math, csvSlicedData?.map(v => setMaxZ(v[3])));
    const maxArr = [maxX, maxY, maxZ]

    // for minNumber
    const minX1 = Math.min.apply(Math, csvSlicedData?.map(v => setMinX(v[1])));
    const minY2 = Math.min.apply(Math, csvSlicedData?.map(v => setMinY(v[2])));
    const minZ3 = Math.min.apply(Math, csvSlicedData?.map(v => setMinZ(v[3])));
    const minArr = [minX, minY, minZ]
    



    



    const {CSVReader} = useCSVReader()

    const {fromOneData} = useContext(FromContext)

    const {projectName,
        projectDec,
        clientName,
        contractorName} = fromOneData;

    
        const styles = {
            csvReader: {
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
            },
            browseFile: {
                width: '40%',
            },
            acceptedFile: {
                border: '1px solid #ccc',
                height: 45,
                lineHeight: 2.5,
                paddingLeft: 10,
                width: '200px',
                margin: "5px"
            },
            remove: {
                width: '40%',
                borderRadius: "5px",
                padding: '0 20px',

            },
            progressBarBackgroundColor: {
                backgroundColor: 'blue',
            },
        };
    
        const handleSubmit=(e)=>{
            e.preventDefault();
            const from= e.target;
            const projectName=from.projectName.value;
            const projectDec=from.projectDec.value;
            const clientName = from.clientName.value;
            const contractorName = from.contractorName.value;

            const maxX = from.maxXValue.value;
            const minX = from.minXValue.value;
            const maxY = from.maxYValue.value;
            const minY = from.minYValue.value;
            const maxZ = from.maxZValue.value;
            const minZ = from.minZValue.value;

            const csvData ={
                projectName,projectDec,clientName,contractorName,maxX,maxY,maxZ,minX,minY,minZ
            }
            setAllCsvData(csvData);
            toast.success("data added successfully")
            navigate("/result")
        }



    return (
        <form onSubmit={handleSubmit}>
         <h2 className="text-xl font-semibold leading-7 text-gray-800 mt-10">
                    Project data
                </h2>
                <p className="text-sm font-light leading-none mt-3 text-gray-600 ">Please Provide Valid information</p>
                <div className="mt-8 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Project Name</label>
                        <input name='projectName' type="text"  defaultValue={projectName} disabled className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Project Description</label>
                        <textarea name="projectDec" type="text"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Project Description'   defaultValue={projectDec} disabled/>
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Client</label>
                        <input name='clientName' type="text"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='client name'   defaultValue={clientName} disabled/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Contractor</label>
                        <input name="contractorName" type="text" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Contractor Name'   defaultValue={contractorName} disabled/>
                    </div>
                </div>


                <CSVReader
                onUploadAccepted={(results) => {
                    setCsvData(results)
                }}
            >
                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps
                }) => (
                    <>
                        <CsvFile styles={styles}  getRootProps={getRootProps} getRemoveFileProps={getRemoveFileProps} acceptedFile={acceptedFile}/>
                        <ProgressBar style={styles.progressBarBackgroundColor} />
                    </>
                )}
            </CSVReader>





                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Max X</label>
                        <input name='maxXValue' type="number"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Max X value' defaultValue={maxX} required/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Min X</label>
                        <input name='minXValue' type="number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Min X value' defaultValue={minX} required/>
                    </div>
                </div>

                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label  className="mb-3 text-sm leading-none text-gray-800">Max Y</label>
                        <input name='maxYValue' type="number"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Max Y value' defaultValue={maxY}  required/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Min Y</label>
                        <input name='minYValue' type="number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Min Y value' defaultValue={minY} required/>
                    </div>
                </div>

                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Max Z</label>
                        <input name='maxZValue' type="number"  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Max Z value' defaultValue={maxZ} required/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Min Z</label>
                        <input name='minZValue' type="number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder='Min Z value' defaultValue={minZ} required/>
                    </div>
                </div>

                <div className="mt-12 flex justify-between md:flex items-center  ">
                    <Link to='/'><button className='btn py-4 px-7 focus:outline-none bg-white border rounded border-gray-400   hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-black'>Back</button></Link>
                    <button type='submit' className='btn py-4 px-7 focus:outline-none bg-white border rounded border-gray-400   hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-black'>Submit</button>
                </div>
                
        </form>
    );
};

export default FromTwo;