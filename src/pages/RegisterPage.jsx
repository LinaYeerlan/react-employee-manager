import React, {useState} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'
// import AuthContext from './../components/auth/AuthContext'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'




const RegisterPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;
    header {
        text-align: center;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 700;
    }

`

const RegisterPage = (props) => {
    // const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    

    const handleNewAccount = (e) =>{
        // test our Auth
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential=>{
            // email and password input

            setIsValid(true)
        })
        .catch(error=>{
            console.log(error)
            // console.log(error.code)
            // console.log(error.message)
        })
    }

    if(isValid){
        return <Redirect to="/login" />
    } else{
        return ( 
            <RegisterPageStyles>
                <header>
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>no credit card required</p>
                </header>
    
                <FormInput label="name on the account" type="text"/>
                <FormInput label="valid email" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password (min 6 characters)" type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button className="create-account" label="create a free account" uiStyle="signup" onClick={handleNewAccount}/>
            </RegisterPageStyles>        
         );
    }
}
 
export default RegisterPage;