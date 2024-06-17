import logo from './logo.svg';
import './App.css';
import { useState} from 'react'


function App123456789(a) {
  //sua code tai day
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storeLocal = JSON.parse(localStorage.getItem('jobs'))
    return storeLocal ?? []
  })
  const handleClick = () => {
    setJobs(prev => {
      const newList = [...prev, job]
      localStorage.setItem('jobs', JSON.stringify(newList))
      return newList
    })
    setJob('')
    console.log('jobs', jobs);
  }
  const handleDeleteClick = () => {
    localStorage.clear()
    setJobs([])
  }
  return (
    <div className="App">
      <input type="text" value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleDeleteClick}>Delete All</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
