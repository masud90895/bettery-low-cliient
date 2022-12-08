import React, { useContext } from 'react';
import { FromContext } from '../../Context/FromProvider';

const ResultPage = () => {
    const {allcsvData} = useContext(FromContext)
    console.log(allcsvData);

    const {projectName,projectDec,clientName,contractorName,maxX,maxY,maxZ,minX,minY,minZ}  = allcsvData
    return (
        <div className="overflow-x-auto">
            <div className='my-8 text-center text-4xl font-bold font-serif'>
                <h1>Result Page</h1>
            </div>
  <table className="table mx-auto table-compact w-[50%]"> 
    <tbody>
      <tr>
        <th>1</th> 
        <th >Project Name :</th> 
        <td>{projectName}</td> 
      </tr>
      <tr>
        <th>2</th> 
        <th>Project Description :</th> 
        <td>{projectDec}</td> 
      </tr>
      <tr>
        <th>3</th> 
        <th>client Name : </th> 
        <td>{clientName}</td> 
      </tr>
      <tr>
        <th>4</th> 
        <th>Contractor Name :</th> 
        <td>{contractorName}</td> 
      </tr>
      <tr>
        <th>5</th> 
        <th>Maximum X Value :</th> 
        <td>{maxX}</td> 
      </tr>
      <tr>
        <th>6</th> 
        <th>Minimum X Value :</th> 
        <td>{minY}</td> 
      </tr>
      <tr>
        <th>7</th> 
        <th>Maximum Y Value :</th> 
        <td>{maxY}</td> 
      </tr>
      <tr>
        <th>8</th> 
        <th>Minimum Y Value :</th> 
        <td>{minY}</td> 
      </tr>
      <tr>
        <th>9</th> 
        <th>Maximum Z Value :</th> 
        <td>{maxZ}V</td> 
      </tr>
      <tr>
        <th>10</th> 
        <th>Minimum Z Value :</th> 
        <td>{minZ}</td> 
      </tr>
    </tbody> 
  </table>
</div>
    );
};

export default ResultPage;