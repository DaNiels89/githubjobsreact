import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  function getAllJobs() {
    fetch('https://github-jobs-bogota.herokuapp.com/')
      .then(response => response.json())
      .then(data => setJobs(data));
  }

  // function getJobTitle() {
  //   fetch('http://localhost:3001/cats_facts').then(response =>
  //     response.json().then(data => setFact(data.text))
  //   );
  // }

  // function getCompanyName() {
  //   fetch('http://localhost:3001/cats_facts').then(response =>
  //     response.json().then(data => setFact(data.text))
  //   );
  // }

  // function getJobDescription() {
  //   fetch('http://localhost:3001/cats_facts').then(response =>
  //     response.json().then(data => setFact(data.text))
  //   );
  // }

  useEffect(() => {
    getAllJobs();
    // getJobTitle();
    // getJobDescription();
  }, []);

  const newJobs = jobs.map(job => <li>{job.description}</li>);

  return (
    <div className="App">
      <h1>Github Jobs</h1>
      {newJobs}
    </div>
  );
}

export default App;
