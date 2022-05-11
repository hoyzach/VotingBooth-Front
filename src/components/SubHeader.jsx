import React from 'react';
import styled from 'styled-components';

const UpperSubHeader = styled.header`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;
`;

const ConnectButton = styled.button`
    font-size: calc(8px + 0.3vw);
    padding: 12px;
    border-radius: 10px;
    background-color: blue;
    color: white;
    font-weight: bold;
`;

const WalletDiv = styled.div`
    display: flex;
    align-items: center;
`

const RegisterButton = styled.button`
    font-size: calc(6px + 0.3vw);
    padding: 8px;
    border-radius: 10px;
    background-color: gray;
    color: yellow;
    font-weight: bold;
`;

const Address = styled.h5`
    color: white;
    margin-left: 15px;
    font-size: calc(12px + 0.3vw);
`;

const Error = styled.h5`
    color: red;
    font-size: calc(12px + 0.3vw);
`;

const LowerSubHeader = styled.header`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-size: calc(10px + 0.3vw);
`;

export default function SubHeader(props) {

    return (
    <>
    <UpperSubHeader>
        <br></br>
        <ConnectButton onClick = {props.connectWallet}>Connect MetaMask</ConnectButton>
        <WalletDiv>
            <RegisterButton onClick = {props.handleRegister}>Register</RegisterButton>
            <Address>Wallet Address: <font color="yellow">{props.walletAddress}</font></Address>
        </WalletDiv>
        <Error>{props.errorMessage}</Error>
    </UpperSubHeader>
    <LowerSubHeader>
        <text>Total Voters Registered: {props.voterCount}</text>
        <text>Total Votes Submitted: {props.voteCount}</text>
    </LowerSubHeader>
    </>
    );

}
