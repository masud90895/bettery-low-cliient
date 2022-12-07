import React, { createContext, useState } from 'react';

export const FromContext = createContext()
const FromProvider = ({children}) => {
    const [projectName,setProjectName] = useState('')
    const [projectDec,setProjectDec] = useState('')
    const [clientName,setClientName] = useState('')
    const [contractorName,setContractorName] = useState('')



    const  fromOneData ={
        projectName,
        projectDec,
        clientName,
        contractorName
    }

    const data ={ fromOneData,setProjectName,setProjectDec,setClientName,setContractorName}

    return (
        <FromContext.Provider value={data}>{children}</FromContext.Provider>
    );
};

export default FromProvider;