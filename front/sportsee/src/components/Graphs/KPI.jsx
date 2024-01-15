import { Pie, PieChart, Legend } from 'recharts';

// import data from '../../data/mock/Info.json'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiUser } from '../../service/ApiUser';
function KPI() {
  const data2 = [
    {
      name: 'test',
      value: 100,
    },
  ];
  const params = useParams();
  const [userScore, setUserScore] = useState([]);

  const { score, isLoading } = ApiUser(params.id);
  useEffect(() => {
    if (score) {
      setUserScore(score);
    }
  }, [score]);
  const renderLegendText = ({ payload }) => {
    const legend = payload.find(({ value }) => value === 'score');
    if (legend) {
      return (
        <p className='kpi_text'>
          <span className='kpi_percent'>{legend.payload.value}%</span>
          <br />
          de votre objectif
        </p>
      );
    }
    return null;
  };
    return (
    <div className='kpi'>
      <p className='kpi_title'>Score</p>
      {!isLoading && score && (
        <PieChart width={250} height={250}>
          <Pie
            data={data2}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#FFF"
          />
          <Pie
            data={userScore}
            dataKey="value"
            cx="50%"
            cy="50%"
            cornerRadius={40}
            innerRadius={88}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
          />
          <Legend
            iconSize={0}
            verticalAlign="center"
            align="center"
            content={renderLegendText}
            wrapperStyle={{ top: '100px', left: '10px' }}
          />
        </PieChart>
      )}
    </div>        
    );
  }
  
  export default KPI;
  