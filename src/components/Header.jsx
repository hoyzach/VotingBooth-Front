import React, { Component } from 'react';
import logo from '../votingbooth.jpg';
import styled from 'styled-components';

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const AppLogoLeft = styled.img`
    position: absolute;
    top: 60px;
    left: 16px;
    margin: 1rem;
    height: 8rem;
    pointer-events: none;
`;

const AppLogoRight = styled.img`
    position: absolute;
    top: 60px;
    right: 16px;
    margin: 1rem;
    height: 8rem;
    pointer-events: none;
`;

const AppTitle = styled.h1`
    font-size: 4rem;
    line-height: 12rem;
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
