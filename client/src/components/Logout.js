import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate=useNavigate();
    useEffect(() => {
        const callLogout = async () => {
            try {
                const res = await fetch('/logout', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                if(res.status===201){
                    console.log("Ok");
                    navigate('/login');
                }else{
                    console.log("Not Ok")
                }
            }
            catch(err){
                console.log(err)
            }
        }
        callLogout();
    },[navigate])
    return (
        <>
        </>
    )
}
export default Logout;