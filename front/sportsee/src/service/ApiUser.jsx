import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import { User } from '../formatage/User';
 

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
      const userModel = new User(
        data.data.id,
        data.data.userInfos,
        todayOrNot,
        data.data.keyData
      );
      const formattedUserInfos = userModel.userInfos;
      setUserInfos(formattedUserInfos);
      const formattedScore = userModel.formatScore();
      setScore(formattedScore);
      const formattedKeyData = userModel.formatKeyData();
      setKeyData(formattedKeyData);
    }
  }, [data]);
  return { userInfos, score, keyData, isLoading };
};
