import React from "react";
import "./spiner.css";
const SpinerLoader = () => {
  return (
    <div className="spiner">
      <div class="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default SpinerLoader;
