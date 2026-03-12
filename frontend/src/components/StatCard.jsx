function StatCard({title,value,desc}){

return(

<div className="stat-card">

<h4>{title}</h4>

<h2>{value}</h2>

<p>{desc}</p>

</div>

)

}

export default StatCard