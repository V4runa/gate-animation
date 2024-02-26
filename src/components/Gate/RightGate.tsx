import React from "react";

interface GateProp {
  isOpen: boolean;
}


export const RightGate = ({isOpen}: GateProp) => {
  const onOpen = isOpen ? "transform translate-x-[80%] duration-[5000ms] ease-out" : "";
  return (
      <img src="/images/right_half.png" alt="Broken Link..." className={`${onOpen} h-screen w-1/2 object-cover fixed right-0 top-0`}></img>
  )
}


export default RightGate;