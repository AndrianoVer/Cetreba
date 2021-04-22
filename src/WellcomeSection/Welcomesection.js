import React from 'react';
import './Welcomesection.css';


function WelcomeSection() {
  return (
    <>
      {/* WellcomeSection */}
      <section>
        <div className="container-xl">
          <h1>Wellcome to CETREBA</h1>
          <div className="slide">
            <div className="slide-item item-1">
              <span className="line"></span>
              <span className="number">01</span>
              <p>About</p>
            </div>
            <div className="slide-item item-2">
              <span className="line"></span>
              <span className="number">02</span>
              <p>Products</p>
            </div>
            <div className="slide-item item-3">
              <span className="line"></span>
              <span className="number">03</span>
              <p>Blog</p>
            </div>
            <div className="slide-item item-4">
              <span className="line"></span>
              <span className="number">04</span>
              <p>Contact</p>
            </div>
          </div>          
        </div>
        
      </section>
      
      
    </>
  );
}

export default WelcomeSection;