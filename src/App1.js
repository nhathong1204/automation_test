import logo from './logo.svg';
import './App.css';
import { useState} from 'react'

const orders = [100, 200, 300]

function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((prev, cur) => prev + cur)
      console.log(total)
      //fgetrt
      return total
  })
  const handleClick = () => {
    setCounter(counter + 1)
    // setCounter(preState => preState + 1)
    // setCounter(preState => preState + 1)
    // setCounter(preState => preState + 1)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
