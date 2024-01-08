import React from "react";
import "./ShippingInfo.css";

const ShippingInfo = () => {
  return (
    <section className="shipping-section shipping-info">
      <div className="container">
        <div className="container-grid">
          <div className="shipping-info__column">
            <div className="shipping-info__iconbox">
              <h3 className="tertiary-heading">
                Ship with <span>Safeboda</span>
              </h3>
            </div>
            <p>
              At Kosher Cuisine, we understand the importance of convenience in
              your busy lives. That's why we've partnered with SafeBoda to
              ensure a seamless and secure delivery experience for our valued
              clients.
            </p>
          </div>

          <div className="shipping-info__column">
            <div className="shipping-info__iconbox">
              <h3 className="tertiary-heading">
                Additional <span>Information</span>
              </h3>
            </div>
            <p>
              At Kosher Cuisine, we're delighted to offer you the flexibility to
              enjoy our delectable Kosher dishes in the way that suits you best!
              Whether you're looking for a cozy dine-in experience or prefer the
              comfort of your own home, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
