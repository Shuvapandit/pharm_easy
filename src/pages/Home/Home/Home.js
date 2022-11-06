import React, { useEffect, useState } from 'react';
import './Home.css'



import Banner from '../Banner/Banner';
import Otg from '../Otg/Otg';
import Supandvitamins from '../Suppandvit/Supandvitamins';
import { Map } from '../Map/Map';



const HOME = () => {
  const [otgs,setotg]=useState([]);
useEffect(()=>{
fetch('otg.json')
.then(res=>res.json())
.then(data=> setotg(data))
},[])

const [vitandsup,setvitandsup]=useState([]);
useEffect(()=>{
fetch('supandvitamins.json')
.then(res=>res.json())
.then(data=> setvitandsup(data))
},[])

  
return (
<div>
  <Banner></Banner>   
  <h2 className="text-left font-semibold text-2xl ml-4 mb-5">OTC Medicines</h2>
<div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2">

 {
  otgs.map(otg=><Otg key={otg.id}
    otg={otg}
  
  ></Otg>)
 }
</div>
<h2 className="text-left font-semibold text-2xl ml-4 mt-5 mb-5">Supplements and Vitamins</h2>
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2">

 {
  vitandsup.map(vitandsups=><Supandvitamins key={vitandsups.id}
    vitandsups={vitandsups}
  
  ></Supandvitamins>)
 }
</div>
  <Map></Map>                                         
</div>
);
};

export default HOME;