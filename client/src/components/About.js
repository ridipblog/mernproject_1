import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const callAboutPage = async () => {
            try {
                const res = await fetch('/about', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                const data = await res.json();
                setUserData(data);
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            } catch (err) {
                console.log(err);
                navigate('/login');
            }
        }
        callAboutPage();
    }, [navigate]);
    return (
        <>
            <div className='container'>
                <form method='GET'>
                    <div className="card text-center">
                        <img src="..." className="card-img-top" alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">{userData.name}</h5>
                            <p className="card-text">{userData.email}</p>
                            <p className="card-text">{userData.phone}</p>
                            <p className="card-text">{userData.work}</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default About;