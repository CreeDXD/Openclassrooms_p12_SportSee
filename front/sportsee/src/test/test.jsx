import TestGraph from '../test/testGraph'
import OtherGraph from '../test/OtherGraph'
import RadialBarChartTest from '../test/other_otherGraph'
function test(){
   return(
      <div className='container_test'>
         <TestGraph/>
         <div className='test_container--OtherGraph'>
            <OtherGraph/>
            <OtherGraph/>
            <RadialBarChartTest/>
         </div>
      </div>
      
   )
}

export default test