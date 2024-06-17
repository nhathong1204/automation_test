import logo from './logo.svg';
import './App.css';
import { useState} from 'react'

const gifts = [
  'Mouse',
  'Balo',
  'Iphone'
]

function App() {
  const [gift, setGift] = useState()
  //aaaaaa
  const handleClick = () => {
    setGift(() => {
      const index = Math.floor(Math.random() * gifts.length)
      return gifts[index]
    })
  }
  return (
    <div className="App">
      <h1>{gift || 'Chưa lấy phần thưởng'}</h1>
      <button onClick={handleClick}>Lấy phần thưởng</button>
    </div>
  );
}

export default App;
