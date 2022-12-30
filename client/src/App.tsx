

import React, {useState} from 'react';

import Keyboard from './components/Keyboard';

import './App.css';

function App() {
  const [words, setWords] = useState<Array<string>>([]);

  return (
    <div className="App">
      <div className="Wrapper">
        <Keyboard setWords={setWords} />
      </div>
    </div>
  );
}

export default App;