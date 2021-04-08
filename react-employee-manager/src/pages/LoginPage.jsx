import React, {useState} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'

const LoginPageStyles = styled.aside`
    max-width: 480px;
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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[isValid, setIsValid] = useState(false)


    const handleClick = (e) =>{
        // test our Auth
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            // email and password input

            setIsValid(true)
        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }

    if(isValid){
        return <Redirect to="/dashboard" />
    } else{
        return ( 
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                <FormInput label="email" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password" type="text"/>
                <Button uiStyle="login" label="Login" onClick={handleClick}/>
            </LoginPageStyles>      
         );
    }
    
}
 
export default LoginPage;