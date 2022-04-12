import React from 'react';
import styled from 'styled-components';

const AppSubHeader = styled.header`
    background-color: #000000 ;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    font-size: 26px;
    padding: 16px;
    border-radius: 16px;
    background-color: red;
    color: white;
    font-weight: bold;
`;


export default function SubHeader(props) {
    return (
    <AppSubHeader>
      <Button onClick = {props.requestAccount}>Connect MetaMask</Button>
      <h3>Wallet Address: {props.walletAddress}</h3>
    </AppSubHeader>
    );
}
