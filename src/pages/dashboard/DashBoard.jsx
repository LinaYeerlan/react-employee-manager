import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components'

import AuthContext from './../../components/auth/AuthContext';


const DashBoardStyles = styled.header ` 
      display: flex;
`

const SideBar = styled.aside `
    width: 256px;
    box-shadow: 0 0 5px 0 grey;
    height: calc(100vh - 64px);
    position: relative;
    z-index: 1;
    header{
        margin-bottom:1rem;
        font-size: 13px;
    }
    h1{
        font-size: 1.25rem;
        font-weight:bold;
    }
    li{
        opacity:0.7;
        font-size: 12px;
        margin-bottom: 0.35rem;
    }
`

const Panels = styled.aside `  
    width: calc(100% - 256px);
    height: calc(100vh - 64px);
    background-color: #f4f4f4;
`
const DashBoard = (props) => {
    //access the authContext
     const auth = useContext(AuthContext)
     console.log("dashboard render")
  
     if(auth.isUser){

        return (
            <DashBoardStyles>              
                <SideBar>
                    <header>
                        <h1>Firebase</h1>
                        <p>firebase who new</p>
                    </header>
                    <ul>
                        <li>view all</li>
                        <li>add new employee</li>
                        <li>edit an employee</li>
                        <li>remove an employee</li>
                    </ul>
                </SideBar>
    
                <Panels>
    
                </Panels>
            </DashBoardStyles>
        )
     }else{
         return <Redirect to="/login"/>
     }
        
}
 
export default DashBoard;