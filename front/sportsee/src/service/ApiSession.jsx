import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import  Session  from '../formatage/Session';
import mockData from '../mock/AverageSessions.json'
import { useNavigate } from 'react-router-dom';

export const ApiSession = (id) => {
  const [sessions, setSessions] = useState();
  const navigate = useNavigate()
  const { data, error } = DataCall({
    method: 'GET',
    url: `/${id}/average-sessions`,
  });

  useEffect(() => {
    if (data) {
      const formattedSessions = Session( data.data.sessions );
      setSessions(formattedSessions);
    }else if (id === 'mock'){
      const formattedSessions = Session( mockData.data.sessions );
      setSessions(formattedSessions);
    } else if(!data && id === 'mock'){
      navigate('*')
    }
  }, [data]);

  return { sessions };
};
