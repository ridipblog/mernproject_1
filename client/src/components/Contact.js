import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: ""
    })
    const [messData,setMessData]=useState({
        subject:"",message:""
    })
    const [fillError,setFillError]=useState('');
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]:value});
        setMessData({...messData,[name]:value})
    }
    const SendMessage=async(e)=>{
        e.preventDefault();
        const {name,email}=user;
        const {subject,message}=messData;
        const res=await fetch('/sendContact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,subject,message
            })
        });
        const data=await res.json();
        if(res.status===422 || !data){
            console.log("Invalid Contact");
            setFillError(data.mess);
        }
        else{
            setFillError("Message Send !")
        }
    }
    useEffect(() => {
        const callContactPage = async () => {
            try {
                const res = await fetch('/contact', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Cotent-Type": "application/json"
                    },
                    credentials: "include"
                });
                const data = await res.json();
                setUser(data);
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            }
            catch (err) {
                navigate('/login');
            }
        }
        callContactPage();
    }, [navigate]);
    return (
        <>
            <section className="mb-4 text-center">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5 text-center">
                        <form id="contact-form" name="contact-form" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" onChange={handleInputs} value={user.name} className="form-control" />
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" onChange={handleInputs} value={user.email} className="form-control" />
                                        <label for="email" className="">Your email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" onChange={handleInputs} value={messData.subject} className="form-control" />
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" onChange={handleInputs} value={messData.message} className="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                            <div className="text-center text-md-left">
                                <button type='submit' onClick={SendMessage} className="btn btn-primary">Send</button>
                            </div>
                        </form>
                        <div className="status"></div>
                    </div>
                </div>
                <h1>{fillError}</h1>
            </section>

        </>
    )
}
export default Contact;