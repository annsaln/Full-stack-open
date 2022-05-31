import { useState } from 'react'

const Anecdote = ({ anecdotes, selected, votes }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

// Button as in previous exercises
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = ({ anecdotes, votes }) => {
  let max = Math.max(...votes)
  if (max == 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>No votes yet</p>
      </div>
    )
  }
  // get indexes for max number of votes
  let res = []
  votes.forEach((value, index) => {
    if (max == value){
      res.push(index)
    }
  })
  //console.log(res)
  // select a random index out of the ones with max number of votes
  let i = Math.floor(Math.random()*res.length)
  //console.log(res[i])
  //console.log(anecdotes[res[i]])
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p> {anecdotes[res[i]]}</p>
      <p>has {max} votes</p>
    </div>
  )

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const handleAnecdote = () => {
    let x = Math.floor(Math.random() * 7)
    //console.log(x)
    setSelected(x)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    //console.log(newVotes[selected])
    setVotes(newVotes)
  }  

  //console.log(votes)
  return (
    <>
    <Anecdote anecdotes={anecdotes} selected={selected} votes={votes}/>
    <Button handleClick={handleVote} text='Vote'/>
    <Button handleClick={handleAnecdote} text='Next anecdote'/>
    <MostVotes anecdotes={anecdotes} votes={votes}/>
    </>
  )
}

export default App