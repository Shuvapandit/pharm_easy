import React, { useEffect, useState } from 'react';
import  './Otg.css'



const Otg = (props) => {

 const {name,img,price} =props.otg; 
 
return (
<div className="otg-content ">
  <div className="card w-48 h-60 ml-6 bg-base-100 shadow-xl">
  <figure><img  className='w-32' src={img} alt="otg" /></figure>
  <div className="h-72 ml-5">
    
    <h2 className="card-title">{name}</h2>
    <h4 className='card-title'>৳ {price}</h4>
    <div className="card-actions">
   {/*  <button class="btn btn-outline w-full ">ADD TO CART</button> */}
    <button className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 border rounded absolute inset-x-0 bottom-0 h-12">
    ADD TO CART
</button>
    </div> 
 
    
    
   
  </div>
</div>                                            
</div>
);
};

export default Otg;