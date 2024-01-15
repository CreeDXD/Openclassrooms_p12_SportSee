import yoga from '../assets/icon_yoga.png'
import swim from '../assets/icon_swim.png'
import bike from '../assets/icon_bike.png'
import muscle from '../assets/icon_muscle.png'

function Nav() {
  return (
    <section>
      <nav className="nav_main_nav">
        <img src={yoga} alt="icon yoga" />
        <img src={swim} alt="icon swim" />
        <img src={bike} alt="bike" />
        <img src={muscle} alt="muscle" />
    </nav>
    </section>
    
  );
}

export default Nav;
