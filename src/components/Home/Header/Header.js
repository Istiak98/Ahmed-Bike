import React from "react";
import IMG1 from "../../../images/Img1.jpg";
const Header = () => {
  return (
    <div class="container overflow-hidden mt-5">
      <h3 className="fs-1">Included with every bike rental:</h3>
      <div class="row gx-3">
        <div class="col-md-4">
          <img class="img-thumbnail w-200" src={IMG1} alt="" />
        </div>
        <div class="col-md-4">
          <div class="p-3 text-start fw-bold">Helmet</div>
          <p className="text-start">
            We carry the biggest and best brands and offer the largest range of
            sizes and colours.
          </p>
          <div class="p-3 text-start fw-bold">Bike lock</div>
          <p className="text-start">
            A bike is only as good as the lock that keeps it safe. Make sure
            yours can thwart any would-be thief.
          </p>
        </div>
        <div class="col-md-4">
          <div class="p-3 text-start fw-bold">Basket/bike bag</div>
          <p className="text-start">
            Basket bag with weatherproof protection. Shoulder strap attachments
            make it excellent off-bike as well.
          </p>
          <div class="p-3 text-start fw-bold">Free Gps Guided</div>
          <p className="text-start">
            Check out our sights lists to find the best places to bike & tour in
            Central Park and beyond
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
