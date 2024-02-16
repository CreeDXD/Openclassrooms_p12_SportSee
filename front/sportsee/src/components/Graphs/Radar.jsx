import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {usePerformances} from '../../service/ApiPerformance'; 

function Radars() {
  const params = useParams();
  const [userPerformances, setUserPerformances] = useState();

  const { performances} = usePerformances(params.id);
  useEffect(() => {
    if (performances) {
      setUserPerformances(performances);
    }
  }, [performances]);

  function customTick({ payload, x, y, stroke, textAnchor, radius }) {
    return (
      <g>
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          textAnchor={textAnchor}
          style={{ fill: 'white', fontSize: '12px' }}
        >
          {payload.value}
        </text>
      </g>
    );
  }
  return (
    
    <div className='radar'>
      <RadarChart
          width={258}
          height={263}
          data={userPerformances}
          margin={{ top: 10, right: 24, bottom: 10, left: 24 }}
          startAngle={30}
          endAngle={390}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={customTick} />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
    </div>
  );
}

export default Radars;
