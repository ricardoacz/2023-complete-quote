import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react'
import poster from './images/across_the_spider-verse.jpg'
import animation from './images/miles_spiderman.gif'

function App() {
  const [text, setText] = useState("")
  const [display, setDisplay] = useState(true)
  const [display2, setDisplay2] = useState(false)

  function handleChange (e) {
    setText(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (text.toLowerCase() === "i'm gonna do my own thing") {
      setDisplay(false)
      setDisplay2(true)
    }
  }

  return (
    <div className="App">
      <h1>Spider-Man: Across the Spider-Verse</h1>
      {display && <div>
        <img src={poster}/>
        <h2>“Everyone keeps telling me how my story is supposed to go. Nah...</h2>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='complete...'/>
        <button>Submit</button>
      </form>
        </div>}
      
      {display2 && <div>
        <img src={animation}/>
        <h2>“Everyone keeps telling me how my story is supposed to go. Nah. I’m gonna do my own thing.”</h2>
        </div>}
      
    </div>
  );
}

export default App;
