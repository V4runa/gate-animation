import React from 'react';
import { Gate } from './components/Gate/GateCore';
import "./index.css"


function App() {
  return (
    <div className="flex justify-center items-center bg-black h-screen w-screen overflow-hidden transition-all">
      <div className='h-[200px] bg-white '></div>
        <Gate />
    </div>
  );
}

export default App;
