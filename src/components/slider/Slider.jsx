import React from 'react';
import hero1 from "../../assets/bella1.png";
import hero2 from "../../assets/bella2.png";
import './Slider.css'
export default function Slider() {  
  return (
    
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={hero1} className="d-block w-100" alt="Pastel Blue Image" />
      <h3 className="carousel-caption">You Can Be YourRsELF EVERY DAY</h3>
    </div>
    
    <div className="carousel-item">
      <img src={hero2} className="d-block w-100" alt="Pastel Peach Image" />
      <h3 className="carousel-caption">FOR EACH OF US JUST BELLA</h3>
    </div>

  </div>

</div> 
  );
}
