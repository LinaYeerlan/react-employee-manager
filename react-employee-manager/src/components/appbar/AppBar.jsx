import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const AppBarStyles = styled.nav`
    box-shadow: 0 0 3px 1px grey;
    padding: 1rem;
    a {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    li {
        margin: 0 1rem;
    }
    a  {
        text-decoration: none;
        color: grey;
    }
`

const AppBar = () => {
    return ( 
        <AppBarStyles>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </AppBarStyles>
     );
}
 
export default AppBar;