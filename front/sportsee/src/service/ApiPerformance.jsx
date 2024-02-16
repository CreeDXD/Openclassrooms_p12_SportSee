import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import Performance  from '../formatage/Performance';
import mockData from '../mock/Performance.json'
import { useNavigate } from 'react-router-dom';

export const usePerformances = (id) => {
  const [performances, setPerformances] = useState();
  const navigate = useNavigate()
  const { data, error} = DataCall({
    method: 'GET',
    url: `/${id}/performance`,
  });

  useEffect(() => {
    if (data) {
      const formattedPerformances = Performance(data.data.kind, data.data.data);
      setPerformances(formattedPerformances);
    }else if (id === 'mock'){
      const formattedPerformances = Performance(mockData.data.kind, mockData.data.data);
      setPerformances(formattedPerformances);
    }else if(!data && id === 'mock'){
      navigate('*')
    }
  }, [data]);

  return { performances };
};
