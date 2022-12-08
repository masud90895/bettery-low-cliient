import React from 'react';

const CsvFile = ({styles,getRootProps,getRemoveFileProps,acceptedFile}) => {
    return (
        <div style={styles.csvReader} className=" z-10 top-0 w-full h-full flex mt-6 bg-opacity-60">
        <div className="extraOutline p-4 bg-white w-max m-auto rounded-lg">
            <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg md:w-[450px]" >
                <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                <div className="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                        <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                        <div>
                        <button type='button'  {...getRootProps()} style={styles.browseFile} className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</button>
                        <button  {...getRemoveFileProps()} style={styles.remove}  className=" btn btn-sm mx-auto bg-red-600 hover:bg-red-400 text-white border-none ml-4">Remove</button> 
                        </div>
                    </label>
                    <div style={styles.acceptedFile}>
                        {acceptedFile && acceptedFile.name}
                   </div>                                          
                </div>
            </div>
        </div>
    </div>
    );
};

export default CsvFile;