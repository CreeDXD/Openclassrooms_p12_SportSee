import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import Activity from '../formatage/Activity'

export const useActivity = (id) => {
  const [activity, setActivity] = useState([]);

  const { data, error, isLoading } = DataCall({
    method: 'GET',
    url: `/${id}/activity`,
  });

  useEffect(() => {
    if (data) {
      const formattedActivities = Activity(data.data.sessions)
      setActivity(formattedActivities);
    }
  }, [data]);

  return { activity, isLoading };
};
