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
    // getCompanyName();
    // getJobTitle();
    // getJobDescription();
  }, []);

  const jobTitle = () =>
    jobs.map(job => (
      <div>
        <li>{job.company}</li>
        <li>{job.title}</li>
        <li>{job.description}</li>
      </div>
    ));
  // const jobDescription = () => jobs.map(job => <li>{job.description}</li>);
  // const companyName = () => jobs.map(job => <li>{job.company}</li>);

  return (
    <div className="App">
      <ol>
        {/* {companyName()} */}
        {jobTitle()}
        {/* {jobDescription()} */}
      </ol>
    </div>
  );
}

export default App;
