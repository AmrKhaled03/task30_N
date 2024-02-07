import React from 'react';
import"../App.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };
  return (
<div className="footer py-5 mt-5">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h1 className='special-heading text-white'>
Cake Factory
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 mb-4">
<ul>
  <h3 className='text-white ms-2'>
    Links
  </h3>
  <li>
  <Link className="text-white link-two p-2 " to="/">
                             Home </Link>
                              
                               
                           


  
</li>
  <li>
  <Link to="/about" className='text-white link-two p-2'>
                         
                         
                             About Us 
                        
                            
                            </Link>
  </li>
  <li>
  <Link to="/cakes" className='text-white link-two p-2'>   

                            
                               Cakes
                           
                           
</Link>
  </li>
  <li>
  <Link to="/contact" className='text-white link-two p-2'>

                          
Contact Us


</Link>
  </li>
  <li>
  <Link to="/specials" className='text-white link-two p-2'>
                         
                         Specials
                    
                        
                        </Link>
  
  </li>
</ul>
      </div>
      <div className="col-lg-4 mb-4">
  
<ul>
<h3 className='text-white ms-2'>
   Me
  </h3>
  <li className='text-white link-two p-2'>
    Tele : 01551729880
  </li>
  <li className='text-white link-two p-2'>
    Mail : kamr4014@icloud.com
  </li>

  <li className='text-white link-two p-2'>
    Address : Cairo egypt
  </li>
</ul>
      </div>
      <div className="col-lg-4 mb-4">
<ul>
<h3 className='text-white ms-2'>
   Signature
  </h3>
  <li className='text-white link-two p-2'>
Amr Khaled Mohamed Hassan  Marey
  </li>
 
</ul>
      </div>
    </div>
    <div className="row my-5">
      <div className="col-12 text-center">
<small className='link-two text-white'>
Made with love by Arm Khaled Marey at {getCurrentDate()}
</small>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer