import logo from './logo.svg';
import './App.css';
import { useState} from 'react'


function App123456789(a) {
  //sua code tai day
  //aaaaa
  //bbbb
  // se bi conflict code tai day

  // day la new line vua day
  const [job, setJob] = useState('')
  //ha sua 1
  const [jobs, setJobs] = useState(() => {
    const storeLocal = JSON.parse(localStorage.getItem('jobs'))
    return storeLocal ?? []
  })
  //ha sua 2
  const handleClick = () => {
    setJobs(prev => {
      const newList = [...prev, job]
      localStorage.setItem('jobs', JSON.stringify(newList))
      return newList
    })
    //ha sua 3
    setJob('')
    console.log('jobs', jobs);
  }
  const handleDeleteClick = () => {
    localStorage.clear()
    setJobs([])
  }
  //ha sua 4
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
