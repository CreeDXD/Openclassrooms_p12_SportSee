import { useEffect, useState } from 'react';
import { DataCall } from './CallApi';
import User from '../formatage/User';
import formatScore from '../formatage/formatScore';
import mockData from '../mock/Info.json'
import { useNavigate } from 'react-router-dom';
 

export const ApiUser = (id) => {
  const [userInfos, setUserInfos] = useState();
  const [score, setScore] = useState([]);
  const [keyData, setKeyData] = useState([]);
  const navigate = useNavigate()

  const { data, error } = DataCall({
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
    else if (id === 'mock'){
      setUserInfos(mockData.data.userInfos);
      const formattedScore = formatScore(mockData.data.todayScore);
      setScore(formattedScore);
      const formattedKeyData = User(mockData.data.keyData);
      setKeyData(formattedKeyData);
    }
    else if(!data && id === 'mock'){
      navigate('*')
    }
  }, [data,id]);

  return { userInfos, score, keyData };
};
