import React, {useContext} from 'react'
import { Container, FormsContainer, Form, Logup, H2, Input, InputField, Para, IR, Button, Navbar} from './common'
import { Link } from 'react-router-dom'
import "../FontAwesomeIcons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export function Navig(props) {

    

    return (
        <Navbar>
            {/* <FontAwesomeIcon icon={["fas","pizza-slice"]}/> */}
            <div className="navbar">
                <img className="img-1" src='./images/p8.png' width="100px" height="70px" alt="j"/>
            </div>
            <div className="navbar n1">
                <div id='yesir'>Cool</div> 
                <img src='./images/p7.png' width="60px" height="50px" alt="j"/>
                <div id='yesir'>Pizza</div> 
            </div>
            <div  className="navbar">
                    <Link to='/login'><button className='links'>Login</button></Link>
        
                    <Link to='/register'><button className='links'>Register</button></Link>
            </div>
        </Navbar>
  
    );
}