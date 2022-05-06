import React from 'react';
import styled from 'styled-components';

const AppSubHeader = styled.header`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;
`;

const WalletDiv = styled.div`
    display: flex;
    align-items: center;
`

const Wallet = styled.h5`
    color: white;
    margin-left: 20px;
`;

const ConnectButton = styled.button`
    font-size: 16px;
    padding: 16px;
    border-radius: 16px;
    background-color: blue;
    color: white;
    font-weight: bold;
`;

const RegisterButton = styled.button`
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    background-color: gray;
    color: yellow;
    font-weight: bold;
`;

const Error = styled.h5`
    color: red;
`;

export default function SubHeader(props) {

    return (
    <AppSubHeader>
        <br/>
        <ConnectButton onClick = {props.connectWallet}>Connect MetaMask</ConnectButton>
        <br/>
        <WalletDiv>
            <RegisterButton onClick = {props.handleRegister}>Register</RegisterButton>
            <Wallet>Wallet Address: <font color="yellow">{props.walletAddress}</font></Wallet>
        </WalletDiv>
        <Error>{props.errorMessage}</Error>
    </AppSubHeader>
    );

}
