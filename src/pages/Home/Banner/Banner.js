import React from 'react';

import img1 from  '../../../images/banner/banner1.jpg'
import img2 from  '../../../images/banner/banner2.jpg'

const BANNER = () => {
                   
return (
<div>
<div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src={img1} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={img2} class="w-full" />
  </div> 
 
</div> 
<div class="flex justify-center w-full py-2 gap-1">
 {/*  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <input type="radio" name="radio-1 " class="radio" checked />
<input type="radio" name="radio-1 " class="radio" /> */}
<a href="#item1" class="radio" ></a> 
  <a href="#item2" class="radio"></a> 
</div>                                                   
</div>
);
};

export default BANNER;