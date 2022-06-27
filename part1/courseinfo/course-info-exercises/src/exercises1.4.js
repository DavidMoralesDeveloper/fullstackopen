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
  
    const Part = ({ parts }) => {
      const lists = parts.map((element) => {
        return <p>   {element.name} =  {element.exercises} </p>
      })
      return <p> {lists} </p>
    }
  
    const Content = ({parts}) => {
      return (
        <div>
          <Part parts={parts} />
        </div>
      )
    }
  
    const Total = ({parts}) => {
      const list = parts.map((element) => element.exercises).reduce((a, b)=> a + b, 0)
      return <p>Number of exercises = {list}</p>
    }
  
    return (
      <div>
        <Header course={course} />
  
        <Content parts={parts} />
  
        <Total parts={parts} />
      </div>
    )
  }