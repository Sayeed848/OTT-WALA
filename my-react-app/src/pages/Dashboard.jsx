import { Navigate, useNavigate } from "react-router-dom"

function Dashboard() {
let navigate=useNavigate()
  return (  <div className="d-flex justify-content-center align-items-center">
    <div className='card bg-dark text-center  'style={{height:"300px", width:"300px", color:"yellow"}}><h1>
      Welcome Back User !<br /> 
       <p>Login Successful</p>  
        </h1>
        <button className="btn btn-info" onClick={()=>navigate ("./home")}>Visit Site</button>
        </div></div>

  )
}

export default Dashboard