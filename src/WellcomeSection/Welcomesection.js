import React from 'react';
import './Welcomesection.css';


function WelcomeSection() {
  return (
    <>
      {/* WellcomeSection */}
      <section className="wellcome-section section-md">
        <div className="container-xl">
          <h1>Wellcome <p>to CETREBA</p></h1>
          <button className="btn btn-4"><span>Learn More</span></button>
          <div className="slide">
            <div className="slide-item item-1">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <span className="number">01</span>
              <p>About</p>
            </div>
            <div className="slide-item item-2">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <span className="number">02</span>
              <p>Products</p>
            </div>
            <div className="slide-item item-3">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <span className="number">03</span>
              <p>Blog</p>
            </div>
            <div className="slide-item item-4">
              <div className="line-1"></div>
              <div className="line-2"></div>
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