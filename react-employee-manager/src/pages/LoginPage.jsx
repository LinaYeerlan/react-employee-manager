import React from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/button'

const LoginPageStyles = styled.aside`
    max-width: 380px;
    margin: 6rem auto 0;
    header {
        text-align: center;
    }
    h1 {
        font-size: 2.25rem;
        font-weight: 700;
    }
`

const LoginPage = (props) => {
    return ( 
        <LoginPageStyles>
            <header><h1>Login Page</h1></header>
            <FormInput label="email" type="email"/>
            <FormInput label="password" type="text"/>
            <Button uiStyle="login" label="Submit"/>
        </LoginPageStyles>
        
        
     );
}
 
export default LoginPage;