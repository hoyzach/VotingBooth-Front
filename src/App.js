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
  const rpcProvider = new ethers.providers.JsonRpcProvider(NODE_URL);
  const votingContract = new ethers.Contract(CONTRACT_ADDRESS, votingAbi, rpcProvider);
  var provider = {};

  const connectWallet = async () => {
    if(window.ethereum) {  
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const {chainId} = await provider.getNetwork();
        if(chainId === 4){
          setWalletAddress(accounts[0]);
          canInteract = true;
        } else {
          setWalletAddress("Please connect to the Rinkeby Network");
          canInteract = false;
        }
      } catch (error) {
        console.log('Error connecting...');
      }
    } else{
      setWalletAddress("Please install MetaMask");
    }
    return provider;
  };

  const componentDidMount = async() => {
    var catCount = await votingContract._catCounter();
    catCount = catCount.toNumber();
    var listData = [];
    var candidate1 = "";
    var candidate2 = "";
    var candidate3 = "";
    var candidate4 = "";
    for (var i = 0; i < catCount; i++){
      try{ candidate1 = ethers.utils.parseBytes32String(await votingContract.getCandidate(i,0)) } catch(error){candidate1 = "-"}
      try{ candidate2 = ethers.utils.parseBytes32String(await votingContract.getCandidate(i,1)) } catch(error){candidate2 = "-"}
      try{ candidate3 = ethers.utils.parseBytes32String(await votingContract.getCandidate(i,2)) } catch(error){candidate3 = "-"}
      try{ candidate4 = ethers.utils.parseBytes32String(await votingContract.getCandidate(i,3)) } catch(error){candidate4 = "-"}
      const categoryData = { 
        key: i,
        category: ethers.utils.parseBytes32String(await votingContract.getCategoryName(i)),
        candidate1: candidate1,
        candidate2: candidate2,
        candidate3: candidate3,
        candidate4: candidate4
       }
       listData.push(categoryData);
    }
    setCategoryListData(listData);
  }

  useEffect(() => {
      componentDidMount();
    }, [])

  const handleVote = async() => {
    provider = await connectWallet();
    if (canInteract === true){
      const signer = await provider.getSigner();
      const interact = votingContract.connect(signer);
      await interact.castVote(2,2);
    }
    else{return}
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