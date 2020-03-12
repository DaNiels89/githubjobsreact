import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [job, setjob] = useState('');

  function getAllJobs() {
    fetch('https://jobs.github.com/positions.json')
      .then(response => response.json())
      .then(data => setImage(data.file));
  }

  return (
    <div className="App">
      <h1>Github Jobs</h1>
    </div>
  );
}

export default App;

function App() {
  function getCatFact() {
    fetch('http://localhost:3001/cats_facts').then(response =>
      response.json().then(data => setFact(data.text))
    );
  }

  useEffect(() => {
    getCatImage();
    getCatFact();
  }, []);

  return (
    <div className="App">
      <h1>Cat facts</h1>
      <img src={image} alt="" />
      <p>{fact}</p>
    </div>
  );
}

export default App;
