import { Stat } from "./Stat";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiUser } from '../service/ApiUser';

function Right() {
  const params = useParams();
  const [userKeyData, setUserKeyData] = useState();

  const { keyData } = ApiUser(params.id);

  useEffect(() => {
    if (keyData) {
      console.log(keyData)
      setUserKeyData(keyData);
    }
  }, [keyData]);
    return (
      <div className="right-component">
        {
          userKeyData &&
          userKeyData.map((data) => (
            <Stat
              key={data.title}
              icon={data.icon}
              count={data.count}
              unit={data.unit}
              title={data.title}
            />
        ))}
      </div>
    );
  }
  
  export default Right;
  