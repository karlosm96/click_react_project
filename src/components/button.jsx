import React from "react";
import '../components-style/buttonStyle.css';

function Button({buttonName, isClicButton, functionClick}){
  return(
    <button 
      className={isClicButton ? 'click-button' : 'restart-butto'}
      onClick={functionClick}
    >
      {buttonName}
    </button>
  );  
}

export default Button;