
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import './App.scss';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const handleCount = (value) => {
    setCount(count + value)
  }
  return (
    <div className="App">
      <div className='inner'>
      <h1>CounterApp</h1>
      <section>
      <Viewer count={count}/>
      </section>
      <section>
      <Controller handleCount={handleCount}/>
      </section>
      </div>
    </div>
  );
}

export default App;
