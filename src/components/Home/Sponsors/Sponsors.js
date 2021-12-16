import React from "react";
import SP1 from "../../../images/Logo-01.svg";
import SP2 from "../../../images/Logo-02.svg";
import SP3 from "../../../images/Logo-03.svg";
import SP4 from "../../../images/Logo-04.svg";
import SP5 from "../../../images/Logo-05.svg";
import SP6 from "../../../images/Logo-06.svg";
const Sponsors = () => {
  return (
    <div class="container mb-5">
      <h4>POWERED BY WORLDWIDE BRANDS</h4>
      <div class="row row-cols-1 row-cols-lg-6 g-2 g-lg-3">
        <div class="col">
          <div class="p-3 ">
            <img src={SP1} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="p-3  ">
            <img src={SP2} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="p-3 ">
            <img src={SP3} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="p-3  ">
            <img src={SP4} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="p-3  ">
            <img src={SP5} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="p-3  ">
            <img src={SP6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
