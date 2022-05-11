import React, { Component } from 'react';
import logo from '../votingbooth.jpg';
import styled from 'styled-components';

const AppHeader = styled.header`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;

`;

const AppLogo = styled.img`
    position: absolute;
    height: 10vmax;
    max-height: 7%;
    min-height: 75px;
`;

const AppLogoLeft = styled(AppLogo)`
    left: 3%;
`;

const AppLogoRight = styled(AppLogo)`
    right: 3%;
`;

const AppTitle = styled.h1`
    font-size: calc(15px + 1.5vw);
    color: black;
    font-weight: bold;
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
