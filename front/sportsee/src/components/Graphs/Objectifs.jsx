import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from 'recharts';
// import data from '../../data/mock/AverageSessions.json'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {ApiSession} from '../../service/ApiSession'

function Objectifs() {
  const params = useParams();
  const [userSessions, setUserSessions] = useState([]);

  const { sessions, isLoading } = ApiSession(params.id);

  useEffect(() => {
    if (sessions) {
      setUserSessions(sessions);
    }
  }, [sessions]);

  function CustomizedCursor({ points, width }) {
    const { x, y } = points[0];
    return (
      <g>
        <Rectangle
          fill="rgba(0, 0, 0, 0.1)"
          x={x}
          y={y}
          width={width}
          height={270}
        />
      </g>
    );
  }
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='objectif_cursor_custom'>
          <span>{`${payload[0].value} min`}</span>
        </div>
      );
    }
    return null;
  };

  const customAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={10}
          textAnchor="middle"
          fill="rgba(250, 250, 250, 0.5)"
        >
          {payload.value}
        </text>
      </g>
    );
  };
    return (
      <div className='objectif'>
        <div className='objectif_title'>Durée moyenne des sessions</div>

        <LineChart
            width={258}
            height={263}
            data={userSessions}
            margin={{ top: -5, right: 0, left: 0, bottom: -5 }}
          >
            <defs>
              <linearGradient id="linear" x1="0" x2="1">
                <stop offset="40%" stopColor="#FFFFFF" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              padding={{ left: 10, right: 10 }}
              height={40}
              tickLine={false}
              axisLine={false}
              tick={customAxisTick}
            />
            <YAxis
              hide={true}
              dataKey="sessionLength"
              domain={['dataMin - 10', 'dataMax + 20']}
              allowDataOverflow={false}
            />
            <Tooltip
              content={customTooltip}
              wrapperStyle={{ outline: 'none' }}
              cursor={<CustomizedCursor />}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              dot={false}
              activeDot={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 10 }}
              axisLine={false}
              stroke="url(#linear)"
              strokeWidth={2}
            />
        </LineChart>
      </div>      
    );
  }
  
  export default Objectifs;
  