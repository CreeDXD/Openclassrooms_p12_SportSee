import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import { Performance } from '../formatage/Performance';

export const usePerformances = (id) => {
  const [performances, setPerformances] = useState();

  const { data, error, isLoading } = DataCall({
    method: 'GET',
    url: `/${id}/performance`,
  });

  useEffect(() => {
    if (data) {
      const performanceModel = new Performance(
        data.data.id,
        data.data.kind,
        data.data.data
      );
      const formattedPerformances = performanceModel.formatPerformance();

      setPerformances(formattedPerformances);
    }
  }, [data]);

  return { performances, isLoading };
};
