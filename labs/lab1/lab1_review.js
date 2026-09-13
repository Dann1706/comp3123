/*
Purpose: Review JS concepts
Prototypes VS Classes
Regular functions, anonymous functions, arrow functions, callback functions
MERN: N stands for Node.js
*/


// var is global, and let is local.
var globalVariable = 100
let localVariable = 200

function functionName(){
    let varInFunction = "local"
}

// console.log(varInFunction) WILL FAIL

// Protytype - one-time-use object from a protytype
const oneTimeUseObj = {
    prop1: "Daniel",
    prop2: "comp3123",
    method1: function(param1){
        console.log(param1)
    } 
}

console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1("pizza")

// Prototype - using a constructor
function Student (student_name_p, course_p, lunch_p){
    this.student_name_p = student_name_p
    this.course_p = course_p
    this.lunch_p = lunch_p
    this.method1 = function(param1){
        return param1
    }
}

const morning_student = new Student("Daniel", "comp3123", "Pizza")
console.log(morning_student)
console.log(morning_student.student_name_p)
console.log(morning_student.course_p)
console.log(morning_student.method1(morning_student.lunch_p))


// Classes - always have constructors
class Prof{
    constructor(prof_name){
        this.prof_name = prof_name
    }
    method1(lunch){
        console.log(lunch)
    }
}
const morning_prof = new Prof("Daniel")
console.log(morning_prof.prof_name)
morning_prof.method1("burger")