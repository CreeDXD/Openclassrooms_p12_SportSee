import ActiviteQuotidienne from './Graphs/ActiviteQuotidienne'
import Graph from '../components/Graph'

function Left() {
    return (
      <div className="left-component">
          <div className='activite'>
            <ActiviteQuotidienne/>
          </div>
          
          <Graph/>
      </div>
    );
  }
  
  export default Left;
  