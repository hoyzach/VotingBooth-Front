import React, { Component } from 'react';
import logo from '../votingbooth.jpg';
import styled from 'styled-components';

const AppHeader = styled.header`
    background-color: #AA2C13 ;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AppLogo = styled.img`
    position: absolute;
    height: 10%;
`;

const AppLogoLeft = styled(AppLogo)`
    left: 3%;
`;

const AppLogoRight = styled(AppLogo)`
    right: 3%;
`;

const AppTitle = styled.h1`
    font-size: 4rem;
    color: white;
    line-height: 5rem;
    font-weight: bold;
    min-width: 300px;
`;

export default class Header extends Component {
  render() {
    return (
        <AppHeader>
            <AppLogoLeft src={logo} alt="Voting Booth logo"/>
                <AppTitle>
                    Voting Booth
                </AppTitle>
                    <AppLogoRight src={logo} alt="Voting Booth logo"/>
        </AppHeader>
    )
  }
}
