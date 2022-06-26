import React from 'react'
import ReactDOM from 'react-dom'




const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => <h1>{props.couser}</h1>

  const Part = (props) => {
    return <p> {props.part} {props.exercises} </p>
  }

  const Content = () => {

    return (
      <div>
        <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} />

      </div>
    )
  }

  const Total = (props) => {
    return <p> Number of exercises exercises={parts[0].exercises + parts[0].exercises + parts[0].exercises} </p>
  }

  return (
    <>
      <div>
        <Header couser={course} />

        <Content parts={parts} />

        <Total parts={parts} />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
