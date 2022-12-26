import React from 'react'
import * as PushAPI from "@pushprotocol/restapi";


const Receiver = async (props) => {

    const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:5:0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7', // user address in CAIP
        env: 'staging'
      });
      console.log("Notifications: ", notifications);
      return notifications;
}

export default function ReceiveNotification(props) {
    Receiver();
  return (
    <div>ReceiveNotification</div>
  )
}
