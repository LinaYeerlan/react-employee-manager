import React from 'react';
import styled from'styled-components'
import Button from '../components/buttons/Button'
import Logo from './../components/icons/Logo'
import {Link} from 'react-router-dom'

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
        margin: 1rem 0 3rem;
    }
    a  {
        text-decoration: none;
    }
`
const HomePage = (props) => {
    return (
        <HomePageStyles>
            <Logo/>
            <header><h1>Employee Manager</h1></header>
            <p>focus on people and we'll focus on the paperwork</p>

            <Link to="/register"><Button uiStyle="signup" label="Sign Up A Free Unlimited Trial Account"/></Link>
            <Link to="/login"><Button uiStyle="login" label="Account Login"/></Link>
            
            
            
        </HomePageStyles>        
    );
}

export default HomePage;