import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import Activity from '../formatage/Activity'
import mockData from '../mock/Activity.json'
import { useNavigate } from 'react-router-dom';


export const useActivity = (id) => {
  const [activity, setActivity] = useState([]);
  const navigate = useNavigate()
  
  const { data, error } = DataCall({
    method: 'GET',
    url: `/${id}/activity`,
  });

  useEffect(() => {
    if (data) {
      const formattedActivities = Activity(data.data.sessions)
      setActivity(formattedActivities);
    }else if (id === 'mock'){
      const formattedActivities = Activity(mockData.data.sessions)
      setActivity(formattedActivities);
    }
    else if(!data && id === 'mock'){
      navigate('*')
    }
  }, [data]);
  return { activity };
};
