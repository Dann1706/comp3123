/*
Purpose:

Array methods:
    forEach( (currentElement) => {} )
    map( (currentElement) => {} )
    reduce( (currentElement) => {} )
    filter( (currentElement) => {} )
    search( (currentElement) => {} )
*/

const courseList = ["COMP3234", "COMP9865", "cOMP2233", "MATH2231"]
courseList.forEach((course) => {
    console.log(course + "!")
})

const filteredCourses = courseList.filter((currentElement) => {
    return currentElement[0] === "C"
})
console.log(filteredCourses)