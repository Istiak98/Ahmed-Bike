import React from "react";
import "./Gallary.css";
const Gallary = () => {
  return (
    <div className="container-fluid">
      <h1 className="mb-5 mt-3">GALLARY</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <div className="d-flex flex-column">
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2014/09/photo-12-600x369.jpg"
            className="img-fluid"
          />

          <img
            src="https://komo.vamtam.com/wp-content/uploads/2017/04/photo-11-600x369.jpg"
            class="img-fluid"
          />
        </div>

        <div class="d-flex flex-column">
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2018/08/photo-10-600x369.jpg"
            class="img-fluid"
          />

          <img
            src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-05-840x517.jpg"
            class="img-fluid scale"
          />
        </div>

        <div class="d-flex flex-column">
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-03-840x517.jpg"
            class="img-fluid scale mb-2"
          />
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-06-840x517.jpg"
            class="img-fluid"
          />
        </div>

        <div class="d-flex flex-column">
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-07-840x517.jpg"
            class="img-fluid m-1 p-1"
          />
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-02.jpg"
            class="img-fluid image m-1 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
