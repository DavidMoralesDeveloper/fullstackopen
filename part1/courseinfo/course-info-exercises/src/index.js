import React from 'react'
import ReactDOM from 'react-dom'




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => <h1>{props.couser}</h1>

const Part = (props) => {
  return<p> {props.part} {props.exercises} </p>
}

const Content = () => {
  
   return(
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
      
    </div>
   )
}

const Total = (props) => {
  return <p> Number of exercises {props.exercises} </p>
}

  return (
    <>
      <div>
        <Header couser={course} />
                
        <Content  />
        
        <Total exercises={exercises1 + exercises2 + exercises3} />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))