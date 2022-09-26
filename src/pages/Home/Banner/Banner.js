import React from 'react';

import img1 from  '../../../images/banner/banner1.jpg'
import img2 from  '../../../images/banner/banner2.jpg'

const BANNER = () => {
                   
return (
<div>
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-1">
 {/*  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <input type="radio" name="radio-1 " className="radio" checked />
<input type="radio" name="radio-1 " className="radio" /> */}
<a href="#item1" className="radio" ></a> 
  <a href="#item2" className="radio"></a> 
</div>                                                   
</div>
);
};

export default BANNER;