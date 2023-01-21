import React from 'react';
import bkash from '../../../images/paymentimg/bkash.png'
import nagad from '../../../images/paymentimg/nagad.png'
import rocket from '../../../images/paymentimg/rocket.png'
import upay from '../../../images/paymentimg/upay.png'
import mastercard from '../../../images/paymentimg/mastercard.png'
import visa from '../../../images/paymentimg/visa.jpg'

const Footer = () => {
 return (
<div>
<footer className="footer p-10 bg-base-100 text-base-content">
  <div>
    <span className="footer-title">Information</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Career</a> 
    <a className="link link-hover">Privacy Policy</a> 
    <a className="link link-hover">Terms and Conditions</a>
    <a className="link link-hover">Return and Refund Policy</a>
  </div> 
  <div>
    <span className="footer-title">Useful Links</span> 
    <a className="link link-hover">FAQ</a> 
    <a className="link link-hover">Account</a> 
    <a className="link link-hover">Medicines</a> 
    <a className="link link-hover">Special Offers</a>
  </div> 
  <div>
    <span className="footer-title">Contact Us </span> 
    <a className="link link-hover">Address: Chhota Sundar Bazar,Chandpur</a> 
    <a className="link link-hover">Word No: 7,Rampur </a> 
    <a className="link link-hover">Hot Line: 01872451678</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
  <div className="">
   
    <p className='font-semibold text-base'>Our Payment Partners</p>
    <div className="grid grid-flow-col gap-4">
      <img src={bkash} style={{width: "70px", height: "45px"}}></img>
      <img src={nagad} style={{width: "70px", height: "45px"}}></img>
      <img src={rocket} style={{width: "70px", height: "45px"}}></img>
      <img src={upay} style={{width: "70px", height: "45px"}}></img>
      <img src={visa} style={{width: "70px", height: "45px"}}></img>
      <img src={mastercard} style={{width: "70px", height: "45px"}}></img>
      
    </div>
  </div> 
  <div className="md:place-self-center md:justify-self-end items-center grid-flow-col">
 
    <p className='text-base font-semibold'>© 2023 Shuvachakrabortywebdev. All rights reserved.</p>
    <div>
   
    
   
  
  </div>
  </div>
</footer>                                                           
 </div>
);
};

export default Footer;