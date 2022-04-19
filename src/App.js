import React, { useState } from 'react';
import {ethers} from 'ethers';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import SubHeader from './components/SubHeader';
import CategoryList from './components/CategoryList';
//import VotingProxy from '../../Back-end/artifacts/contracts/Voting_Proxy.sol/VotingProxy.json';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const AppDiv = styled.div`
  text-align: center;
  background-color: rgb(20,56,97);
  color: #cccccc;
`;

function App(props) {

  var canInteract = false;
  //const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
  const [walletAddress, setWalletAddress] = useState("");
  //const [categoryData, setCategoryData] = useState([]);

  const connectWallet = async () => {
    if(window.ethereum) {  
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        //const signer = provider.getSigner();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const {chainId} = await provider.getNetwork();
        if(chainId === 4){
          setWalletAddress(accounts[0]);
          const canInteract = true;
        } else {
          setWalletAddress("Please connect to the Rinkeby Network");
          const canInteract = false;
        }
      } catch (error) {
        console.log('Error connecting...');
      }
    } else{
      setWalletAddress("Please install MetaMask");
    }
  };

  /*const componentDidMount = async() => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const candidateData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: coin.quotes.USD.price,
      };
    })
    setCategoryData(candidateData);
  }

  useEffect(function() {
    if (categoryData.length === 0) {
      //component did mount
      componentDidMount();
    }
  }); */

  const handleVote = () => {
    //const signer = provider.getSigner();
  }

  return (
    <AppDiv>
      <Header/>
      <SubHeader
        connectWallet={connectWallet}
        walletAddress={walletAddress}/>
      <CategoryList/>
    </AppDiv>
  );
}

export default App;