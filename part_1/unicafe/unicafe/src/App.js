import { useState, useEffect} from 'react'
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const [showStat, setShowStat] = useState('false')

  useEffect(()=>{
    if(good >= 1 || neutral >= 1 || bad >= 1) {
      setShowStat('true')
    }
    else{
      setShowStat('false')
    }
  }, [good, neutral, bad])


  const addGood = (e)=>{
    setGood(()=> good + 1 );
  }

  const addNeutral = (e)=>{
    setNeutral(()=>neutral + 1)
  }

  const addBad = (e)=>{
    setBad(()=>bad + 1)
  }

  

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <div>
        <button onClick={addGood}>Good</button>
        <button onClick={addNeutral}>Neutral</button>
        <button onClick={addBad}>Bad</button>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} showStat={showStat}/>
    </div>
  );
}

export default App;
