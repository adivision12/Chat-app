// import React, { useEffect, useState } from 'react'
// import userConversation from '../stateManage/userConversation.js';

// export default function GetMessage() {
//     const [loading,setLoading]=useState(false);
//     const {messages,setMessages,selectedConversation}=userConversation();

//     // useEffect(()=>{
//         setLoading(true);
//         async function sendMsgs(message){
            
//         if(selectedConversation && selectedConversation._id){
//             try {
//                 setLoading(true);
//                     // const token=Cookies.get("token");
//                     const token=JSON.parse(localStorage.getItem("userInfo")).token;
//                     // console.log(token);
//                     console.log("selectedConversation",selectedConversation._id)
//                     // console.log("calling api")
//                     let result = await fetch(`http://localhost:8080/msg/send/${selectedConversation._id}`, {
//                         method: "POST",
//                         Credentials:"include",
//                         headers:{
//                             authorization:`Bearer ${token}`,
//                         },
                
//                 body: JSON.stringify(message),
//                     })
//                      const data = await result.json();
//                     // console.log(data.allUsers);
//                     console.log('mess sent')
//                     setMessages([...messages,data]);
//                     // console.log("data",data);
//                     setLoading(false);
                   
                 
//                 }
//             catch (error) {
//                 console.log(error)
//             }
//         }
//         }
//         sendMsgs();
//     // },[])
//   return (
//     {loading,sendMsgs}
//   )
// }
