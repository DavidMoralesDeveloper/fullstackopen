import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick, click }) => <button onClick={onClick} > {text} {click} </button>

const Statistic = ({ text, value }) => <h2 > {text} {value} </h2>

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  return(
    <div>
      
      <Statistic text='Good' value={good} />
      <Statistic text='Neutral' value={neutral} />
      <Statistic text='Bad' value={bad} />
      <Statistic text='All' value={all} />
      <Statistic text='Average' value={average} />
      <Statistic text='Positive' value={positive} />

    </div>
  )
}

const WarningNotUse = ({ text }) => <h2> {text}</h2>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clikc, setClikc] = useState([])


  const handleClickGood = () => {
    setGood(good + 1)
    setClikc(clikc + 1)
  }


  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setClikc(clikc + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setClikc(clikc + 1)
  }

  const all = good + neutral + bad

  const average = (all ? (good - bad) / all : 0)

  const positive = (all ? average * 100 : 0)




  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handleClickGood} text='Good' />

      <Button onClick={handleClickNeutral} text='Neutral' />

      <Button onClick={handleClickBad} text='Bad' />

      <h1> Statistics </h1>

      {clikc.length === 0
      ? ( <WarningNotUse text='No feedback' /> )
      : (<Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />)
      }
      
    </div>
  )
}