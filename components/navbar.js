import React, { useState, useEffect } from "react";
import * as PushAPI from "@pushprotocol/restapi";

import {
  Button,
  Drawer,
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
  EllipsisOutlined,
  PlayCircleOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import Footer from '../components/footer'

const { Header, Content } = Layout;
const { Title, Text, Link } = Typography;
const { Meta } = Card;

import axios from "axios";

// import Nftmodal from '../../components/nftmodal';
// import Item from 'antd/lib/list/Item';
// import Mintnft from '../../components/mintnft';

class Navbar extends React.Component {
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
        //   nft_image: "https://ipfs.io/ipfs/QmW93a1P5ADoUmjtjnCnrmuDHmKM9M9xEPFJbtG2hAVzSG",
        //   ingest_url: "rtmp://rtmp.livepeer.com/live/",
        //   stream_key: "3a8d-vq9q-dj24-tenr",
        //   playback_url: "https://cdn.livepeer.com/hls/3a8dsveuy8dc3fxi/index.m3u8",
        //   active: true
        // },
      ],
    };
  }

  componentDidMount() {
    try {
      this.getData();
      this.setAddress();
    } catch (error) {}
  }

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
    // return address;
  };



  render() {
    const { cardItems, address, loadMintNFTComponent, createStreamResponse } =
      this.state;
    console.log("loadMintNFTComponent", loadMintNFTComponent);
    return (
      < >
      
        <section class="fixed z-50 shadow-lg w-full px-8 text-gray-700 bg-white ">
          <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row ">
            <div class="relative flex flex-col md:flex-row">
              <a
                href="/"
                class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
              >
                <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                  Live<span class="text-indigo-600">Streamer</span>
                </span>
              </a>
              <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <a
                  href="/"
                  class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="/user/address"
                  class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  My streams
                </a>
                <a
                  href="/chat"
                  class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
                
              </nav>
            </div>

            <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
              {/* <a href="/user/0x1da502D83c2967cD185E9179376F1edA3DC52922" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Create Stream
                </a> */}
              
              {this.connectWallet() ? (
                <a
                  href={`/user/${address}`}
                  type="button"
                  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  {address}
                </a>
              ) : (
                <a
                  onClick={this.connectWallet}
                  type="button"
                  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Connect Wallet
                </a>
              )}
            </div>
          </div>
        </section>
        <div>Navbar - Undefine Text</div><br /><br /><br />
        <Footer />
      </>
    );
  }
}
export default Navbar;
