import React, { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import SubHeader from './components/SubHeader';
import CategoryList from './components/CategoryList';
import votingAbi from './abi/VotingProxy.json';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const BigNumber = require('bignumber.js');

const AppDiv = styled.div`
  text-align: center;
  background-color: rgb(20,56,9);
  color: #cccccc;
`;

function App(props) {

  var canInteract = false;

  const [walletAddress, setWalletAddress] = useState("");
  const [categoryListData, setCategoryListData] = useState([]);

  const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
  const NODE_URL = process.env.REACT_APP_NODE_URL;
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL);
  const votingContract = new ethers.Contract(CONTRACT_ADDRESS, votingAbi, provider);


  const connectWallet = async () => {
    if(window.ethereum) {  
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const {chainId} = await provider.getNetwork();
        if(chainId === 4){
          setWalletAddress(accounts[0]);
          canInteract = true;
        } else {
          setWalletAddress("Please connect to the Rinkeby Network"); //ethers.utils.parseBytes32String(await votingContract.getCategoryName(0)) //ethers.BigNumber.toNumber(await votingContract._catCounter())
          canInteract = false;
        }
      } catch (error) {
        console.log('Error connecting...');
      }
    } else{
      setWalletAddress("Please install MetaMask");
    }
  };

  const componentDidMount = async() => {
    var catCount = await votingContract._catCounter();
    catCount = catCount.toNumber()
    const listData = []
    for (var i = 0; i < catCount; i++){
      const categoryData = { 
        key: i,
        category: ethers.utils.parseBytes32String(await votingContract.getCategoryName(i)),
        candidate1: ethers.utils.parseBytes32String(await votingContract.getCandidate(i,0)),
        candidate2: ethers.utils.parseBytes32String(await votingContract.getCandidate(i,1)),
        candidate3: ethers.utils.parseBytes32String(await votingContract.getCandidate(i,2))
       }
       listData.push(categoryData);
    }
    setCategoryListData(listData);
  }

  useEffect(() => {
      componentDidMount();
    }, [])

  const handleVote = () => {
    //const signer = provider.getSigner();
  }

  return (
    <AppDiv>
      <Header/>
      <SubHeader
        connectWallet={connectWallet}
        walletAddress={walletAddress}/>
      <CategoryList 
        categoryListData={categoryListData} 
        handleVote={handleVote}
      />
    </AppDiv>
  );
}

export default App;