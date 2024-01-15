export function Stat ({icon,count,unit,title}){
    return(
        <article className="stat">
            <img src={icon} alt={title} />
            <div>
                <h4>{count}{unit}</h4>
                <p>{title}</p>
            </div>
        </article>
    )
}