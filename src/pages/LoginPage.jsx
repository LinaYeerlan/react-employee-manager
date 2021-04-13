import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../components/auth/AuthContext'
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
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('ylina1@nait.ca')
    const [password, setPassword] = useState('999999')
    const [isValid, setIsValid] = useState(false)

            console.log('render')
            console.log(auth)


    const handleClick = (e) =>{
        // test our Auth
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            // email and password input
            auth.isUser = true
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
                <FormInput label="password" type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>        
                <Button uiStyle="login" label="Login" onClick={handleClick}/>
                
            </LoginPageStyles>      
         );
    }
    
}
 
export default LoginPage;