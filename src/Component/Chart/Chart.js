import React, { useContext } from 'react';
import { BarChart,XAxis,CartesianGrid,YAxis,Tooltip,Bar} from 'recharts';
import { FromContext } from '../../Context/FromProvider';

const Chart = () => {
    const {allcsvData} = useContext(FromContext)
    
    const data = [allcsvData];
    console.log(data);
    return (
        <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="projectName" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="maxX" fill="#8884d8" barSize={30} />
      </BarChart>
    );
};

export default Chart;