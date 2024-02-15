import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import Performance  from '../formatage/Performance';

export const usePerformances = (id) => {
  const [performances, setPerformances] = useState();

  const { data, error, isLoading } = DataCall({
    method: 'GET',
    url: `/${id}/performance`,
  });

  useEffect(() => {
    if (data) {
      const formattedPerformances = Performance(data.data.kind, data.data.data);
      setPerformances(formattedPerformances);
    }
  }, [data]);

  return { performances, isLoading };
};
