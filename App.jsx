import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data.jsx';
import Tour from './components/Tour.jsx'

function App() {
  const [arr, setValue] = useState(data);

  function removeTour(id){
    setValue(arr.filter((obj) => {
      return (obj.id !== id);
    }))
  }

  if(arr.length === 0){
    return (
      <div className="container">
        <p>No Tours Left</p>
        <button className="btn" onClick={() => {
          setValue(data);
        }}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className="heading">Plan With Me</h1>
      <div className="tours">
        <Tour tours = {arr} onRemoveTour = {removeTour}></Tour>
      </div>
    </div>
  );
}

export default App;
