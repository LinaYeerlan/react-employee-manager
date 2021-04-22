import React, {useContext} from 'react';
import {Redirect, Link, useRouteMatch, Switch, Route} from 'react-router-dom';
import styled from 'styled-components'

import AuthContext from './../../components/auth/AuthContext';
import ViewAllPanel from './panels/ViewAllPanel';
import AddPanel from './panels/AddPanel';
import EditPanel from './panels/EditPanel';
import DeletePanel from './panels/DeletePanel';



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
    a {
        text-decoration: none;
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
     const {path, url} = useRouteMatch()


  
     if(auth.isUser){

        return (
            <DashBoardStyles>              
                <SideBar>
                    <header>
                        <h1>Firebase</h1>
                        <p>firebase who new</p>
                    </header>
                    <ul>
                        <li><Link to={`${url}`}>view all</Link></li>
                        <li><Link to={`${url}/add`}>add new employee</Link></li>
                        <li><Link to={`${url}/edit`}>edit an employee</Link></li>
                        <li><Link to={`${url}/delete`}>remove an employee</Link></li>
                    </ul>
                </SideBar>
    
                <Panels>
                    <Switch>
                        <Route exact path={path}><ViewAllPanel/></Route>
                        <Route path={`${path}/add`}><AddPanel/></Route>
                        <Route path={`${path}/edit`}><EditPanel/></Route>
                        <Route path={`${path}/delete`}><DeletePanel/></Route>
                    </Switch>
    
                </Panels>
            </DashBoardStyles>
        )
     }else{
         return <Redirect to="/login"/>
     }
        
}
 
export default DashBoard;