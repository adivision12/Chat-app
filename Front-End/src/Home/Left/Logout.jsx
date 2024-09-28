import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

import { Navigate } from 'react-router';
export default function Logout() {
  

    // const handleClick=()=>{
    //   // localStorage.removeItem("userInfo");
    // }
    // const [login,setLogin]=useState(true);
    // function handleChange(){
    //   console.log("logout clicked")
    //   setLogin(false);
      
    // }
    // if(!login){
    //   toast('Logout Successfully!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    // }
    
    const handleSubmit=async()=>{
      const response = await fetch("http://localhost:8080/user/logout", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
    })
    
    const data = await response.json();
    // console.log(data);
    toast.success("logout successfully");

    // localStorage.setItem("userInfo",JSON.stringify(data));
    localStorage.removeItem("userInfo")
    window.location.reload();

    // <Navigate to={"/login"}/>
    
    }
    
  return (<>
    <Toaster />
    <button onClick={handleSubmit}  className='bg-slate-950 text-2xl flex flex-col justify-end bottom-4'><a href="http://localhost:5173/login"><i  className="fa-solid fa-right-from-bracket"></i></a></button>
 </>
  )
}
