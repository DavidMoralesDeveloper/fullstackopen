import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const voteAnecdotes = () => {
    const copy = [...vote]
    copy[selected] +=1
    setVote(copy)
    
  }

  
  const nextAnecdotes = () => {

    setSelected(random)

    function random() {
      return Math.floor(Math.random()* Math.floor(anecdotes.length));
    }

  }

  return (
    <div>
      <h2> {props.anecdotes[selected]}</h2>

      <h2> anecdote has {vote[selected]} votes </h2>

      <button onClick={voteAnecdotes} > Vote </button>

      <button onClick={nextAnecdotes} >Next anecdote</button>

      



    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]