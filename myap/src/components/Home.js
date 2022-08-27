import React from 'react'
import {  Link, useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/")
    localStorage.clear();
    window.location.reload();
}
  return (
    <div>
      <>

      <h1>welcome to home page</h1>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link  class="nav-link active" to="/">Home</Link>          

        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Add_Product</a> */}
          <Link  class="nav-link active" to="/add">Add_Product</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
            <button onClick={handleClick}>Logout</button>
</nav>
      </>
     
    </div>
  )
}

export default Home
