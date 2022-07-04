import { useEffect } from "react";

import {  useNavigate} from "react-router-dom";

function Login(){
    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/')

    }
    const navigate=useNavigate();

    useEffect(()=>
    {
        let login=localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    }
    );
    return(
        <div>
            <h1>This is a Login Page</h1>
            <input type="text" placeholder="Email"/>
            <br/>
            <input type="password" placeholder="Password" />
            <br/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;