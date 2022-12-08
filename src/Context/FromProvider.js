import React, { createContext, useState } from 'react';

export const FromContext = createContext()
const FromProvider = ({children}) => {
    const [projectName,setProjectName] = useState('')
    const [projectDec,setProjectDec] = useState('')
    const [clientName,setClientName] = useState('')
    const [contractorName,setContractorName] = useState('')
    const [allcsvData,setAllCsvData]=useState({})

    //max min value
    const [maxX,setMaxX] = useState('')
    const [maxY,setMaxY] = useState('')
    const [maxZ,setMaxZ] = useState('')
    const [minX,setMinX] = useState('')
    const [minY,setMinY] = useState('')
    const [minZ,setMinZ] = useState('')
    

    const  fromOneData ={
        projectName,
        projectDec,
        clientName,
        contractorName
    }

    const data ={ fromOneData,
        setProjectName,
        setProjectDec,
        setClientName,
        setContractorName,
        projectName,
        projectDec,
        clientName,
        contractorName,
        maxX,setMaxX,
        minX,setMinX,
        maxY,setMaxY,
        minY,setMinY,
        maxZ,setMaxZ,
        minZ,setMinZ,
        setAllCsvData,
        allcsvData
    }

    return (
        <FromContext.Provider value={data}>{children}</FromContext.Provider>
    );
};

export default FromProvider;