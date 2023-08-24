const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {
        courses.map(element => <Course key={element.id} course={element} />)
      }
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

const Total = (props) => {
const total = props.exercises.reduce((s, p) => s + p)
  
  // console.log(total);
  return (
    <p><strong> {props.text1} {total} {props.text2}</strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header value={course.name} />
      <Content parts={course.parts} />
      <Total text1="Total of" exercises={course.parts.map(element => element.exercises)} text2="exercises" />
    </div>
  )
  
  
}

export default App