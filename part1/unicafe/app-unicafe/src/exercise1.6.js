import React, { useState } from 'react'
import { ReactDOM } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give me feed back</h1>

      <button onClick={() => setGood(good + 1)} >good</button>

      <button onClick={() => setNeutral(neutral + 1)} >neutral</button>

      <button onClick={() => setBad(bad + 1)}  >bad</button>

      <h1> Statistics </h1>

      <h2> Good {good} </h2>
      <h2> neutral {neutral} </h2>
      <h2> Bad {bad} </h2>

    </div>
  )
}