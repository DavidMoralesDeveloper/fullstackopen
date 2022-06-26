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

  const Header = ({ course }) => <h1>{course}</h1>

  // const Part = (props) => {
  //   return <p> {props.part} {props.exercises} </p>
  // }

  // const Content = (props) => {
  //   return (
  //     <div>
  //       <Part part={name} exercises={exercises} />
  //       <Part part={name} exercises={exercises} />
  //       <Part part={name} exercises={exercises} />
  //     </div>
  //   )
  // }

  // const Total = (props) => {

  //   return <p>Number of exercises {props.exercises}</p>
  // }

  return (
    <div>
      <Header course={course} />

      {/* <Content />      */}

      {/* <Total  /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
