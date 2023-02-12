# Live Streamer
LiveStreamer is a decentralized streaming platform that empowers viewers with generative NFTs and enables them to support creators through subscriptions. It leverages various technologies to provide an all-inclusive and captivating experience for users. The platform is built on Livepeer, which supports efficient and low-cost live streaming to a worldwide audience.

On LiveStreamer, streamers have the option to start a new stream using Livepeer and upload an accompanying NFT. The stream information, along with any relevant URLs and details for future NFT creation, is stored on IPFS. The IPFS hash is then recorded on the blockchain as an ERC721 token through Polygon blockchain, ensuring the secure and transparent storage of stream and associated data.

Viewers can also generate their own NFTs through NFTPort without incurring gas costs. The NFT is minted and published to the Polygon blockchain and is generated using an NFT image uploaded from IPFS, the streamer's and viewer's addresses, and the viewer's avatar if they have set it through ENS. This process results in the creation of unique and collectible NFTs every time they are requested.

## Goals

- Expanding user base: LiveStreamer aims to attract more streamers and viewers by increasing its user base and enhancing its platform through marketing efforts, new features, and continuous improvement.
- User engagement and retention: The platform strives to keep users engaged and coming back through the implementation of features that enhance interaction between creators and audience.
- Innovation and differentiation: LiveStreamer seeks to distinguish itself from other live streaming platforms by incorporating innovative and unique features. This helps the platform stand out in a highly competitive market and attract a dedicated user base.

## Technology Used

- Huddle01 allows users to turn on their cameras during streams, adding an immersive and interactive layer for both streamer and audience. This is an optional feature that users can enable or disable at their discretion.

- Ethereum Name Service (ENS) maps usernames to Ethereum wallet addresses and enhances user experience by eliminating the need for entering wallet addresses every time NFTs are minted. It also provides extra security with memorable and unique usernames.

- NFTPort transforms live streams into non-fungible tokens (NFTs), allowing streamers to sell their streams as unique and collectible items, generating additional revenue and adding a new dimension to the platform. NFTPort is also used to retrieve user-minted live streams.

- The Polygon blockchain offers security, transparency, and monetization opportunities for streamers, as well as adding a collectible aspect to the platform through the integration of NFTPort.

- XMTP enables real-time communication during live streams, fostering a sense of community and allowing users to chat with anyone on the platform.

- Push protocol is used for notifications and efficient communication with the support team through chat support.

- LiveStreamer integrates these technologies to create a comprehensive and engaging platform for users, including:
  - Low-cost and scalable streaming through Livepeer
  - Immersive and interactive experience with the optional camera feature from Huddle01
  - User-friendly experience with username-to-wallet mapping through ENS
  - Additional revenue stream for streamers with NFT sales through NFTPort
  - Strong sense of community and social connections through real-time chat with XMTP
  - Efficient communication and support through push notifications and chat support.

In conclusion, LiveStreamer provides a one-of-a-kind experience for its users through its integration of various technologies.

## Installing

1. Clone the repository to your local machine

```
https://github.com/hrsh22/LiveStreamer.git
```
 
2. Navigate to the project directory

```
cd LiveStreamer
```

3. Install the dependencies

```
npm install
```

## Running the App
Start the development server with the following command:
```
npm run dev
```
## Demo

- [Demo Video](https://youtu.be/JZWI3lPLbnI)

- [Presentation](https://docs.google.com/presentation/d/1N2zJrQbRtcU5fjORpFprkB0AUkldNkTboZIUJXnt6_Y/edit?usp=sharing)

