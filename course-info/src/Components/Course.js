import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course = ({ course }) => {
    return (
        <div>
            <Header value={course.name} />
            <Content parts={course.parts} />
            <Total text1="Total of" exercises={course.parts.map(element => element.exercises)} text2="exercises" />
        </div>
    )
}

export default Course