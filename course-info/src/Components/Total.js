const Total = (props) => {
    const total = props.exercises.reduce((s, p) => s + p)

    // console.log(total);
    return (
        <p><strong> {props.text1} {total} {props.text2}</strong></p>
    )
}

export default Total