import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [commandOutput, setCommandOutput] = useState(''); // State to store command output from backend

  const runTermuxCommand = async () => {
    try {
      const response = await fetch('/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cmd: 'cd $HOME && bash a.sh' }), // Or any valid Termux command
      });

      const data = await response.json();

      if (response.ok) {
        setCommandOutput(data.output || '(no output)');
      } else {
        setCommandOutput(`Error: ${data.error}`);
      }
    } catch (error: any) {
      setCommandOutput(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increase
        </button>

        <div className='space'>{count}</div>

        <button className='ar' onClick={() => setCount((count) => count - 1)}>
          decrease
        </button>

        {/* Button to trigger the backend API call */}
        <button onClick={runTermuxCommand}>
          Run Termux Command (via Backend)
        </button>

        {/* Display the output received from the backend */}
        <div className="command-output">{commandOutput}</div>
      </div >
    </>
  );
}

export default App;
