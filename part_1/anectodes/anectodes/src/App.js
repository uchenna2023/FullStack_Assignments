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
  const [vote, setVote] = useState({ ...new Array(anecdotes.length).fill(0) })

  

  const getItemRamdomly = ()=> Math.floor((Math.random() * anecdotes.length))

  const handleSelection = () => {
    setSelected(getItemRamdomly())
  }

  const voteSelectedAnecdote = () => {
    setVote(prev => {
      return {
        ...prev,
        [selected]: prev[selected] + 1
      }
    })
  }

  let maxVote = Object.keys(vote).reduce((a,b)=> vote[a] > vote[b] ? a : b)

  return (
    <div className="App">
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={voteSelectedAnecdote}>Vote</button>
        <button onClick={handleSelection}>Get acecdote</button>
      </div>
      <div>
        <h1>Anectode with most vote</h1>
        <p>{anecdotes[maxVote]}</p>
        <p>has {vote[maxVote]} vote</p>
      </div>
      
    </div>
  );
}

export default App;
