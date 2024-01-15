import React, { PureComponent } from 'react';
import { RadialBarChart,Tooltip, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function RadialBarChartTest () {
  const data = [
    { name: 'Category A', uv: 31.47, pv: 2400, fill: '#8884d8' }
    
  ];

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        dataKey="uv"
        background
        clockWise
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
      <Tooltip />
    </RadialBarChart>

  );
  
  
  
  
};
  
  export default RadialBarChartTest;