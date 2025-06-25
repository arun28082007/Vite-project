import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
    <div className="header">My Header</div>
    <input className="input" placeholder="Enter Name"/>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increase
        </button>

        <div className='space'>{count}</div>

        <button className='ar' onClick={() => setCount((count) => count - 1)}>
          decrease
        </button>

      </div >
    </>
  );
}

export default App;
