const App = () => {
  
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }
  
  
  
    const Header = ({ course }) => <h1>{course.name}</h1>
  
    const Part = ({ course }) => {
      const lists = course.parts.map((element) => {
        return <p>   {element.name} =  {element.exercises} </p>
      })
      return <p> {lists} </p>
    }
  
    const Content = ({course}) => {
      return (
        <div>
          <Part course={course} />
        </div>
      )
    }
  
    const Total = ({course}) => {
      const list = course.parts.map((element) => element.exercises).reduce((a, b)=> a + b, 0)
      return <p>Number of exercises = {list}</p>
    }
  
    return (
      <div>
        <Header course={course} />
  
        <Content course={course} />
  
        <Total course={course} />
      </div>
    )
  }