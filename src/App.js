import './App.css';
import Button from './components/button.jsx';
import ClickCounter from './components/clickCounter';
import headerImage from './images/wolf.png';
import { useState } from 'react';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const clickFunction = () => {
    setNumberOfClicks(numberOfClicks + 1);
  };

  const restartFunction = () => {
    setNumberOfClicks(0);
  };


  return (
    <div className='App'>
      <header className="App-header">
        <div className='main-img-container'>
          <img
            className='main-img-background'
            src={headerImage}
            alt='Main background' />
        </div>
        <div className='main-counter-container'>
          <div className='clicks-container'>
            <ClickCounter
            numberOfClicks={numberOfClicks} />
          </div>
          <div className='buttons-container'>
            <div className='first-button-contaniter'>
              <Button
                buttonName='Click'
                isClicButton={true}
                functionClick={clickFunction} />
            </div>
            <div className='second-button-contaniter'>
              <Button
                buttonName='Restart'
                isClicButton={false}
                functionClick={restartFunction} />
            </div>
          </div> 
        </div>
      </header>
    </div>
  );
}

export default App;
