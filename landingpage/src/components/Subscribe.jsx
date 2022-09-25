import React from "react";

export const Subscribe = () => {
  return (
    <section className="subscribe" id="subscribe">
      <div className="container">
        <div className="subscribe-wrapper">
          <h3>Subscribe to our Newsletter</h3>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <form action="#">
            <input type="email" placeholder="Your Email" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};
