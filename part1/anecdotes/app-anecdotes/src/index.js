import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h3> {text} </h3>
const Anecdotes = ({anecdotes}) =>  <h1> {anecdotes} </h1>
const Votes = ({vote}) => <h3> this anecdote has {vote} votes </h3>
const Button = ({onClick, text}) => <button onClick={onClick} > {text} </button>
const MostVotes = ({mostVotes}) => <h2> {mostVotes } </h2>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const voteAnecdotes = () => {
    const copy = [...vote]
    copy[selected] +=1
    setVote(copy)
    
  }

  const biggersNumber = Math.max(...vote) 

  const mostVotes = anecdotes[vote.indexOf(biggersNumber)]

  const nextAnecdotes = () => {

    setSelected(random)

    function random() {
      return Math.floor(Math.random()* Math.floor(anecdotes.length));
    }

  }

  return (
    <div>
      
      <Anecdotes anecdotes={anecdotes[selected]} />

      <Votes vote={vote[selected]} />

      <Button onClick={voteAnecdotes} text='Vote' />

      <Button onClick={nextAnecdotes} text='Next Anecdote ' />

      <Header text='Anecdotes whit most votes :' />      

      <MostVotes mostVotes={mostVotes} />

     



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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)