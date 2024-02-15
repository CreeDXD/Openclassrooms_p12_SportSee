import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ChooseURL = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    navigate(`/${selectedValue}`);
  };

  return (
    <div>
      <select onChange={handleSelectChange} value={id || ''}>
        <option>choisie l'un des user</option>
        <option value="12">Karl (user18)</option>
        <option value="18">Cecilia (user12)</option>
        <option value="mock">Mock data</option>
      </select>
    </div>
  );
};

export default ChooseURL;
