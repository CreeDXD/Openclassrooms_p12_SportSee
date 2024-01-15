import { RadialBarChart, RadialBar,CartesianGrid, Legend, ResponsiveContainer,Tooltip } from 'recharts';


function OtherGraph(){
    console.log('pierre')

    const data = [
        { name: 'Category A', value: 200 },
        { name: 'Category B', value: 350 },
        { name: 'Category C', value: 150 },
        { name: 'Category D', value: 100 },
        { name: 'Category E', value: 250 },
      ];
      
    return(
        <ResponsiveContainer  width="30%" aspect={1}>
            <RadialBarChart width={600} height={300} data={data}>
                <CartesianGrid/>
                <RadialBar minAngle={15} label={{ fill: '#fff', position: 'insideStart' }} background clockWise dataKey="value" />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default OtherGraph