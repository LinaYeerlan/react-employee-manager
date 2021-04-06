import React from 'react';
import styled from'styled-components'
import Button from './../components/buttons/button'
import Logo from './../components/icons/Logo'

const HomePageStyles = styled.header`
    max-width: 480px;
    text-align: center;
    margin: 6rem auto 0;
    svg{
        width:80px;
    }
    h1{
        font-size: 2.25rem
    }
    p{
        color: #767484;
        margin-bottom: 3rem
    }
`
const HomePage = (props) => {
    return (
        <HomePageStyles>
            <Logo/>
            <header><h1>Employee Manager</h1></header>
            <p>focus on people and we'll focus on the paperwork</p>

            <Button uiStyle="login" label="Sign Up A Free Unlimited Trial Account"/>
            <Button uiStyle="login" label="Account Login"/>
        </HomePageStyles>        
    );
}

export default HomePage;