import React from 'react';
//icons
import { FaCloudSun, FaLocationArrow } from "react-icons/fa";

function ComponenteClima() {
  return (
    <div className="ComponenteClima" >
      <div className="ComponenteClima__Icon" >
        <FaCloudSun />
      </div>
      <p className="ComponenteClima__Text">21ºC</p>
      <div className="ComponenteClima__Icon" >
        <FaLocationArrow className="ComponenteClima__Icon-Location" />
      </div>
    </div>
  );
}

export default ComponenteClima;
