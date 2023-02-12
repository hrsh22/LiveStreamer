# Live Streamer
LiveStreamer is a decentralized streaming platform that gives viewers generative NFT and allows them to support the creators through subscriptions. Various technologies are incorporated into the platform to provide users with a comprehensive and engaging experience. As the platform's underlying infrastructure, Livepeer supports scalable and low-cost live streaming to a global audience.


<hr/>

[![](https://i.ibb.co/7kYR0v5/Screenshot-33-4.png)](https://drive.google.com/file/d/1wZm1RPq9dYeWT5QZniQEjFxXLubuenkn/view?usp=sharing )
[![](https://i.ibb.co/0t4bgFn/FVB.png)](https://docs.google.com/presentation/d/1N2zJrQbRtcU5fjORpFprkB0AUkldNkTboZIUJXnt6_Y/edit?usp=sharing)

<hr/>

On LiveStreamer, streamers are able to create a new stream using Livepeer. They have the option to upload an NFT to accompany their stream. The stream data, along with any related URLs and information for future NFT generation, is stored in IPF. The IPFS hash is then stored on the blockchain as an ERC721 token, using Polygon blockchain. This allows for the stream and its associated data to be securely and transparently recorded and stored on the blockchain.

The viewer has the option to generate a viewer NFT through NFTPort, which is minted without the need for gas. The NFT is published to the Polygon blockchain and is generated using an NFT image uploaded from IPFS, the address of the streamer and viewer, and the viewer's avatar if they have set one through ENS. Generative NFTs are created in this manner every time they are requested, allowing for the creation of unique and collectible items for the viewer 

## Goals
Some potential goals for the LiveStreamer includes:
- Expanding the user base: One potential goal is to increase its user base and attract more streamers and viewers to the platform. To make the platform more appealing to potential users, marketing efforts and outreach can be undertaken, as well as adding new features and continuously improving the platform.
- User engagement and retention: A key goal for any platform is to keep users engaged and coming back to the platform. LiveStreamer could aim to increase user engagement and retention through the implementation of new features which aim towards better interaction between creators and audience.
- Innovation and differentiation: As the live streaming space is highly competitive, LiveStreamer may aim to differentiate itself from other platforms through the implementation of innovative and unique features. This could help the platform stand out in the market and attract a dedicated user base.

# Technology we used

- Huddle01 provides a feature that lets users turn on their cameras while watching a stream, providing an extra layer of immersiveness and interactivity for both the streamer and the audience. An optional feature, users can activate or deactivate it at their discretion.

- The Ethereum Name Service (ENS) maps usernames to Ethereum wallet addresses on the platform. It provides a more user-friendly experience since users do not have to enter the wallet address every time they want to mint NFTs. Moreover, it adds an extra layer of security, since users can protect their wallet addresses with memorable and unique usernames.

- NFTPort enables live streams to be transformed into non-fungible tokens (NFTs). This enables streamers to sell their streams as unique, collectible items, generating additional revenue for them and giving the platform a new dimension. NFTPort is also used for retrieving the Live Streams minted by users.

- The Polygon blockchain provides streamers with security, transparency, and additional monetization opportunities, as well as adding a collectible aspect to their platform. This feature, enabled through the integration of NFTPort, adds a unique and collectible aspect to the LiveStreamer application and further sets it apart from other live streaming platforms.

- During live streams, users can communicate in real-time through XMTP, with the goal of cultivating a sense of community. Users can also chat with anyone on the platform, adding a social aspect and making connections beyond those watching the same stream.

- Users receive notifications via push protocol through the application. This can be used to alert users to stream starts, platform updates, and other important information. In addition to chat support, users can communicate efficiently with the support team regarding issues or questions.

- The LiveStreamer application combines these technologies to create a comprehensive and engaging platform for its users. Some advantages of the application include:

- - Low-cost and scalable streaming thanks to the use of Livepeer
- - Increased interactivity and immersiveness with the optional camera feature provided by Huddle01
- - User-friendly experience with the integration of ENS for username-to-wallet address mapping
- - Additional revenue stream for streamers with the ability to sell streams as NFTs through NFTPort
- - Strong sense of community and social connections thanks to the real-time chat functionality provided by XMTP
- - Efficient communication and support through the use of Push protocol for notifications and chat support.

Overall, LiveStreamer provides a unique and engaging experience for its users through the integration of various technologies.



# Installation

Clone this repo by running 
```yaml
git clone https://github.com/ayushete02/LiveStreamer
```
```yaml
cd LiveStreamer
```
```yaml
npm install
```
```yaml
npm run dev
```
