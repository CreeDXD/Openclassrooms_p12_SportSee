const Activity =(activites)=>{
    
    return(
        
        activites.map((activity) =>({
            ...activity,
            day: activity.day.substring(activity.day.length - 1), 
        }))
    )
}
export default Activity