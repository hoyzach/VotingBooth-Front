import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import styled from 'styled-components';
import SubHeader from './components/SubHeader';

const AppDiv = styled.div`
  text-align: center;
  background-color: rgb(20,56,97);
  color: #cccccc;
`;

function App(props) {

  const [walletAddress, setWalletAddress] = useState("");

  const requestAccount = async () => {
    console.log('Requesting account...');
  
    if(window.ethereum) {
      console.log('detected');
  
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("")
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }
    } else{
      console.log('MetaMask not detected');
    }
  }


  return (
    <AppDiv>
      <Header/>
      <SubHeader
        requestAccount={requestAccount}
        walletAddress={walletAddress}/>
    </AppDiv>
  );
}

export default App;