import React, { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import SubHeader from './components/SubHeader';
import CategoryList from './components/CategoryList';
import votingAbi from './abi/VotingProxy.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App(props) {

  var canInteract = false;

  const [walletAddress, setWalletAddress] = useState("");
  const [categoryListData, setCategoryListData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [maxCandidates, setMaxCandidates] = useState(0);
  const [voterCount, setVoterCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

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
        setErrorMessage("");
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

    var listData = [];

    var catCount = await votingContract._catCounter();
    catCount = catCount.toNumber();

    var canCount = await votingContract.getMaxCandidates();
    canCount = canCount.toNumber();
    setMaxCandidates(canCount);

    var voterCount = await votingContract._voterCount();
    voterCount = voterCount.toNumber();
    setVoterCount(voterCount);

    var voteCount = await votingContract._totalVotes();
    voteCount = voteCount.toNumber();
    setVoteCount(voteCount);

    for (var i = 0; i < catCount; i++){

      var candidates = [];
      var showButton = true;
      var categoryStatus = "";
      var rowStyle = "";
      const category = ethers.utils.parseBytes32String(await votingContract.getCategoryName(i));

      const categoryStatusBool = await votingContract.getCategoryOpen(i);
      const categoryOpenedBool = await votingContract._openedOnce(i);

      if (categoryStatusBool){
        categoryStatus = "Open for voting";
        rowStyle = "table-default";
        showButton = true;
      } else if (categoryOpenedBool){
        categoryStatus = "The winner is " + ethers.utils.parseBytes32String(await votingContract.getCategoryWinner(i));
        rowStyle = "table-dark";
        showButton = false;
      } else {categoryStatus = "Opening soon"; rowStyle = "table-secondary"; showButton = false;}
      
      for (var j = 0; j < maxCandidates; j++) {

        try{ candidates[j] = ethers.utils.parseBytes32String(await votingContract.getCandidate(i,j)) } catch(error) {}

      }

      const categoryData = { 
        key: i,
        categoryId: i,
        rowStyle: rowStyle,
        showButton: showButton,
        category: category,
        categoryStatus: categoryStatus,
        candidates: candidates,
       }

       listData.push(categoryData);
       
    }
    setCategoryListData(listData);
  }

  useEffect(() => {
      componentDidMount();
    })


  const handleVote = async(cat, can) => {

    provider = await connectWallet();
    if (canInteract === true){
      const signer = await provider.getSigner();
      const interact = votingContract.connect(signer);
      try{ await interact.castVote(cat,can) } catch(error){ getRPCErrorMessage(error) }
    }
    else{return}

  }

  const handleRegister = async() => {

    provider = await connectWallet();
    if (canInteract === true){
      const signer = await provider.getSigner();
      const interact = votingContract.connect(signer);
      try{ await interact.register() } catch(error){ getRPCErrorMessage(error) }
    }
    else{return}

  }

  function getRPCErrorMessage(err){

    const open = err.stack.indexOf('{');
    const close = err.stack.lastIndexOf('}}');
    const j_s = err.stack.substring(open, close+2);
    const j = JSON.parse(j_s);
    const message = j.data[Object.keys(j.data)[0]].message;
    setErrorMessage(message);
   
  }  

  return (

    <AppDiv>
      <Header/>
      <SubHeader
        connectWallet={connectWallet}
        handleRegister={handleRegister}
        walletAddress={walletAddress}
        errorMessage={errorMessage}
        voterCount={voterCount}
        voteCount={voteCount}/>
      <div className="table-responsive">
        <CategoryList 
          categoryListData={categoryListData} 
          handleVote={handleVote}
          maxCandidates={maxCandidates}
        />
      </div>
    </AppDiv>

  );
  
}

export default App;

//expansive columns
//winner