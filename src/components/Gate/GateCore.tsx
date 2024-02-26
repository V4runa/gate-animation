import { useState } from "react";
import LeftGate from "./LeftGate";
import RightGate from "./RightGate";

export const Gate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
    setClicked(!clicked);
  };

  const isClicked = clicked ? "text-white/0 absolute z-10 px-4 py-2 bg-white/0" : "absolute z-10 px-4 py-2 bg-transparent text-white/80 text-2xl font-bold rounded hover:bg-slate-600/80 border border-slate-500/50 border-4";

  return (
    <div className="relative flex justify-center items-center m-auto">
      {/* Ensure this div uses flex to align gates side by side */}
      <div className="flex m-auto">
        <LeftGate isOpen={isOpen}/>
        <RightGate isOpen={isOpen}/>
      </div>

      <button
        onClick={onClick} // Use the defined function
        className={isClicked}
        style={{
          position: 'absolute',
          top: '50%',
          left: '85%',
          transform: 'translate(-50%, -50%)',
          marginTop: '-1rem',
          marginLeft: '-1rem',
        }}
      >
        Open...
      </button>
    </div>
  );
}
