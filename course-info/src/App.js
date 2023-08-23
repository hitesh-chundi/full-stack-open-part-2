const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.value}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      {
      props.parts.map(element => <Part key={element.id} part={element} />)
      }
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header value={course.name} />
      <Content parts={course.parts} />
    </div>
  )
  
  
}

export default App