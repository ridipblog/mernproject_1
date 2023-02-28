import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const loginUser= async(e)=>{
        e.preventDefault();
        const res=await fetch('/singin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data=await res.json();
        if(res.status===422 || !data){
            console.log("Invalid Login")
        }
        else{
            console.log("Login Successful");
            navigate('/');
        }
    }
    return (
        <>
        <form method="post">
            <div className="form-outline mb-4">
                <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
            </div>

            <button type="submit" onClick={loginUser} className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to="/singup">Register</Link></p>
                <p>or sign up with:</p>
                
            </div>
        </form>
        </>
    )
}
export default Login;