import logo from '../assets/logo.png'

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo du site" />
        <nav>
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
