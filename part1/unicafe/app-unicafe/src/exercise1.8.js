import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({all, average, positive}) => {

  return(
    <div>
      <h2> all {all} </h2>
      <h2> Average {average}  </h2>
      <h2>Positive {positive} % </h2>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const all = good + neutral + bad

  const average = (all ? (good - bad) / all : 0) 

  const positive =  ( all ? average * 100 : 0)


  return (
    <div>
      <h1>Give me feed back</h1>

      <button onClick={() => setGood(good + 1)} >good</button>

      <button onClick={() => setNeutral(neutral + 1)} >neutral</button>

      <button onClick={() => setBad(bad + 1)}  >bad</button>

      <h1> Statistics </h1>

      <h2> Good {good} </h2>
      <h2> Neutral {neutral} </h2>
      <h2> Bad {bad} </h2>
      
      <Statistics all={all} average={average}  positive={positive}/>

    </div>
  )
}