import React from 'react';
import Navbar from '../components/navbar'
import { Conversation } from '../components/xmtp/Conversation';
const XMTPchat = () => {
  return (
    <div className='shadow h-screen overflow-hidden'>
         <Navbar/>
     <Conversation/>
       </div>
  );
}

export default XMTPchat;
