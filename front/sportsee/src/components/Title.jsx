// import data from '../mock/Info.json'
import { ApiUser } from "../service/ApiUser";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Title() {
  const params = useParams();
  const [user, setUser] = useState();

  const { userInfos } = ApiUser(params.id);

  useEffect(() => {
    if (userInfos) {
      setUser(userInfos);
    }
  }, [userInfos]);
    return (
      <div className="title">
          <h1>Bonjour <span>{ user ? user.firstName : ''}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );
  }
  
  export default Title;
  