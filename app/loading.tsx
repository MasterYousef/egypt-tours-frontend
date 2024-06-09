import React from "react";

function loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <i className="fa-solid fa-circle-notch animate-spin text-7xl text-yellow-500 mb-10"></i>
      <div className="text-5xl">
        Loading..<span className="animate-ping">.</span>
      </div>
    </div>
  );
}

export default loading;
