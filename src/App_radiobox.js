import logo from './logo.svg';
import './App.css';
import { useState} from 'react'

const radio_list = [
  {
    id: 1,
    name: 'HTM, Css'
  },
  {
    id: 2,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'ReactJs'
  },
]

function App() {
  const [checked, setChecked] = useState()
  console.log(checked)
  return (
    <div className="App">
      {radio_list.map(item => {
        return (
          <div key={item.id}>
            <input 
            type="radio"
            checked={checked === item.id}
            onChange={() => setChecked(item.id)}
            />
            {item.name}
          </div>
        )
      })}
      
      <button>Submit</button>
    </div>
  );
}

export default App;
