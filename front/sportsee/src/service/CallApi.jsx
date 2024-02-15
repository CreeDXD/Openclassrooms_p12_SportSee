import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3000/user';

export function DataCall(axiosParams){

    const [data, setData] = useState(undefined);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
  
    const fetchData = async () => {
      try {
        const response = await axios.request(axiosParams);
        setData(response.data);
      } catch (error) {
        setError(error);
        navigate('*')
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    return { data, error, isLoading };
}
