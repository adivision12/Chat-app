import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Input from './Input'
import userConversation from '../../stateManage/userConversation.js';
import { useSocketContext } from '../../Context/SocketContext.jsx';
import NoChat from './NoChat.jsx';

export default function Right() {
  const { selectedConversation,  } = userConversation();
  const { socket, noti, setNoti ,isSideBar} = useSocketContext();

// Home page notification
if (socket && socket.connected) {
  socket.on("rec-message", (newMessage) => {
  
    if (!selectedConversation) {
      if(noti && noti.map((n)=>{
        if(n.senderId===newMessage.senderId) noti.pop(n.senderId)
      }))
      setNoti([...noti, newMessage])
    }

  })
}



  return (<>
      <div  className={` w-full  ${isSideBar?'max-[500px]:hidden':''} `}>
    {selectedConversation ? (<div className='w-full  h-screen border-2 border-red-900  bg-slate-800 text-white '>
     
      <ChatUser />

      <Messages />
      <Input/>
    </div>) :(
      <div className='w-full h-screen border-2 border-red-900  bg-slate-800 text-white users'>
              <NoChat/>

      </div>
    )
    
    }

  </div>
  </>
  )
}
