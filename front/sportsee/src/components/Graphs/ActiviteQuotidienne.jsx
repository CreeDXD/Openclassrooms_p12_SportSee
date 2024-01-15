import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActivity } from '../../service/ApiAcvtivity'; 
import '../../style/css/index.css'

function ActiviteQuotidienne() {  
  const params = useParams();
  const [userActivity, setUserActivity] = useState([]);

  const { activity, isLoading } = useActivity(params.id);

  useEffect(() => {
    if (activity) {
      setUserActivity(activity);
    }
  }, [activity]);

  // return (
  //   <ResponsiveContainer  width="70%" aspect={3.5}>
  //       <BarChart width="100%" data={transformedData}>
  //         <XAxis dataKey="index" tickLine={false} axisLine={false}  />
  //         <YAxis 
  //           tickLine={false}
  //           axisLine={false}
  //           orientation="left" 
  //           type="number"
  //           yAxisId="left"
  //           domain={yAxisTicksRight}
  //           ticks={yAxisTicksRight}
  //         />
  //         <YAxis 
  //           tickLine={false}
  //           axisLine={false}
  //           orientation="right" 
  //           type="number" 
  //           domain={yAxisTicksLeft} 
  //           ticks={yAxisTicksLeft}
  //         />
  //         <Legend /> 
  //         <CartesianGrid vertical={false}/>
  //         <Bar dataKey="kilogram" fill="#282D30" radius={[6, 6, 0, 0]} barSize={10} />
  //         <Bar dataKey="calories" fill="#E60000" radius={[6, 6, 0, 0]} barSize={10} yAxisId="left"/>
  //       </BarChart>   
  //   </ResponsiveContainer>
    
    
  // )
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='tooltip'>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  const renderLegendText = (value, entry) => {
    const { dataKey } = entry;
    return (
      <div className='legend'>
        {dataKey === 'kilogram' ? 'Poids (kg)' : 'Calories brulées (kCal)'}
      </div>
    );
  };

  return (
    <div className='bargraph_background'>
      <h4>Activité quotidienne</h4>
      {!isLoading && userActivity && (
        <BarChart width={750} height={220} data={userActivity}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={['dataMin -10', 'dataMax + 10']}
          />
          <YAxis
            hide={true}
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            domain={[0, 'dataMax + 20']}
          />
          <Tooltip content={customTooltip} wrapperStyle={{ outline: 'none' }} />
          <Legend
            iconType="circle"
            iconSize={10}
            verticalAlign="top"
            align="right"
            formatter={renderLegendText}
            wrapperStyle={{ top: '-40px' }}
          />
          <Bar
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      )}
    </div>
  );
}
  
  export default ActiviteQuotidienne;
  