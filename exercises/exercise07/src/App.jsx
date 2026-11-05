import reactLogo from "./assets/react.svg"
import "./App.css"

function StudentInfo( { studentId, name, college } ){
  return(
    <div className="student-info">
        <h3>
          {studentId}
        </h3>
        <h4>
          {name}
        </h4>
        <p>
          {college}
        </p>
    </div>
  )
}

function App(){
  return(
    <div className="container">
      <img src={reactLogo} className="react-logo" alt="React Logo"></img>
      <h1> 
        Welcome To Fullstack Development - I
      </h1>
      <h2>
        React JS Programming Week 09 Lab exercise
      </h2>
      <StudentInfo studentId={101589165} name="Daniel Alvarez" college="George Brown College, Toronto"></StudentInfo>
    </div>
    
  )
}

export default App;
