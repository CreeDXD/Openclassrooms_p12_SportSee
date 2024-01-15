import Objectifs from "./Graphs/Objectifs";
import KPI from './Graphs/KPI'
import Radars from './Graphs/Radar'

function Graph() {
    return (
      <div className="graphs-component">
        <Objectifs/>
        <Radars/>
        <KPI/>
      </div>
    );
  }  
  export default Graph;
  