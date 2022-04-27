import React from 'react';
import styled from 'styled-components';

const AppSubHeader = styled.header`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;
`;

const Wallet = styled.h5`
    color: white;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 16px;
    border-radius: 16px;
    background-color: blue;
    color: white;
    font-weight: bold;
`;


export default function SubHeader(props) {
    return (
    <AppSubHeader>
        <br/>
        <Button onClick = {props.connectWallet}>Connect MetaMask</Button>
        <br/>
        <Wallet>Wallet Address: <font color="yellow">{props.walletAddress}</font></Wallet>
        <br/>
    </AppSubHeader>
    );
}
