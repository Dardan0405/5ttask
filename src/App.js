import {  useState } from 'react';
import PopUp from './Compnents/PopUp';

import React from "react";
import './Compnents/style.css'
function App() {
  
  const[modal, setModal] = useState(false);
  const showPopup = () => {
    setModal(!modal);
  }

  
  
  return (
    <div className="App">
      <button className='Show' onClick={showPopup}>
        Show PopUp
        </button>
      
      {modal ? <PopUp closeModal={showPopup} /> : null}
      {modal ? <div className='backdrop' onClick={showPopup}></div>: null}
      
    </div>
  );
}
export default App

