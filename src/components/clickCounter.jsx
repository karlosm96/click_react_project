import React from "react";
import '../components-style/clickCounterStyle.css'


function ClickCounter({numberOfClicks}){
  const colors = ['#E9F5F3', '#B74ABE', '#47BB7A', '#4A86BE', '#FC2761', '#A113CB', '#C483F1'];
  const randColors = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--main-font-color', randColors);
  return(
    <div className="clickCounter-container">
      {numberOfClicks}
    </div>
  );
}

export default ClickCounter;
