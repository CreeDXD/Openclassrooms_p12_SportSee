import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import User from '../formatage/User';
import formatScore from '../formatage/formatScore';
 

export const ApiUser = (id) => {
  const [userInfos, setUserInfos] = useState();
  const [score, setScore] = useState([]);
  const [keyData, setKeyData] = useState([]);

  const { data, error, isLoading } = DataCall({
    method: 'GET',
    url: `/${id}`,
  });
  useEffect(() => {
    

    if (data) {
      let todayOrNot
      if(data.data.score){
        todayOrNot = data.data.score
      }
      else{
        todayOrNot = data.data.todayScore
      }
      
      setUserInfos(data.data.userInfos);
      const formattedScore = formatScore(todayOrNot);
      setScore(formattedScore);
      const formattedKeyData = User(data.data.keyData);
      setKeyData(formattedKeyData);
    }
  }, [data]);
  return { userInfos, score, keyData, isLoading };
};
