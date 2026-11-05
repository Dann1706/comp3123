/*

Student will be defined as a class component

We will not define a constructor for this example, rather, the default constructor will be used. But 
you could definitely define a custom constructor instead -- Optional Homework

*/


import { Component  } from "react";

class Student extends Component {
    // We will not define a custom constructor 
    // The default constructor will call super(props), the parent constructor
    // super() constructor will accept props


    state = {
        result : "PASS"
    }


    // this will be the even handler callback function or the button
    toggleResult = () => {
        this.setState( 
            {result : this.state.result === "PASS" ? "FAIL" : "PASS" }
        )
    }


    render() {

        const { firstName, lastName } = this.props

        return (
            <aside className="card">
                <h3>
                    Student: {firstName} {lastName}
                </h3>

                <p>
                    Result : {this.state.result}
                </p>

                <button onClick={this.toggleResult}> Toggle Result</button>

            </aside>
        )
    }
}



export default Student