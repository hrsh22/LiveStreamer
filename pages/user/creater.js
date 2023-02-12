import {
  Button,
  Result,
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Input,
  notification,
  Space,
  Card,
  Typography,
} from "antd";
import {
  EditOutlined,
  SmileOutlined,
  PlusCircleTwoTone,
  EllipsisOutlined,
  PlayCircleOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text, Link } = Typography;
const { Meta } = Card;

import React from "react";
import axios from "axios";

import Nftmodal from "../../components/nftmodal";
import Navbar from "../../components/navbar";
import Item from "antd/lib/list/Item";
import Mintnft from "../../components/mintnft";

class Creater extends React.Component {
  constructor(props) {
    super(props);
    console.log("address", this.props.address);
    this.state = {
      newStreamFormBody: null,
      loadMintNFTComponent: false,
      modalVisible: false,
      createStreamResponse: null,
      ipfsHash: null,
      address: null,
      cardItems: [
        // {
        //   stream_name: "Stream Name",
        //   ipfsHash: "QmSFD715swS5AqTxU1nJBHZisxtuSD18ygRE4ix9UBbjiU",
        //   nft_image: "https://ipfs.io/ipfs/QmdvCgGPXc2XfDTvffxvGTYPQsD7J4THcTE1R5L66WStY3",
        //   ingest_url: "rtmp://rtmp.livepeer.com/live/",
        //   stream_key: "3a8d-vq9q-dj24-tenr",
        //   playback_url: "https://cdn.livepeer.com/hls/3a8dsveuy8dc3fxi/index.m3u8",
        //   active: true
        // },
        // {
        //   stream_name: "Stream Name",
        //   ipfsHash: "QmSFD715swS5AqTxU1nJBHZisxtuSD18ygRE4ix9UBbjiU",
        //   nft_image: "https://ipfs.io/ipfs/QmW93a1P5ADoUmjtjnCnrmuDHmKM9M9xEPFJbtG2hAVzSG",
        //   ingest_url: "rtmp://rtmp.livepeer.com/live/",
        //   stream_key: "3a8d-vq9q-dj24-tenr",
        //   playback_url: "https://cdn.livepeer.com/hls/3a8dsveuy8dc3fxi/index.m3u8",
        //   active: true
        // },
        // {
        //   stream_name: "Stream Name",
        //   ipfsHash: "QmSFD715swS5AqTxU1nJBHZisxtuSD18ygRE4ix9UBbjiU",
        //   nft_image: "https://ipfs.io/ipfs/QmW93a1P5ADoUmjtjnCnrmuDHmKM9M9xEPFJbtG2hAVzSG",
        //   ingest_url: "rtmp://rtmp.livepeer.com/live/",
        //   stream_key: "3a8d-vq9q-dj24-tenr",
        //   playback_url: "https://cdn.livepeer.com/hls/3a8dsveuy8dc3fxi/index.m3u8",
        //   active: true
        // },
        // {
        //   stream_name: "Stream Name",
        //   ipfsHash: "QmSFD715swS5AqTxU1nJBHZisxtuSD18ygRE4ix9UBbjiU",
        //   nft_image: "https://ipfs.io/ipfs/QmW93a1P5ADoUmjtjnCnrmuDHmKM9M9xEPFJbtG2hAVzSG",
        //   ingest_url: "rtmp://rtmp.livepeer.com/live/",
        //   stream_key: "3a8d-vq9q-dj24-tenr",
        //   playback_url: "https://cdn.livepeer.com/hls/3a8dsveuy8dc3fxi/index.m3u8",
        //   active: true
        // },
        // {
        //   stream_name: "Stream Name",
        //   ipfsHash: "QmSFD715swS5AqTxU1nJBHZisxtuSD18ygRE4ix9UBbjiU",
        //   nft_image:
        //     "https://ipfs.io/ipfs/QmW93a1P5ADoUmjtjnCnrmuDHmKM9M9xEPFJbtG2hAVzSG",
        //   ingest_url: "rtmp://rtmp.livepeer.com/live/",
        //   stream_key: "3a8d-vq9q-dj24-tenr",
        //   playback_url:
        //     "https://cdn.livepeer.com/hls/3a8dsveuy8dc3fxi/index.m3u8",
        //   active: true,
        // },
      ],
    };
  }
  
  componentDidMount() {
    this.getData();
    this.setAddress();
  }

  getData = async () => {
    console.log("getData");
    const NETWORK_URL = 42; // Kovan
    const address = this.props.address;
    const NFT_NAME = "STMR";

    const options = {
      method: "GET",
      url: `https://api.covalenthq.com/v1/${NETWORK_URL}/address/${address}/balances_v2/`,
      params: { nft: 'true', key: process.env.NEXT_PUBLIC_COVALENT_API }
    };

    const data = await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log("covalent data", data);

    const nftItems = [];
    const tokenUrls = [];

    if (data) {
      data.data.items.forEach((element) => {
        console.log(element.contract_ticker_symbol, element.nft_data);
        if (element.contract_ticker_symbol === NFT_NAME && element.nft_data) {
          element.nft_data.forEach((nft) => {
            console.log("nft tokenurl", nft.token_url);
            const resp = axios.get(nft.token_url);
            tokenUrls.push(nft.token_url);
            nftItems.push(resp);
            // const response = await resp.json();
            // console.log(response, "is the response")

            // nftItems.push({
            //   ingest_url: response.ingest_url,
            //   nft_description: response.nft_description,
            //   nft_image: response.nft_image,
            //   nft_name: response.nft_name,
            //   nft_symbol: response.nft_symbol,
            //   playback_url: response.playback_url,
            //   stream_key: response.stream_key,
            // })
          });
        }
      });

      const resps = await Promise.all(nftItems);

      console.log("nftItems", nftItems, resps);

      const dataGot = [];
      resps.forEach((resp) => {
        const respData = resp.data;
        const ipfsHash = tokenUrls.shift();
        dataGot.push({ ...respData, ipfsHash });
      });

      console.log(dataGot, "is the data got");

      const { cardItems } = this.state;
      this.setState({ cardItems: dataGot });
    }
  };

  createStream = async () => {
    console.log(
      "NEXT_PUBLIC_LIVEPEER_API_KEY",
      process.env.NEXT_PUBLIC_LIVEPEER_API_KEY
    );
    let response = {
      statusCode: null,
      data: null,
      error: null,
    };

    try {
      const createStreamResponse = await axios.post(
        "https://livepeer.com/api/stream",
        {
          name: "test stream",
          profiles: [
            {
              name: "720p",
              bitrate: 2000000,
              fps: 30,
              width: 1280,
              height: 720,
            },
            {
              name: "480p",
              bitrate: 1000000,
              fps: 30,
              width: 854,
              height: 480,
            },
            {
              name: "360p",
              bitrate: 500000,
              fps: 30,
              width: 640,
              height: 360,
            },
          ],
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${process.env.NEXT_PUBLIC_LIVEPEER_API_KEY}`, // API Key needs to be passed as a header
          },
        }
      );

      if (createStreamResponse && createStreamResponse.data) {
        console.log("createStreamResponse", createStreamResponse.data);

        response.statusCode = 200;
        response.data = createStreamResponse.data;
        // this.pinJSONToIPFS(createStreamResponse.data);
        this.setState({
          createStreamResponse: response,
          modalVisible: true,
        });
      } else {
        response.statusCode = 500;
        response.error = "Something went wrong";
      }
    } catch (error) {
      console.log("error", error);
      response.statusCode = 500;

      // Handles Invalid API key error
      // if (error.response.status === 403) {
      //   response.statusCode = 403;
      // }
      response.error = error;
      this.setState({
        createStreamResponse: response,
      });
    }
  };

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Livestream created",
      description: `Successfully created livestream view at ${this.ipfsHash}.`,
    });
  };

  onIPFSUpload = (ipfsHash, nftImage, newStreamFormBody) => {
    const { createStreamResponse } = this.state;
    console.log(
      "ipfsHash",
      ipfsHash,
      "nftImage",
      nftImage,
      "newStreamFormBody",
      newStreamFormBody
    );
    const { cardItems } = this.state;
    cardItems.unshift({
      stream_name: newStreamFormBody.stream_name,
      ipfsHash: `https://ipfs.io/ipfs/${ipfsHash}`,
      nft_image: `https://ipfs.io/ipfs/${nftImage}`,
      ingest_url: "rtmp://rtmp.livepeer.com/live/",
      stream_key: createStreamResponse.data.streamKey,
      playback_url: `https://cdn.livepeer.com/hls/${createStreamResponse.data.playbackId}/index.m3u8`,
      active: true,
      newly_added: true,
    });
    this.setState({
      ipfsHash,
      cardItems,
      newStreamFormBody,
    });
    this.openNotificationWithIcon("success");
  };

  setAddress = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    this.setState({
      address: accounts[0],
    });
  };

  connectWallet = async () => {
    console.log("connectWallet");
    if (this.state.address) return null;
    const { ethereum } = window;
    await ethereum.request({ method: "eth_requestAccounts" });
    await this.setAddress();
  };

  onMintButtonClick = () => {
    console.log("onMintButtonClick");
    this.setState({
      loadMintNFTComponent: true,
    });
  };

  render() {
    const { cardItems, address, loadMintNFTComponent, createStreamResponse } =
      this.state;
    console.log("loadMintNFTComponent", loadMintNFTComponent);
    return (
      <>
        <Navbar />
        <Layout>
          <Content
            className="site-layout"
            style={{ padding: "0 40px", marginTop: 40 }}
          >
              <div className="relative">
  <div className="absolute top-0 right-5">
                <button
                  onClick={this.createStream}
                  type="button"
                  className=" px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Start New Stream
                </button>
                  
                  </div>
              </div>
              <br /><br />
         
            <div className="" style={{ padding: 20 }}>
              <br />

              {cardItems.length == 0 ? (
                <>
                  <Title level={1}>🍜 Streams you created</Title>
                  <Result
                    icon={<SmileOutlined />}
                    title="You have no Streams, Create New!"
                    extra={
                      <button
                        onClick={this.createStream}
                        type="button"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Start New Stream
                      </button>
                    }
                  />
                </>
              ) : (
                <div className="">
                  <div className="block p-6 rounded-lg shadow-lg bg-white ">
                  <Title level={1}>🍜 Streams you created</Title>
                  <hr />
                  <br />
                    <Row color="red">
                      {cardItems.map((item, index) => {
                        return (
                          <Col span={5} key={index} offset={1}>
                            <Card
                              hoverable
                              style={{ width: 300 }}
                              // cover={<img alt="example" src={`${item.nft_image}`} />}
                              cover={
                                <img alt="example" src={`${item.nft_image}`} />
                              }
                              actions={[
                                                                
                                  <a   type="button" href={`/play/${item.ipfsHash.substring(21)}`}  target="_blank"  rel="noreferrer"
                  className=" px-5 py-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                key="play"> Go to Stream </a>,
                                item.newly_added && (
                                  <Mintnft
                                    address={address}
                                    ipfsHash={item.ipfsHash.substring(21)}
                                  />
                                ),
                              ]}
                            >
                              <Meta
                                title={item.stream_name}
                                description={
                                  item.newly_added && (
                                    <div>
                                      ingest url: {item.ingest_url}.
                                      <br />
                                      stream key: {item.stream_key}.
                                      <br />
                                      playback_url: {item.playback_url}
                                    </div>
                                  )
                                }
                              />
                            </Card>
                            <br />
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              )}
              <br /><br /><br />

              {cardItems.length == 0 ? (<>
              <Title level={1}>👏 Streams you were part of</Title>
                <Result

                  icon={<PlusCircleTwoTone />}
                  title="you were not part of any Streams, Add One!"
                  extra={
                    <button
                      onClick={this.createStream}
                      type="button"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Add Stream
                    </button>
                  }
                  />
                  </>
              ) : (
                <div className="">
                <div className="block p-6 rounded-lg shadow-lg bg-white ">
              <Title level={1}>👏 Streams you were part of</Title><hr /><br />
                <Row>
                  {cardItems.map((item, index) => {
                    return (
                      <Col span={3} key={index} offset={1}>
                        <Card
                          hoverable
                          style={{ width: 200 }}
                          cover={
                            <img
                              alt="example"
                              style={{ padding: "10px" }}
                              src={`${item.nft_image}`}
                            />
                          }
                        >
                          <Meta
                            title="Live Stream"
                            description="You were part of this live stream"
                          />
                        </Card>
                        <br />
                      </Col>
                    );
                  })}
                </Row>
                </div>
                </div>
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
          © 2023 LiveStreamer, Inc. All rights reserved.
          </Footer>
        </Layout>

        {createStreamResponse && createStreamResponse.data && (
          <Nftmodal
            visible={this.state.modalVisible}
            onClose={() => this.setState({ modalVisible: false })}
            onIPFSUpload={this.onIPFSUpload}
            stream={createStreamResponse.data}
            streamerAddress={this.props.address}
          />
        )}
      </>
    );
  }
}

export default Creater;
