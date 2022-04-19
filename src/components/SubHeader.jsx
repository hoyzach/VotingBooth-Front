import React from 'react';
import styled from 'styled-components';

const AppSubHeader = styled.header`
    background-color: #000000 ;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
`;

const List = styled.ul`
    list-style: none;
    margin: 20px;
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
        <List>
            <li><Button onClick = {props.connectWallet}>Connect MetaMask</Button></li>
            <br/>
            <li><Wallet>Wallet Address: <font color="yellow">{props.walletAddress}</font></Wallet></li>
        </List>
    </AppSubHeader>
    );
}
