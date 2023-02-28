import React,{useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
const Singup = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:""
    });
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }
    const PostData=async(e)=>{
        e.preventDefault();
        const {name,email,phone,work,password}=user;
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password
            })
        });
        const data=await res.json();
        if(res.status===422 || !data){
            console.log("Invalid Data");
        }
        else{
            console.log("Registration Succesful ");
            navigate("/login");
        }
        
    }
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form method="POST" className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name='name' value={user.name} onChange={handleInputs} className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" name='email' id="form3Example3c" value={user.email} onChange={handleInputs} className="form-control" />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name='phone' id="form3Example4c" value={user.phone} onChange={handleInputs} className="form-control" />
                                                        <label className="form-label" for="form4Example3c">Your Phone</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name='work' id="form5Example3c" value={user.work} onChange={handleInputs} className="form-control" />
                                                        <label className="form-label" for="form5Example3c">Your Work</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" name='password' id="form6Example4c" value={user.password} onChange={handleInputs} className="form-control" />
                                                        <label className="form-label" for="form6Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit"  onClick={PostData} className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>
                                            <Link to='/login' className='singup-image-link'>Login</Link>


                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Singup;