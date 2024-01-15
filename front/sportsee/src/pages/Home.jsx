import '../style/css/index.css'
import Header from '../components/Header';
import Nav from '../components/Navigation'
import Main from '../components/Main'

function Home() {
  
  return (
    <div className="App">
      <Header/>
      <div className='nav_main'>
        <Nav/>
        <Main/>
      </div>
    </div>
  );
}

export default Home;
