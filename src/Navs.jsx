import React, { useContext, useState } from 'react'
import { Link  } from 'react-router-dom' ;
import "./App.css"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "./imgs/logo.png"
import Container from 'react-bootstrap/Container';
import {  faUser } from '@fortawesome/free-solid-svg-icons'


import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShoppingContext } from './components/ShoppingContext';
 const Navs = ( props) => {
  const{cart=[]}=useContext(ShoppingContext);
const[active,setActive]=useState(false);
const openNav=()=>{
setActive(!active);
}


  return (

    <div >

           <Navbar expand="lg" className={active === false ? "body-tertiary navbar px-5 py-3" : "body-tertiary navbar px-5 py-3 active "}>
              <Container className="container">
        
              <Link  className=" brand "to="/">
                    <img src={logo} alt="logo" className="logo img-fluid"/>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav " onClick={openNav} />
                  <Navbar.Collapse id="basic-navbar-nav" className='basic-navbar-nav'>
                      <Nav className=" navs ms-auto " >
                 
    

<Link className="link p-2 " to="/">
                             Home </Link>
                                <Link to="/about" className='link p-2'>
                         
                         
                             About Us 
                        
                            
                            </Link>
                               
                             <Link to="/cakes" className='link p-2'>   

                            
                               Cakes
                           
                           
</Link>


  <Link to="/contact" className='link p-2'>

                          
                               Contact Us
                           

</Link>
<Link to="/specials" className='link p-2'>
                         
                         Specials
                    
                        
                        </Link>
            {!props.loggedInUser ? (

<>

  <Link className="link p-2" to="/register">
    Register
  </Link>


<Link className="link p-2" to="/login">
 Login
</Link>

</>

):<>
  
  <Link className="link p-2" to="/profile">
  <FontAwesomeIcon icon={faUser} />
  </Link>


  <button
    className="btn btn-danger btn-md   "
    onClick={props.handleLogout}
  >
    Logout
  </button>




</>


}
<Link className="link p-2  linkc " to="/cart" ><FontAwesomeIcon icon={faCartShopping} className="fa-cart" /> <span className="count   ">{cart.length}</span></Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar> 
          

    </div>
  )
}

export default Navs