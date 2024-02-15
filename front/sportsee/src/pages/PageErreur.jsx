import { useNavigate } from "react-router-dom";

function PageErreur() {
  const navigate = useNavigate()
  
  const handleRetry = (e) =>{
    e.preventDefault()
    navigate('/')
  }
  return (
    <div>
      <h1>Vous avez atterri sur la Page Erreur</h1>
      <a href="notused" onClick={handleRetry}>Clickez ici pour ressayer</a>
    </div>
    );
}

export default PageErreur;
