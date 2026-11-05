/*

This is going to be our first and top level component. Written with functional component syntax
and will be injected into the top level of the React Vite Application

*/

import College from "../src/components/College"
import Student from "./components/Student"

const title = "React using Vite"
const titleStyle = { color: "blue"}
const courses = ["Javascript", "React", "Node.js"]


function App(){
    return(
        <section>
            <h1 style= {titleStyle} > {title} </h1>
            <ul>
                {courses.map((course) => {

                        return <li key={course}> {course} </li>

                })}
            </ul>

            <College name="GBP" city="Toronto">  </College>

            <Student firstName="Daniel" lastName="Alvarez" > </Student>
        </section>
    )
}

export default App