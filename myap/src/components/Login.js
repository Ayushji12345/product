import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
// import './LoginWithLocalStorage.css';
function Login(){
    const navigate = useNavigate();
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        navigate('/home')
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
   
    return(
     
        <div>
        <h1>login</h1>
            {
                getEmail&&getPassword?
                <Home/>:
            <form onSubmit={handleSubmit}>
                <div>
                  Email :<input type="text" ref={email} />
                </div>
                <div>
                   password: <input type="password" ref={password} />
                </div>
                <button>Login</button>
            </form>
            }
        </div>
    );
}
export default Login;