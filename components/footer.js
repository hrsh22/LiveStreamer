import * as PushAPI from "@pushprotocol/restapi";
import React, { useState, useEffect } from "react";
import { Button, FloatButton,Popover, Card, Drawer } from 'antd';
import { useAccount } from "wagmi";
import { Chat } from "@pushprotocol/uiweb";

export const Footer = () => {
  const [open, setOpen] = useState(false);

  const [notification, SetNotification] = useState([]);
  const NotificationReceiver = async (props) => {
    const notifications = await PushAPI.user.getFeeds({
      user: "eip155:5:0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7", // user address in CAIP
      env: "staging",
    });
    SetNotification(notifications);
  };

  const showDrawer = () => {
    NotificationReceiver();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="bottom-10  z-45 right-40 mr-6 cursor-pointer fixed">
        <div onClick={showDrawer} className=" inline-flex relative h-4 w-4">
          <div className="px-5 py-7 bg-indigo-400 flex items-center justify-center text-center rounded-2xl shadow-lg">
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="mx-auto text-white w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Drawer  title="Push Notification ({0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7})" width={'700px'} placement="right" onClose={onClose} open={open}>

          {notification.map((item, index) => {
            console.log(notification);
            return (
            
              <Card key='key' className="mt-3" type="inner" title={item['app']} extra={<a href="#"><b>{item['blockchain']}</b></a>}>
                {item['message']}
              </Card>
      
            );
          })}
      </Drawer>

      <Chat className='z-50'
        account={address} //user address
        supportAddress="0xC76139fcB9e4952CE9Fb3183C6c3af69534233FE" //support address
        apiKey={process.env.NEXT_PUBLIC_PUSH_API}
        env="staging"
        modalTitle='Support team'
      />

    </>
  )
}


export default Footer;
