import React from "react";
import About1 from "../../../images/about.svg";
const About = () => {
  return (
    <div class="container px-4 mt-4">
      <div class="row gx-2">
        <h2>About Ahmed Bikes</h2>
        <p>Bike Rentals & Tours</p>
        <div class="col-md-2">
          <div class="p-3">
            <img src={About1} alt="" />
          </div>
        </div>

        <div class="col-md-5 mt-5">
          <div class="p-2">
            <h3 className="text-start">Many Types of Bikes</h3>
            <p className="text-start">
              We can fit you with the perfect bike because we carry all sizes
              and types of bikes.
            </p>
          </div>
          <div class="p-2">
            <h3 className="text-start">Best Bikes in Town</h3>
            <p className="text-start">
              Comfort. Safety. Our equipment is guaranteed to make your biking
              experience 100% stree-free.
            </p>
          </div>
        </div>
        <div class="col-md-5 mt-5">
          <div class="p-2">
            <h3 className="text-start">Longest Opening Hours</h3>
            <p className="text-start">
              Have all the time in the world? Rent for an entire day and explore
              Chittagong City at your leisure.
            </p>
          </div>
          <div class="p-2">
            <h3 className="text-start">Rent Fully Insured</h3>
            <p className="text-start">
              A simple bodily injury claim from a customer riding your bike can
              derail your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
