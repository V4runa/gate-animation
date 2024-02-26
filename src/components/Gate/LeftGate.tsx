import React, { useState } from "react";

interface GateProp {
 isOpen: boolean;
}



export const LeftGate = ({isOpen}:GateProp) => {
  const onOpen = isOpen ? "transform translate-x-[-80%] duration-[5000ms] ease-out" : "";
  return (
    <img src="/images/left_half.png" alt="Broken Link..." className={`${onOpen} h-screen w-1/2 object-cover fixed left-0 top-0`}></img>
  )
}

export default LeftGate;