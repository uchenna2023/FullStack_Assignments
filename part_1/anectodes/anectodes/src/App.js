import {useState} from 'react'


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  /*let anecdotes = [
    {
      word:'If it hurts, do it more often.',
      vote:1
    },
    {
      word:'Adding manpower to a late software project makes it later!',
      vote:0
    },

    {
      word:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote:0
    },
    {
      word:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote:0
    },
    {
      word:'Premature optimization is the root of all evil.',
      vote:0
    },
    {
      word:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote:0
    },
    {
      word:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      vote:0
    },
    {
      word:'The only way to go fast, is to go well.',
      vote:0
    }
  ]*/


  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0,1,2,3,2,3,2,3,4])

  

  const getItemRamdomly = ()=>{
    setSelected(Math.floor((Math.random() * anecdotes.length)))
  }

  console.log(selected + 'counts')

  const handleVote = ()=>{
    let i = 0;
    let copy = {...vote}
    if(copy[i] === selected) {
      setVote( copy[i] += 1)
    }
    else {
      setVote( copy)
    }

  }

  return (
    <div className="App">
      {anecdotes[selected]}
      <p>has {vote} votes</p>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={getItemRamdomly}>Get acecdote</button>
      </div>
      
    </div>
  );
}

export default App;
