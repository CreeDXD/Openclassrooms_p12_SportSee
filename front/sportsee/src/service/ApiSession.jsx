import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import { Session } from '../formatage/Session';

export const ApiSession = (id) => {
  const [sessions, setSessions] = useState();

  const { data, error, isLoading } = DataCall({
    method: 'GET',
    url: `/${id}/average-sessions`,
  });

  useEffect(() => {
    if (data) {
      const sessionModel = new Session(data.data.id, data.data.sessions);
      const formattedSessions = sessionModel.formatSessions();

      setSessions(formattedSessions);
    }
  }, [data]);

  return { sessions, isLoading };
};
