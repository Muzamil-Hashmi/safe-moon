import React from 'react'
import {FaTwitter} from "react-icons/fa"
import {BsInstagram, BsReddit}from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import{BsFacebook} from "react-icons/bs"
// import {BsReddit} from "react-icons/bs"

import { Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
      
      {/* Site footer */}
<footer className="site-footer text-white bg-dark ">
  <div className="container ">
    <div className="row py-5">
      <div className="col-sm-12 col-md-6 d-flex ">
        <div className='text-center mx-3'>      
        <a className="logo" href="#"><img src="assets/logo.png "  className='img-fluid' alt=" "width={300} /></a>
        </div>

       
<div>
<h6>SafeMoon - Innovating for Good</h6>
        <p> Building blockchain, commerce, metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to increasingly better use. Advancing our innovations to every part of the world</p>
      <BsLinkedin color='pink' size={30}/>
      <FaTwitter color='blue' size={30} />
      <BsFacebook color='blue' size={30}/>

      <BsInstagram color='red' size={30}/>
      <AiFillYoutube color='green' size={30}/>
      <BsDiscord color='dark' size={30}/>
      {/* <BsReddit color='dark' size={30}/> */}
</div>


      </div>

      <div className="col-xs-6 col-md-3">
        <ul className="footer-links list-unstyled ">
          <li><a href="http://scanfcode.com/category/c-language/">Wallet Tracker</a></li>
          <li><a href="http://scanfcode.com/category/front-end-development/">Branding</a></li>
          <li><a href="http://scanfcode.com/category/back-end-development/">White Paper</a></li>
          <li><a href="http://scanfcode.com/category/java-programming-language/">Contract</a></li>
          <li><a href="http://scanfcode.com/category/android/">Starus</a></li>
          <li><a href="http://scanfcode.com/category/templates/">Safe Moon Card</a></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <ul className="footer-links list-unstyled">
          <li><a href="http://scanfcode.com/about/">Support</a></li>
          <li><a href="http://scanfcode.com/contact/">List a token</a></li>
          <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
          <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
        </ul>
      </div>
    </div>
    
  </div>
  <div className="container mt-5">
    
    <div className="row">
      <div className="col-12 ">
      <ul className="footer-links text-center ">
          <a className='mx-2' href="http://scanfcode.com/category/c-language/ " >Term of Use</a>
          <a className='mx-2' href="http://scanfcode.com/category/front-end-development/">Privacy Policy</a>
          <a className='mx-2' href="http://scanfcode.com/category/back-end-development/">Cookies Policy</a>
          <a  className='mx-2' href="http://scanfcode.com/category/java-programming-language/">Wallet EULA</a>
          <a className='mx-2' href="http://scanfcode.com/category/android/">Wallet Policy</a>
          <a className='mx-2' href="http://scanfcode.com/category/templates/">Disclaimer</a>
          <a className='mx-2' href="http://scanfcode.com/category/templates/">FAQ</a>
          <a className='mx-2' href="http://scanfcode.com/category/templates/">Our Partners</a>

        </ul>

      </div>


      <div className="col-md-12 ">
        
        
        <p className="copyright-text text-center">Copyright © 2022 SafeMoon US LLC | All Rights Reserved 
          
        </p>
      </div>
      
    </div>
  </div>
</footer>

    </div>
  )
}
