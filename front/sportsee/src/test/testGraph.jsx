import testGraph from '../test/testGraph'
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

function test(){
    console.log('pierre')

    const data = [
        { name: 'Category A', value: 20 },
        { name: 'Category B', value: 35 },
        { name: 'Category C', value: 15 },
        { name: 'Category D', value: 10 },
        { name: 'Category E', value: 25 },
      ];
      
   return(
    <ResponsiveContainer className="responsivecontainer" width="70%" aspect={3.5}>
        <BarChart  data={data}>
            <XAxis dataKey="name" tickLine={false}   />
            <YAxis orientation="right"/>
            <CartesianGrid />        
            <Bar dataKey="value" fill="red" radius={[6, 6, 0, 0]} barSize={10} />
        </BarChart>   
    </ResponsiveContainer>
   )
}

export default test