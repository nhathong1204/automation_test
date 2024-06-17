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
  const [jobs, setJobs] = useState(() => {
    const storeLocal = JSON.parse(localStorage.getItem('jobs'))
    return storeLocal ?? []
  })
  //nhat sua 1
  const handleDeleteClick = () => {
    localStorage.clear()
    setJobs([])
  }
  //nhat sua 2
  
//nhat sua 3

export default App;
