// Bs code hai kam nahi karta

import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = "7ED790A1Ac108b9A50e24f5c5E061df59e3673a7"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async (props) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: {title_},
        body: {body_},
      },
      payload: {
        title:{title_},
        body:{body_},
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7", // recipient address
      channel: "eip155:5:0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

export default function Notification(props) {
  return (
    <div>
      <button onClick={sendNotification()}>Click</button>
    </div>
  );
}

Notification();
