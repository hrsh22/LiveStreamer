import React, { useState, useEffect } from "react";
import * as PushAPI from "@pushprotocol/restapi";


export const NotificationShow = () => {
    const [notification, SetNotification] = useState([]);
    const NotificationReceiver = async (props) => {
        const notifications = await PushAPI.user.getFeeds({
            user: "eip155:5:0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7", // user address in CAIP
            env: "staging",
        });
        SetNotification(notifications);
    };
    
        useEffect(() => {
            NotificationReceiver();
        }, []);


    return (
        <div
        style={{ "margin-top": "100px" }}
        class="overflow-x-auto relative shadow-md sm:rounded-lg"
    >
        <table style={{"border":"2px solid black"}}>
        <tr style={{"border":"2px solid black"}}>
          <th>Channel Name</th>
          <th>Message</th>
          <th>Country</th>
        </tr>
        {notification.map((item,index) => {
        return (
        <tr style={{"border":"2px solid black"}}>
          <td>{item['app']}</td>
          <td>{item['message']}</td>
          <td>Germany</td>
        </tr>
            )
    })}
       
      </table>

      
    </div>
    
    );
};

export default NotificationShow;
