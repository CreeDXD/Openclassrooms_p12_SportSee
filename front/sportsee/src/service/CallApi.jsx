import React, { useState, useEffect, } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/user';

export function DataCall(axiosParams){

    const [data, setData] = useState(undefined);
    const [error, setError] = useState('');
  
    const fetchData = async () => {
      const mockRegex = /mock/
      console.log(mockRegex.test(axiosParams.url))
      if(!mockRegex.test(axiosParams.url)){        
        try {
          const response = await axios.request(axiosParams);
          setData(response.data);
        } catch (error) {
          setError(error);
        }    
      }else{
        console.log('we are using mock data', mockRegex.test(axiosParams))
      }    
    };
  
    useEffect(() => {      
      fetchData();      
    }, []);
    return { data, error };
}
